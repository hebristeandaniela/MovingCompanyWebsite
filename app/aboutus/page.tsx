"use client";

import { useEffect, useState } from "react";

export default function AboutUs() {
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
        <div className="w-full">
           
             {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
                style={{ backgroundImage: "url('/assets/features1.png')", marginTop: `${navHeight}px`, }}
            >
                <div className="absolute inset-0 bg-gray-800/30"></div>
                <div className="relative text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        We are a small local business located in the heart of the Mt. Washington valley in Conway New Hampshire
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        We are dedicated to providing exceptional service to our customers  and believe in helping our local community by lending a helping hand where we can.
                    </p>
                    <a
                        href="#mission"
                        className="mt-6 inline-block bg-yellow-200 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
                    >
                        Learn More About Us
                    </a>
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="bg-gray-100 py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-blue-900">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 mb-4">
                            We believe in a community supporting each other, that's why as we grow our business and have the opportunity to give back to the people we serve, we will.
                        </p>
                        <p className="text-gray-700">
                            From the first box to the last, we treat every move as if it were
                            our own. Clear communication, punctuality, and stellar customer
                            experience are at the heart of everything we do.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="/assets/corey.png"
                            width={300}
                            height={300}
                            alt="Community Support"
                            className="rounded-lg shadow-lg max-w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Giving Back Section */}
            <section className="bg-blue-900 py-8 px-4 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Giving Back to Our Community
                    </h2>
                    <p className="text-lg md:text-xl mb-6">
                        As we grow, we dedicate ourselves to helping our local community
                        wherever we can. Follow us to see how we give back as we grow!
                    </p>
                    <a
                        href="https://www.facebook.com/share/15kvvMn7ra/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-200 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
                    >
                        Follow Us
                    </a>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl text-black font-bold mb-2">Customer First</h3>
                        <p className="text-gray-700">
                            Clear communication, punctuality, and stellar service are our top
                            priorities.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl text-black font-bold mb-2">Community Support</h3>
                        <p className="text-gray-700">
                            We believe in supporting our neighbors and giving back whenever
                            we can.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl text-black font-bold mb-2">Local Expertise</h3>
                        <p className="text-gray-700">
                            As a local business, we know the area and the people. We take
                            pride in serving our community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-900 py-8 px-4 text-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Let Us Help You Move & Give Back!
                </h2>
                <a
                    href="/requestQuote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-200 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
                >
                    Request a Quote
                </a>
            </section>
        </div>
    );
}


