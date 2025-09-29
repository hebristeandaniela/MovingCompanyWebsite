'use client';

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const requestQuote = () => {
    const form = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        fromAddress: "",
        toAddress: "",
        moveDate: "",
        moveSize: "",
        source: ""
    });

    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                setFormData({
                    firstName: parsed.firstName || '',
                    lastName: parsed.lastName || '',
                    email: parsed.email || '',
                    phone: parsed.phone || '',
                    fromAddress: parsed.fromAddress || '',
                    toAddress: parsed.toAddress || '',
                    moveDate: parsed.moveDate || '',
                    moveSize: parsed.moveSize || '',
                    source: parsed.source || ''
                });
            } catch (e) {
                console.error('Error reading saved data:', e);
            }
        }

        const savedTerms = localStorage.getItem('acceptedTerms');
        if (savedTerms === 'true') {
            setAcceptedTerms(true);
        }
    }, []);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        localStorage.setItem('formData', JSON.stringify(updatedData));
    };

    const handleCheckboxChange = () => {
        const updatedTerms = !acceptedTerms;
        setAcceptedTerms(updatedTerms);
        localStorage.setItem('acceptedTerms', String(updatedTerms));
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        if (form.current) {
            try {
                // 1️⃣ Email către client (confirmare)
                await emailjs.sendForm(
                    "service_nnupa8x",
                    "template_a49qsiu", // Template-ul pentru client
                    form.current,
                    "5-ockSdkTX5gKEYrR"
                );

                // 2️⃣ Email către admin (notificare)
                await emailjs.sendForm(
                    "service_nnupa8x",
                    "template_w3nanhp", // Template-ul pentru tine
                    form.current,
                    "5-ockSdkTX5gKEYrR"
                );

                setSuccess(true);
                localStorage.removeItem("formData");
                localStorage.removeItem("acceptedTerms");

                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    fromAddress: "",
                    toAddress: "",
                    moveDate: "",
                    moveSize: "",
                    source: ""
                });
                setAcceptedTerms(false);
            } catch (err) {
                console.error("❌ Error sending saved data:", err);
                setError(true);
            }
        }
    };

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
         
        <div
            style={{
                marginTop: `${navHeight}px`,
                backgroundImage: `url("/assets/features2.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-12 gap-8"
        >
       
                
                    {/* Left Side - Message */}
            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center text-white">
                  <h2 className="outlined-text uppercase text-4xl font-bold mb-4">Let’s get moving—your way.</h2>
                        <p className="mb-6 text-lg">
                            Fill out the form to get started, or give us a call at 603-726-0345. We’re not just movers—we’re neighbors. Born in the heart of Mt. Washington Valley, we believe moving should feel personal, not transactional. Whether you're heading across town or across the country, we’re here to lift the load and move you forward.    </p>
                <h2 className="outlined-text uppercase text-4xl font-bold mb-4">We offer:</h2>
                
                 <ul className="list-disc list-inside mb-6 text-sm text-white">
                            <li>Local & Long Distance Moving</li>
                            <li>Business Relocation</li>
                            <li>Packing Assistance</li>
                            <li>Junk Removal</li>
                            <li>Garbage & Recycling Pickup</li>
                            <li>Residential & Business Delivery</li>
                        </ul>
                <h2 className="outlined-text uppercase text-4xl font-bold mb-4">No pressure, no commitment.</h2>
                <p className="mb-6 text-lg">
                    We offer free quotes and honest service—because that’s how neighbors treat each other.</p>

                        <a
                    href="tel:603-726-0345"
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
                        >
                    📞 CALL US: 603-726-0345
                        </a>
                    </div>

            {/* Right Side - Form */}
            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full md:w-1/3 p-4 sm:p-6 md:p-8 space-y-4 bg-white rounded-2xl"
            >
                <h3 className="outlined-text uppercase text-2xl font-bold text-center mb-4">Request a Quote</h3>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full bg-gray-300 text-black border rounded-lg p-2" required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full bg-gray-300 text-black border rounded-lg p-2" required />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full bg-gray-300 text-black border rounded-lg p-2" required />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full bg-gray-300 text-black border rounded-lg p-2" required />
                <input type="text" name="fromAddress" placeholder="From Address" value={formData.fromAddress} onChange={handleChange} className="w-full bg-gray-300 text-black border rounded-lg p-2" required />
                <input type="text" name="toAddress" placeholder="To Address" value={formData.toAddress} onChange={handleChange} className="w-full bg-gray-300 text-black border rounded-lg p-2" required />
                <input type="date" name="moveDate" value={formData.moveDate} onChange={handleChange} className="w-full bg-gray-300 text-black border rounded-lg p-2" required />
                <select
                    name="moveSize"
                    value={formData.moveSize}
                    onChange={handleChange}
                    className="w-full border bg-gray-300 text-black rounded-lg p-2"
                    required
                >
                    <option value="">Select Move Size</option>
                    <option value="Small (Studio/1Bedroom)">Small (Studio/1Bedroom)</option>
                    <option value="Medium (2–3Bedrooms)">Medium (2–3Bedrooms)</option>
                    <option value="Large (4+Bedrooms / Full House)">Large (4+Bedrooms / Full House)</option>
                </select>
                <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-gray-300 text-black border rounded-lg p-2"
                    required
                >
                    <option value="">How did you find us?</option>
                    <option value="Cold Call">Cold Call</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Yelp">Yelp</option>
                    <option value="Referral">Referral</option>
                    <option value="Returning Customer">Returning Customer</option>
                </select>

                <button type="submit" className="w-full px-8 py-3 bg-[#28a745] text-white rounded-full hover:bg-green-900 transition">
                    Request a Quote
                </button>

                {success && <p className="text-green-600 text-center"> ✅ Message sent successfully !</p>}
                {error && <p className="text-red-600 text-center"> ❌ An error occurred while sending.</p>}
            </form>
        </div>
    );
};

export default requestQuote;
