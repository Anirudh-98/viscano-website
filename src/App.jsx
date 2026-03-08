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
const Results = lazy(() => import('./pages/Results'));
const Process = lazy(() => import('./pages/Process'));
const Insights = lazy(() => import('./pages/Insights'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Blog = lazy(() => import('./pages/Blog'));
const Pricing = lazy(() => import('./pages/Pricing'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080808]" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/digital-platforms" element={<DigitalPlatforms />} />
          <Route path="/solutions/brand-creative" element={<BrandCreative />} />
          <Route path="/solutions/media-production" element={<MediaProduction />} />
          <Route path="/solutions/growth-distribution" element={<GrowthDistribution />} />

          <Route path="/results" element={<Results />} />
          <Route path="/process" element={<Process />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

