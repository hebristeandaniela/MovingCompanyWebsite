"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Local and Long Distance Moving",
        description:
            "We provide moving services for local or long distance moving of any size whether it's across town or across the country you can count on us to do the heavy lifting and delivery your goods safely and swiftly to your new location.",
    },
    {
        title: "Business Moving",
        description:
            "Looking to relocate your business to a better location? We can help you out! We can handle the loading, unloading and transporting of your precious cargo to help you make your transition easier. With our help you can get back to doing what you do best.",
    },
    {
        title: "Packing",
        description:
            "Need help packing? We can give you a hand with that!",
        cta: { text: "CALL US: 603-726-0345", href: "tel:603-726-0345" },
    },
    {
        title: "Junk Removal",
        description:
            "Do you have a pile of junk that you have been dreading to clean up? Call us to help!",
    },
    {
        title: "Garbage and Recycling Pick Up",
        description:
            "Tired of going to the dump every week? Call us and ask about our rates! We can make the trip so you don't have to! (Recycling must be pre-sorted for pick up)",
    },
    {
        title: "Pick up and Delivery (Residential or Business)",
        description:
            "Is there a piece of furniture on Marketplace that you want but have no way to get it home? A motorcycle you found on Craigslist that you can't get back by your self? We can help! Not only will we pick up your new item but we can help you get rid of your old mattress, couch or whatever it is you are replacing!",
    },
];

const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeOut", 
        },
    }),
};

export default function ServicesPage() {
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        const isMobile = window.innerWidth < 1024; // Tailwind breakpoint lg
        const navbar = isMobile
            ? document.getElementById("mobile-navbar")
            : document.getElementById("main-navbar");

        if (navbar) {
            setNavHeight(navbar.offsetHeight);
        }
    }, []);

    return (
        <div style={{ marginTop: `${navHeight}px`, }} className="w-full bg-white">
          

            {/* SERVICES GRID */}
            <div className="container text-center mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md"
                    >
                        <h3 className="text-xl text-black uppercase font-semibold mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        {service.cta && (
                            <a
                                href={service.cta.href}
                                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
                            >
                                {service.cta.text}
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* CTA FINAL */}
            <div className="w-full bg-[#007a9f] text-[#f4b88d] py-12 px-24 flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold font-serif">
                        We're Excited to Work With You!
                    </h3>
                </div>

                {/* Button */}
                <div className="flex-1 flex justify-center lg:justify-end">
                    <a
                        href="/requestQuote"
                        target="_blank"
                        className="bg-[#f4b88d] text-[#007a9f] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                    >
                        Book Now
                    </a>
                </div>
            </div>


        </div>
    );
}
