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
      <div className={`Helpcenter_helpcenterMain__b7pr6 ${poppins.className}`}>
        <div className="Helpcenter_helpcenterContainer__4PG4g">
          {/* Header Section */}
          <div className="Helpcenter_helpcenterSub__jdLnU ">
            <div className="Helpcenter_helpcenterHeader__ADkcO">
              <h3 className="">How can we help?</h3>
            </div>

            {/* Search Bar */}
            <div className="Helpcenter_searchSection__zGSSC">
              <div className="Helpcenter_searchInputGroup__xM+Lt">
                <input
                  type="text"
                  placeholder="Search"
                  className="Helpcenter_filterInput__KgG7H"
                />
                <img src="/searchlogo.svg" alt="seachsvg" />
              </div>
            </div>
          </div>

          {/* Grid Section */}
          <div className="Helpcenter_helpCenterGrid__XKpu2">
            {sections.map((section, index) => (
              <div key={index} className="Helpcenter_helpcenterCard__L3l76">
                <div className="">
                  <h4 className="">{section.title}</h4>
                  <div className="Helpcenter_cardInfoDiv__1Kmtr">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <a
                          href="#"
                          className="text-sm sm:text-base text-gray-600 hover:text-[#040D11] hover:underline transition-colors duration-150 block leading-relaxed"
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  );
};

export default HelpCenterPage;
