"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, House, Wallet, FileText } from "@phosphor-icons/react";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // fiecare feature are delay incremental
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Stellar Customer Experience",
      text: "What makes one moving experience different from the next? It’s how you feel with the people you’re working with. You can trust us when we say we will surprise and delight you throughout our time together.",
      icon: <Star size={50} weight="fill" color="#facc15" />, // galben profesionist
      
    },
    {
      title: "Locally Owned, Community Driven",
      text: "We take pride in serving our neighbors. We know the area, we know the people, and we believe in giving back. Through local partnerships and donations, we contribute to causes that make a positive impact. It’s our way of saying thank you and making a difference where it matters most.",
      icon: <House size={50} weight="fill" color="#16a34a" />, // verde
    },
    {
      title: "Honest Pricing, No Surprises",
      text: "Tired of adding up all the extra fees when comparing rates? We believe in straightforward, simple pricing so you can plan with confidence. Our pricing structure gives the control back to you when budgeting for your move!",
      icon: <Wallet size={50} weight="fill" color="#2563eb" />, // albastru
    },
    {
      title: "Free Quotes, No Obligation",
      text: "Get a free quote with no obligation to work with us. It only takes a few minutes, we’ll guide you every step of the way. Request a quote now.",
      icon: <FileText size={50} weight="fill" color="#f97316" />, // portocaliu
    },
  ];

  return (
    <div className ="bg-white">
      
    <div className="container bg-white text-black mx-auto py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-12 h-12 mb-4">{feature.icon}</div>
            <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{feature.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        {/* Animated Link */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}     // pornește jos și invizibil
          whileInView={{ opacity: 1, y: 0 }} // apare frumos în poziție normală
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }} // rulează o singură dată
          className="flex justify-center mt-10"
        >
          <Link
            href="/requestQuote"
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-[clamp(0.75rem,1vw,1.5rem)] py-[clamp(0.5rem,0.8vw,0.75rem)] rounded-full font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 transition-all"
          >
            Schedule Your Move
          </Link>
        </motion.div>
      </div>

    





      </div>
    </div>
  );
};

export default FeaturesSection;

  
