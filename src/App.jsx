import React from "react";
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
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";

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

        {/* Testimonials */}
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        {/* Pricing */}
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>

        {/* Booking Form */}
        <ScrollReveal>
          <BookingForm />
        </ScrollReveal>
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
