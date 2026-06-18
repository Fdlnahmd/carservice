import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components loaded normally
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import HowToBook from "./components/HowToBook";
import WAButton from "./components/WAButton";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ScrollReveal from "./components/ScrollReveal";

// Skeleton fallbacks for lazy loaded components
import { CardSkeleton, FAQSeqSkeleton, FormSkeleton } from "./components/Skeleton";

// Lazy loaded components (for faster initial render)
const Testimonials = lazy(() => import("./components/Testimonials"));
const Pricing = lazy(() => import("./components/Pricing"));
const FAQ = lazy(() => import("./components/FAQ"));
const BookingForm = lazy(() => import("./components/BookingForm"));

// Homepage layout wrapper
const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Sticky Top Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <ScrollReveal>
          <Services />
        </ScrollReveal>

        {/* Why Choose Us */}
        <ScrollReveal>
          <WhyUs />
        </ScrollReveal>

        {/* Process Section */}
        <ScrollReveal>
          <HowToBook />
        </ScrollReveal>

        {/* Testimonials (Lazy Loaded) */}
        <Suspense fallback={<CardSkeleton count={3} />}>
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
        </Suspense>

        {/* Pricing (Lazy Loaded) */}
        <Suspense fallback={<CardSkeleton count={3} />}>
          <ScrollReveal>
            <Pricing />
          </ScrollReveal>
        </Suspense>

        {/* FAQ (Lazy Loaded) */}
        <Suspense fallback={<FAQSeqSkeleton />}>
          <ScrollReveal>
            <FAQ />
          </ScrollReveal>
        </Suspense>

        {/* Booking Form (Lazy Loaded) */}
        <Suspense fallback={<FormSkeleton />}>
          <ScrollReveal>
            <BookingForm />
          </ScrollReveal>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating official WhatsApp button */}
      <WAButton />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Routing fallback to custom 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
