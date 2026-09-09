"use client";

import { AppProvider } from "@/lib/app-context";
import { ToastProvider } from "@/hooks/use-toast";
import { Toaster } from "@/components/Toaster";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { BeyondWork } from "@/components/BeyondWork";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function HomePage() {
  return (
    <AppProvider>
      <ToastProvider>
        <div className="pf-app">
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhatIDo />
            <Projects />
            <Stack />
            <BeyondWork />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </ToastProvider>
    </AppProvider>
  );
}
