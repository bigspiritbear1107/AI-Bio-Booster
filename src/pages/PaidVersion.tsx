import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';
import 'react-circular-progressbar/dist/styles.css';
import 'keen-slider/keen-slider.min.css';

import Header from '../components/Header';
import LanguageSidebar from '../components/Language_conversion';
import Footer from '../components/Footer';
import content from '../data/en.json';

// Section components
import HeroSection from '../Sections/Free/Hero';
import AboutSection from '../Sections/Free/About';
import FaqSection from '../Sections/Free/Faq';
import CommentsSection from '../Sections/Free/Comments';
import AnalysisSection from '../Sections/Free/FreeAnalysis';

export default function PaidVersion() {
  const [selectedPlatform, setSelectedPlatform] = useState('LinkedIn');
  const [bioText, setBioText] = useState('');
  const [bioScore, setBioScore] = useState(50);
  const [openFaq, setOpenFaq] = useState('what-is');
  const [current, setCurrent] = useState(0);

  const testimonials = content.testimonials;
  const faqs = content.faqs;

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LanguageSidebar />

      <HeroSection />
      <AboutSection />
      <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} faqs={faqs} />
      <CommentsSection
        testimonials={testimonials}
        current={current}
        next={next}
        prev={prev}
      />
      <AnalysisSection
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
        bioText={bioText}
        setBioText={setBioText}
        bioScore={bioScore}
      />

      <Footer />

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <Link
          to="#"
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700"
        >
          <Crown className="h-5 w-5 mr-2" />
          Upgrade to Premium
        </Link>
      </div>
    </div>
  );
}
