import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Eagerly load Home (first paint)
import Home from './pages/Home';

// Lazy load all other pages (only downloaded when navigated to)
const Solutions = lazy(() => import('./pages/Solutions'));
const DigitalPlatforms = lazy(() => import('./pages/services/DigitalPlatforms'));
const BrandCreative = lazy(() => import('./pages/services/BrandCreative'));
const MediaProduction = lazy(() => import('./pages/services/MediaProduction'));
const GrowthDistribution = lazy(() => import('./pages/services/GrowthDistribution'));

// Individual service pages
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'));
const SaasProducts = lazy(() => import('./pages/services/SaasProducts'));
const Ecommerce = lazy(() => import('./pages/services/Ecommerce'));
const MobileApps = lazy(() => import('./pages/services/MobileApps'));
const BrandIdentity = lazy(() => import('./pages/services/BrandIdentity'));
const LogoDesign = lazy(() => import('./pages/services/LogoDesign'));
const UiUxDesign = lazy(() => import('./pages/services/UiUxDesign'));
const PitchDeck = lazy(() => import('./pages/services/PitchDeck'));
const PhotographyService = lazy(() => import('./pages/services/PhotographyService'));
const SocialMediaContent = lazy(() => import('./pages/services/SocialMediaContent'));
const DigitalMarketing = lazy(() => import('./pages/services/DigitalMarketing'));
const AnalyticsOptimization = lazy(() => import('./pages/services/AnalyticsOptimization'));
const Results = lazy(() => import('./pages/Results'));
const Process = lazy(() => import('./pages/Process'));
const Insights = lazy(() => import('./pages/Insights'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Blog = lazy(() => import('./pages/Blog'));
const ViscanoSeoBlog = lazy(() => import('./pages/blog/ViscanoSeoBlog'));
const BlogLogo = lazy(() => import('./pages/blog/BlogLogo'));
const BlogFiveSecond = lazy(() => import('./pages/blog/BlogFiveSecond'));
const BlogBuildingFast = lazy(() => import('./pages/blog/BlogBuildingFast'));
const BlogPRD = lazy(() => import('./pages/blog/BlogPRD'));
const BlogMotion = lazy(() => import('./pages/blog/BlogMotion'));
const BlogRebranding = lazy(() => import('./pages/blog/BlogRebranding'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Learn = lazy(() => import('./pages/Learn'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/Privacy'));
const RDF = lazy(() => import('./pages/RDF'));

// Admin Routes
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const AdminForgotPassword = lazy(() => import('./pages/admin/ForgotPassword'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminJobPostings = lazy(() => import('./pages/admin/JobPostings'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080808]" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Solutions />} />
          <Route path="/services/digital-platforms" element={<DigitalPlatforms />} />
          <Route path="/services/brand-creative" element={<BrandCreative />} />
          <Route path="/services/media-production" element={<MediaProduction />} />
          <Route path="/services/growth-distribution" element={<GrowthDistribution />} />

          {/* Individual Service Pages */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/saas-products" element={<SaasProducts />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/services/pitch-deck" element={<PitchDeck />} />
          <Route path="/services/photography" element={<PhotographyService />} />
          <Route path="/services/social-media-content" element={<SocialMediaContent />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/analytics-optimization" element={<AnalyticsOptimization />} />

          <Route path="/results" element={<Results />} />
          <Route path="/process" element={<Process />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/leading-creative-studio-hyderabad-visakhapatnam" element={<ViscanoSeoBlog />} />
          <Route path="/blog/why-your-logo-is-the-last-thing-your-brand-needs" element={<BlogLogo />} />
          <Route path="/blog/the-5-second-rule-for-ui-that-converts" element={<BlogFiveSecond />} />
          <Route path="/blog/building-fast-vite-react-and-shipping-on-day-1" element={<BlogBuildingFast />} />
          <Route path="/blog/the-prd-as-a-design-brief-how-we-scope-projects-differently" element={<BlogPRD />} />
          <Route path="/blog/motion-design-isnt-decoration-its-communication" element={<BlogMotion />} />
          <Route path="/blog/rebranding-without-losing-your-audience" element={<BlogRebranding />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* RDF Standalone Landing Page */}
        <Route path="/rdf" element={<RDF />} />
        <Route path="/services/rdf-motion-video" element={<RDF showViscanoNav />} />

        {/* Admin Routes (Without Public Layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/jobs" element={<ProtectedRoute><AdminJobPostings /></ProtectedRoute>} />
      </Routes>
    </Suspense>
  );
}

export default App;
