import React from 'react';
import { Calendar, Users, Dumbbell, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import Hero from './(main)/Hero';
import Benefits from './(main)/Benefits';
import Pricing from './(main)/Pricing';
import CTA from './(main)/CTA';

export default function CrossFitHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <Hero/>

      {/* Benefits Section */}
      <Benefits/>

      {/* Pricing Section */}
      <Pricing/>

      {/* CTA Section */}
      <CTA/>

      {/* Footer */}
    </div>
  );
}