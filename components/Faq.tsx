"use client";
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How do I start working with Sparkl?",
      answer: "Apply, complete the background check, and once approved, you'll get access to the Sparkl app to start accepting Missions."
    },
    {
      question: "Do I need my own cleaning supplies?",
      answer: "No, you don't need your own cleaning supplies. All necessary cleaning materials and equipment will be provided for each mission."
    },
    {
      question: "When do I get paid?",
      answer: "You get paid weekly for all completed jobs. Payments are processed every week, ensuring you receive your earnings promptly."
    },
    {
      question: "Can I choose which jobs I accept?",
      answer: "Yes, you have complete control over which jobs you accept. Browse available missions and select the ones that fit your schedule and preferences."
    },
    {
      question: "Do I need professional cleaning experience?",
      answer: "While professional experience is helpful, it's not required. We provide training and support to help you succeed in your cleaning missions."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={`w-full bg-white py-12 px-4 sm:py-16 md:py-20 ${poppins.className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold mb-8 sm:mb-12">
          Frequently Asked <span className="text-[#FD037E]">Questions</span>
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between text-left py-4 hover:opacity-70 transition-opacity"
              >
                <span className="text-base sm:text-[24px] font-semibold text-[#0A0A0A] pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#000120]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#000120]" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="pb-4 pr-8">
                  <p className="text-sm sm:text-[18px] text-[#777777] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}