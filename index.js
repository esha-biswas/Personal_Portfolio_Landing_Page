import React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My awesome portfolio website" />
        <meta name="keywords" content="portfolio, web developer, projects" />
        <meta property="og:title" content="My Portfolio" />
        <meta property="og:description" content="A portfolio showcasing my projects and skills." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);



  return {
    props: {
      posts: data,
    },
  };
}
