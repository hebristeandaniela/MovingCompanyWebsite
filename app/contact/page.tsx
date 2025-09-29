'use client'

import { useEffect, useState } from "react";
const faqs = [
  {
    question: "How do I get a quote?",
    answer:
      "Just send us your name, phone number, and a brief description of your move. We’ll get back to you ASAP with a free quote—no commitment required until a contract is signed.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes! All quotes are 100% free. You’re not committed to anything until we finalize the details together.",
  },
  {
    question: "What’s the best way to contact you?",
    answer:
      "You can call us at 603-726-0345 or email mountainmenmover@gmail.com. We respond quickly and personally.",
  },
  {
    question: "Are you a local business?",
    answer:
      "Yes! We’re proudly based in Conway, NH, right in the heart of Mt. Washington Valley. We’re neighbors first, movers second.",
  },
  {
    question: "Do you give back to the community?",
    answer:
      "Absolutely. As we grow, we’re committed to giving back to the people we serve. Follow us to see how we support our local community!",
  },
];


export default function ContactCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section style={{ marginTop: `${navHeight}px`, }} className="grid  grid-cols-1 lg:grid-cols-2">
      {/* Left column */}
      <div className="bg-[#007a9f] text-white p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4 text-[#f4b88d]">
          Ready to move? <br /> We're here to help.
        </h2>
        <p className="mb-6 max-w-md">
          We don’t just move boxes—we move families, memories, and new
          beginnings. Let us take the weight off your shoulders and help you
          settle into your next season.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/requestQuote"
            target="_blank"
            className="bg-white text-[#007a9f] px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#f4b88d] hover:text-white transition"
          >
            Request a Quote
          </a>
          <a
            href="tel:6037260345"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
          >
            Call Us: 603-726-0345
          </a>



        </div>  

        <p className="text-white mt-5 max-w-md">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:mountainmenmover@gmail.com"
              className="underline text-[#f4b88d] hover:text-white transition"
            >
              mountainmenmover@gmail.com
            </a>
          </p>


{/* Yelp button (secondary CTA) */}
        {/* Yelp button */}
        <div className="mt-4">
          <a
            href="https://www.yelp.com/biz/mountain-men-movers-conway"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a32525] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#801616] transition inline-block"
          >
            ★ Read Our Reviews on Yelp
          </a>
        </div>

      </div>

      {/* Right column (FAQ) */}
      <div className="bg-[#f2f4f5] text-black p-10">
        <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-4 font-medium text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t bg-gray-50">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
