import { useEffect } from 'react';

/**
 * SEOHead — Lightweight per-page meta injector (no react-helmet dependency).
 * Updates document.title + head meta tags on mount/route change.
 *
 * Props:
 *   title       — page <title>
 *   description — meta description
 *   keywords    — meta keywords (comma-separated string)
 *   canonical   — canonical href (defaults to current URL)
 *   ogTitle     — og:title (falls back to title)
 *   ogDesc      — og:description (falls back to description)
 *   ogUrl       — og:url (falls back to canonical)
 */
export default function SEOHead({
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDesc,
    ogUrl,
    ogImage,
}) {
    useEffect(() => {
        // ── Title ──
        if (title) document.title = title;

        // Helper: upsert a <meta> tag
        const setMeta = (selector, attr, content) => {
            if (!content) return;
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                const [attrName, attrVal] = attr.split('=');
                el.setAttribute(attrName, attrVal.replace(/"/g, ''));
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        // Helper: upsert a <link> tag
        const setLink = (rel, href) => {
            if (!href) return;
            let el = document.querySelector(`link[rel="${rel}"]`);
            if (!el) {
                el = document.createElement('link');
                el.setAttribute('rel', rel);
                document.head.appendChild(el);
            }
            el.setAttribute('href', href);
        };

        const canonicalHref = canonical || window.location.href;
        const resolvedOgTitle = ogTitle || title;
        const resolvedOgDesc = ogDesc || description;
        const resolvedOgUrl = ogUrl || canonicalHref;
        const resolvedOgImage = ogImage || 'https://viscano.com/aboutlogo.jpg';

        setMeta('meta[name="description"]', 'name=description', description);
        setMeta('meta[name="keywords"]', 'name=keywords', keywords);
        setMeta('meta[property="og:title"]', 'property=og:title', resolvedOgTitle);
        setMeta('meta[property="og:description"]', 'property=og:description', resolvedOgDesc);
        setMeta('meta[property="og:url"]', 'property=og:url', resolvedOgUrl);
        setMeta('meta[property="og:image"]', 'property=og:image', resolvedOgImage);
        setMeta('meta[name="twitter:title"]', 'name=twitter:title', resolvedOgTitle);
        setMeta('meta[name="twitter:description"]', 'name=twitter:description', resolvedOgDesc);
        setMeta('meta[name="twitter:image"]', 'name=twitter:image', resolvedOgImage);
        setLink('canonical', canonicalHref);

        return () => {
            // Reset to global defaults on unmount
            document.title = 'Viscano — Creative Studio | Brand, Web Design & Development in Hyderabad';
        };
    }, [title, description, keywords, canonical, ogTitle, ogDesc, ogUrl, ogImage]);

    return null;
}
