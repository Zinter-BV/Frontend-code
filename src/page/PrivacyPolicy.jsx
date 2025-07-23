import React, { useEffect } from "react";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="  w-full  bg-gradient-to-b mt-[80px] from-[#E8F5F5] to-white">
        <div className="w-[90vw] heroSection pt-14 max-w-[1500px] items-center flex justify-between mx-auto">
          <div className="w-[70%] mx-auto  ">
            <h1 className="font-unbounded font-semibold text-[48px] text-black ">
              Privacy Policy
            </h1>
            <hr className="my-5" />
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                1. INTRODUCTION
              </h3>
              <p className="w-full text-[#707070] leading-[160%] text-[16px] font-sans  ">
                Zinter BV ("we," "us," or "our") is a logistics tech company
                specializing in moving services. Zinter BV is registered in the
                Netherlands. We are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                & Cookies Statement explains how we collect, use, and protect
                your data when you use our services, including our website and
                any associated platforms.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                2. INFORMATION WE COLLECT
              </h3>
              <p className="w-full flex flex-col  ">
                <span className="text-[#707070] leading-[160%] text-[16px] font-sans ">
                  a. Personal Data When you use our moving services or interact
                  with our platform, we may collect the following information:
                  Identity & Contact Data: Name, phone number, email address,
                  home/office address.
                </span>
                <span className="text-[#707070] my-3 leading-[160%] text-[16px] font-sans ">
                  Moving Details: Pick-up and drop-off locations, type and
                  volume of goods, preferred moving dates. Billing & Payment
                  Data: Payment method details, transaction history. Customer
                  Support Data: Communications and queries related to your
                  bookings or service requests.
                </span>
                <span className="text-[#707070] leading-[160%] text-[16px] font-sans ">
                  b. Technical & Usage Data Device Information: IP address,
                  browser type, operating system. Usage Data: Interactions with
                  our platform, page visits, service preferences. Cookies &
                  Tracking Technologies: Information collected via cookies and
                  analytics tools.
                </span>
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                3. HOW WE USE YOUR INFORMATION
              </h3>
              <p className="w-full flex flex-col  ">
                <span className="text-[#707070] font-bold leading-[160%] text-[16px] font-sans ">
                  We use your data to:
                </span>
                <span className="text-[#707070] my-3 leading-[160%] text-[16px] font-sans ">
                  Process and fulfill moving service requests.
                </span>
                <span className="text-[#707070] leading-[160%] text-[16px] font-sans ">
                  Communicate updates regarding your bookings
                </span>
                <span className="text-[#707070] my-3 leading-[160%] text-[16px] font-sans ">
                  Improve our services through analytics and feedback.
                </span>
                <span className="text-[#707070] leading-[160%] text-[16px] font-sans ">
                  Ensure the security and functionality of our platform.
                </span>
                <span className="text-[#707070] my-3 leading-[160%] text-[16px] font-sans ">
                  Comply with legal and regulatory requirements.
                </span>
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                4. H0W WE SHARE YOUR INFORMATION
              </h3>
              <p className="w-full flex flex-col  ">
                <span className="text-[#707070] font-bold leading-[160%] text-[16px] font-sans ">
                  We do not sell your personal data. However, we may share it
                  with:
                </span>
                <span className="text-[#707070] my-3 leading-[160%] text-[16px] font-sans ">
                  Service Providers: Third-party logistics partners and moving
                  contractors.
                </span>
                <span className="text-[#707070] leading-[160%] text-[16px] font-sans ">
                  Payment Processors: To facilitate transactions securely.
                </span>
                <span className="text-[#707070] my-3 leading-[160%] text-[16px] font-sans ">
                  Legal Authorities: If required by law or in response to legal
                  requests.
                </span>
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                5. DATA SECURITY AND RETENTION
              </h3>
              <p className="w-full text-[#707070] leading-[160%] text-[16px] font-sans  ">
                We implement security measures to protect your data from
                unauthorized access and breaches. Your data is retained only for
                as long as necessary to fulfill the purpose of collection or
                comply with legal obligations.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                6. YOUR RIGHT & CHOICES
              </h3>
              <p className="w-full flex flex-col  ">
                <span className="text-[#707070] font-bold leading-[160%] text-[16px] font-sans ">
                  You have the right to:
                </span>
                <span className="text-[#707070] my-3 leading-[160%] text-[16px] font-sans ">
                  Access, update, or delete your personal data.
                </span>
                <span className="text-[#707070] leading-[160%] text-[16px] font-sans ">
                  Object to processing or request data portability.
                </span>
                <span className="text-[#707070] my-3 leading-[160%] text-[16px] font-sans ">
                  Withdraw consent for marketing communications.
                </span>
                <span className="text-[#707070] leading-[160%] text-[16px] font-sans ">
                  Adjust cookie settings via your browser.
                </span>
                <span className="text-[#707070] mt-3 leading-[160%] text-[16px] font-sans ">
                  To exercise your rights, contact us at privacy@zinter.nl.
                </span>
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                7. COOKIES POLICY
              </h3>
              <p className="w-full text-[#707070] leading-[160%] text-[16px] font-sans  ">
                Zinter BV uses cookies to enhance user experience and analyze
                platform performance. You can manage your cookie preferences
                through your browser settings.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                8. TYPES OF COOKIES WE USE
              </h3>
              <p className="w-full flex flex-col  ">
                <div className="flex items-center">
                  <span className="text-[#707070] font-bold leading-[160%] text-[16px] font-sans ">
                    Essential Cookies:
                  </span>
                  <span className="ml-1 text-[#707070] leading-[160%] text-[16px] font-sans  ">
                    Necessary for website functionality.
                  </span>
                </div>
                <div className="flex my-3 items-center">
                  <span className="text-[#707070] font-bold leading-[160%] text-[16px] font-sans ">
                    Analytics Cookies:
                  </span>
                  <span className="ml-1 text-[#707070] leading-[160%] text-[16px] font-sans  ">
                    Help us understand user behavior.
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#707070] font-bold leading-[160%] text-[16px] font-sans ">
                    Marketing Cookies:
                  </span>
                  <span className="ml-1 text-[#707070] leading-[160%] text-[16px] font-sans  ">
                    Personalize ads and offers
                  </span>
                </div>
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                9. UPDATES TO THIS STATEMENT
              </h3>
              <p className="w-full text-[#707070] leading-[160%] text-[16px] font-sans  ">
                We may update this policy from time to time. Any changes will be
                communicated on our website.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold mb-3 font-sans text-[#121212] text-[32px] ">
                10. CONTACT INFORMATION
              </h3>
              <p className="w-full text-[#707070] leading-[160%] text-[16px] font-sans  ">
                For any inquiries regarding these Terms & Conditions, please
                contact us: 📧 support@zinter.nl
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
