import React from "react";
import { Poppins } from "next/font/google";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/LandingPage/Header";
import GlobalFooter from "@/components/GlobalFooter";
import Footer from "@/components/LandingPage/Footer";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const HelpCenterPage = () => {
  const sections = [
    {
      title: "Getting Started",
      items: [
        "How to Register as a Team Member",
        "Setting Up Your Profile and Availability",
        "Understanding Service Types and Expectations",
        "Initial Training and Onboarding Process",
      ],
    },
    {
      title: "Service Guidelines",
      items: [
        "Standard Cleaning Protocols and Checklists",
        "Deep Cleaning vs. Regular Cleaning: Requirements and Differences",
        "Handling Special Requests from Clients",
        "Safety and COVID-19 Protocols",
      ],
    },
    {
      title: "Tools & Supplies",
      items: [
        "Essential Cleaning Supplies and Their Proper Use",
        "Eco-Friendly Products: What to Use and Why",
        "How to Maintain and Organize Your Cleaning Kit",
      ],
    },
    {
      title: "Billing & Payments",
      items: [
        "How Team Member Payments Are Processed",
        "Tracking Your Earnings and Payment Schedule",
        "Understanding Bonuses and Tips",
        "How to Report Billing Issues",
      ],
    },
    {
      title: "Client Interaction",
      items: [
        "Essential Cleaning Supplies and Their Proper Use",
        "Handling Difficult Clients",
        "Managing Client Requests Professionally",
        "What to Do if a Client Is Unhappy",
      ],
    },
    {
      title: "Policies & Procedures",
      items: [
        "Attendance and Punctuality Guidelines",
        "Rescheduling and Handling Cancellations",
        "What to Do in Case of an Emergency or Unexpected Delay",
        "Handling Property Damage Incidents",
      ],
    },
    {
      title: "Health & Safety",
      items: [
        "Safe Handling of Cleaning Chemicals",
        "Personal Protective Equipment (PPE) and Its Usage",
        "Dealing with Hazardous or Sensitive Areas",
      ],
    },
    {
      title: "Troubleshooting & Common Issues",
      items: [
        "Steps to Take if You're Unable to Enter the Client's Home",
        "What to Do in Case of Equipment Malfunction",
        "Managing Challenging Cleaning Situations (e.g., pet hair, stains)",
      ],
    },
    {
      title: "Professional Development",
      items: [
        "Tips for Improving Efficiency and Quality",
        "How to Gain Higher Ratings and Client Loyalty",
        "Advancement Opportunities and Specialized Training Programs",
      ],
    },
    {
      title: "Support & Resources",
      items: [
        "How to Contact the Support Team",
        "Reporting Issues or Concerns with Clients or Work",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div
        className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${poppins.className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[#040D11] mb-6 sm:mb-8">
              How can we help?
            </h1>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search"
                className="w-full pl-12 pr-4 py-6 text-base rounded-lg border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="bg-[#FFB0D70F] border border-gray-100 hover:shadow-lg transition-shadow duration-200 rounded-xl"
              >
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#040D11] mb-4 sm:mb-6">
                    {section.title}
                  </h2>
                  <ul className="space-y-3 sm:space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="text-sm sm:text-base text-gray-600 hover:text-[#040D11] hover:underline transition-colors duration-150 block leading-relaxed"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenterPage;
