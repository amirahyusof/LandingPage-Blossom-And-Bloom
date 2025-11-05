"use client";

import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection(){
  return (
    <section id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFC5C5] pt-16">
        {/* Flower Garden */}
      <div className="absolute w-full min-h-screen">
        <Image
          src="/home.jpg"
          alt="Flower Garden"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/10"></div>

      <div className="container mx-auto px-4 z-10 -mt-40">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#89B9AD] font-extrabold drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] mb-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Flowers Speak Louder Than Words
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#faf3e0] drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)] mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fresh, handpicked blooms for every moment — crafted with love, delivered with care.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-[#C7DCA7] hover:bg-[#89B9AD] text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#89B9AD] text-[#89B9AD] hover:bg-[#89B9AD] hover:text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
