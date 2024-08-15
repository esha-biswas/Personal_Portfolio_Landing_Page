import React from 'react';
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
    );
}
