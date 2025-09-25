'use client'

import { useEffect, useState } from "react"; 
import {
    ClipboardList,
    Truck,
    PhoneCall,
    UserCheck,
    Umbrella,
    Clock,
    Droplets,
    HandHelping,
} from 'lucide-react';

export default function MovingDay() {
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
    
    const tips = [
        {
            icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
            title: "Let Us Handle the Heavy Lifting",
            description:
                "Moving day can feel stressful. Let us take care of the hard work so you can focus on your fresh start.",
        },
        {
            icon: <UserCheck className="w-6 h-6 text-green-600" />,
            title: "Be Present or Leave Clear Instructions",
            description:
                "If you can’t be there, please leave clear instructions and a contact number so we can reach you if needed.",
        },
        {
            icon: <HandHelping className="w-6 h-6 text-indigo-600" />,
            title: "Guide, Don’t Micromanage",
            description:
                "We welcome guidance, but micromanaging slows us down and may increase your costs. Trust our process!",
        },
        {
            icon: <Umbrella className="w-6 h-6 text-orange-500" />,
            title: "Rainy Day Prep",
            description:
                "We’ll lay down protective material, but extra towels or rags are helpful—especially on wet days.",
        },
        {
            icon: <Droplets className="w-6 h-6 text-cyan-500" />,
            title: "Breaks on Hot Days",
            description:
                "Our crew may take short breaks in extreme heat. You won’t be charged for this time, and cold water is always appreciated!",
        },
    ];


    return (
        <section style={{ marginTop: `${navHeight}px`, }} className="bg-white py-16 px-6 lg:px-20">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#007a9f] mb-4">Moving Day Tips</h2>
                <p className="text-gray-700">
                    The big day can feel stressful, but we’re here to handle the hard work and heavy lifting.
                    Here are a few things to keep in mind so your move goes as smoothly as possible:
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex-shrink-0">{tip.icon}</div>
                        <div>
                            <h3 className="text-lg text-black font-semibold mb-1">{tip.title}</h3>
                            <p className="text-gray-600 text-sm">{tip.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-lg font-medium text-gray-800">
                    Relax, let us do the heavy lifting, and enjoy your fresh start. 🚚✨
                </p>
            </div>
        </section>
    );
}
