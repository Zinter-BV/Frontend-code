import question from "../Assets/question.svg";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQ = ({ showBackgroundColor }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What payment methods are supported?",
      answer:
        "We offer five specialized mentorship programs: Couples and Family Financial Mentorship, Teenagers' Financial Mentorship, Corps Members' Financial Mentorship, Retirement Wealth Planning Mentorship, and Elite Financial Mentorship. Each program is tailored to specific life stages and financial goals.",
    },
    {
      question: "How early should I book my move?",
      answer:
        "Our mentorship programs typically run for 3-6 months, depending on the specific program. The duration is designed to provide comprehensive learning while allowing time for practical application of financial strategies. Some programs offer extended support and follow-up sessions.",
    },
    {
      question: "Will the movers pack my stuff too?",
      answer:
        "We offer both online and in-person options to accommodate different preferences and locations. Our online programs include live video sessions, interactive workshops, and digital resources. In-person sessions are available in select locations and for group workshops.",
    },
    {
      question: "What's included in my quote?",
      answer:
        "Our mentors are certified financial professionals with extensive experience in wealth building, investment strategies, and financial planning. They hold relevant certifications and have proven track records in helping individuals and families achieve their financial goals.",
    },
    {
      question: "Is packing part of the deal or extra?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for all our mentorship programs. If you're not satisfied with the program within the first 30 days, you can request a full refund. We're confident in the value our programs provide.",
    },
    {
      question: "Can I reschedule if plans change?",
      answer:
        "Yes, you can upgrade or switch to a different mentorship program that better suits your needs. Our team will work with you to ensure a smooth transition and apply any applicable credits from your current program to the new one.",
    },
    {
      question: "Can I track my move in real time?",
      answer:
        "Absolutely! Each mentorship program includes personalized financial advice tailored to your specific situation, goals, and risk tolerance. Our mentors work closely with you to develop customized strategies for wealth building and financial success.",
    },
    {
      question: "What if I need storage , can you help?",
      answer:
        "All programs include comprehensive workbooks, financial planning templates, video tutorials, access to our online learning platform, and ongoing support materials. You'll also receive tools for budgeting, investment tracking, and goal setting.",
    },
    {
      question: "How is the cost of moving worked out?",
      answer:
        "No specific prerequisites are required, but some programs are designed for particular life stages or situations. For example, the Teenagers' program is for ages 13-19, while the Corps Members' program is specifically for NYSC participants. We'll help you choose the right program during consultation.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`w-full ${
        showBackgroundColor && "bg-gradient-to-br from-gray-50 to-gray-100"
      } py-8 sm:py-12 md:py-16 lg:py-20`}
    >
      <div className="mx-auto w-[90vw] max-w-[1500px]">
        {/* Mobile/Small Screen Layout */}
        <div className="block lg:hidden">
          {/* Header and Icon Side by Side */}
          <div className="flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
            <div className="flex-1 pr-4">
              <h2 className="text-[20px] font-unbounded sm:text-[25px] md:text-[28px] font-bold text-gray-800">
                Frequently Asked Questions
              </h2>
            </div>
            <img src={question} className="w-[70px] h-[90px] " alt="question" />
          </div>

          {/* FAQ Items Full Width */}
          <div className="w-full">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg mb-3 sm:rounded-xl md:rounded-2xl transition-all duration-300 border border-[#e9e9e9] scrollbar-hide "
              >
                {/* Question */}
                <button
                  className="w-full p-4 sm:p-5 md:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#373737] pr-4 leading-tight">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transform transition-transform duration-200" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transform transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                    <div className="h-px bg-gray-200 mb-4 sm:mb-5 md:mb-6"></div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center h-[1000px] justify-between">
          {/* Header Section */}
          <div className="text-center mb-8 flex justify-between w-[47%] h-full flex-col sm:mb-12 md:mb-16">
            <h2 className="text-[20px] font-unbounded sm:text-[25px] mt-[32px] w-[50%] font-bold md:text-[28px] lg:text-[38px] text-gray-800 mb-3 sm:mb-4 md:mb-6">
              Frequently Asked Questions
            </h2>
            <img
              src={question}
              className="w-[250px] h-[300px] "
              alt="question"
            />
          </div>

          {/* FAQ Items */}
          <div className="h-fit w-[50%] max-h-[1000px] scrollbar-hide overflow-y-auto pr-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg mb-3 sm:rounded-xl md:rounded-2xl transition-all duration-300 overflow-hidden border border-[#e9e9e9] "
              >
                {/* Question */}
                <button
                  className="w-full p-4 sm:p-5 md:p-6 lg:p-8 text-left hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#373737] pr-4 leading-tight">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transform transition-transform duration-200" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transform transition-transform duration-200" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8">
                    <div className="h-px bg-gray-200 mb-4 sm:mb-5 md:mb-6"></div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
