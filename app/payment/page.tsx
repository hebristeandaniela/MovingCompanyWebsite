'use client'

import { useEffect, useState } from "react"; 
import { CreditCard, DollarSign, Bitcoin, Smartphone, FileText } from "lucide-react";

export default function PaymentOptions() {
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
    
    const payments = [
        {
            icon: <DollarSign className="w-8 h-8 text-green-600" />,
            title: "Cash",
            description: "Always welcome!",
        },
        {
            icon: <FileText className="w-8 h-8 text-blue-600" />,
            title: "Check",
            description: "Must include current phone number and DL number.",
        },
        {
            icon: <CreditCard className="w-8 h-8 text-indigo-600" />,
            title: "Credit/Debit",
            description: "A 3% service fee will be added.",
        },
        {
            icon: <Bitcoin className="w-8 h-8 text-yellow-500" />,
            title: "Crypto",
            description: "We accept BTC, XRP, WLFI, SOL, ETH. Get a 5% discount!",
        },
        {
            icon: <Smartphone className="w-8 h-8 text-pink-600" />,
            title: "Venmo",
            description: "Quick and easy digital payments.",
        },
        {
            icon: <Smartphone className="w-8 h-8 text-gray-800" />,
            title: "Apple / Android Pay",
            description: "A 3% service fee will be added.",
        },
        
    ];

    return (
        <section style={{ marginTop: `${navHeight}px`, }}  className="bg-gray-50 py-16 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-[#007a9f] mb-4">Payment Options</h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    We accept all forms of payment! In today's world, there are a variety of ways
                    to pay for your goods and services—and we embrace them all.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {payments.map((pay, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
                    >
                        <div className="flex justify-center mb-4">{pay.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{pay.title}</h3>
                        <p className="text-gray-600 text-sm">{pay.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
