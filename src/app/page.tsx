'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import { Footer } from '@/components/Footer';
import { FreeTrial } from '@/components/FreeTrial';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ImageBanners } from '@/components/ImageBanners';
import { PlansSection } from '@/components/PlansSection';
import { PreviewsSection } from '@/components/PreviewsSection';
import { Questions } from '@/components/Questions';
import { Testimonials } from '@/components/Testimonials';
import { TrustedSection } from '@/components/TrustedSection';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <Header />
        <Hero />
        <ImageBanners />
        <PreviewsSection />
        <TrustedSection />
        <Testimonials />
        <PlansSection />
        <Questions />
        <FreeTrial />
        <Footer />
      </section>
    </main>
  );
}
