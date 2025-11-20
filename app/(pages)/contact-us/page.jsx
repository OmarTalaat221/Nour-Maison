import React from "react";
import PagesBanner from "../../../components/PagesBanner/PagesBanner";
import ContactContent from "../../../components/pages/ContactPage/ContactContent/Content";

// metadata
export const metadata = {
  title: "Contact Us - Nour Maison",
  description:
    "Get in touch with Nour Maison for inquiries, reservations, or feedback. We're here to assist you!",
  alternates: {
    canonical: "https://www.nourmaison.co.uk/contact-us",
  },
  keywords: [
    // Brand + Intent
    "Nour Maison contact",
    "contact Nour Maison",
    "Nour Maison phone number",
    "Nour Maison email",
    "get in touch with Nour Maison",
    "Nour Maison customer service",
    "Nour Maison reservation contact",
    "Nour Maison inquiries",
    "Nour Maison support",
    "Nour Maison feedback",
    "Nour Maison table booking contact",

    // Contact Page Intents
    "contact halal restaurant",
    "restaurant contact page UK",
    "how to reach Nour Maison",
    "book a table contact Nour Maison",
    "restaurant contact number Milton Keynes",
    "restaurant customer support UK",
    "get directions to Nour Maison",
    "make a reservation Nour Maison",
    "send feedback to restaurant",
    "restaurant enquiry UK",
    "speak to restaurant manager",
    "customer service for Nour Maison",

    // Location + Service Keywords
    "contact halal restaurant Milton Keynes",
    "restaurant booking number MK",
    "Nour Maison Milton Keynes contact",
    "restaurant address Milton Keynes",
    "halal restaurant communication",
    "French Middle Eastern restaurant contact",
    "brasserie Milton Keynes phone",
    "Nour Maison business hours",
    "restaurant availability enquiry",
    "contact for restaurant events Milton Keynes",
    "call halal restaurant MK",
    "café contact details Milton Keynes",

    // Google Search Behavior Phrases
    "how to contact a restaurant",
    "contact details for Nour Maison",
    "restaurant telephone MK",
    "restaurant contact Milton Keynes",
    "reach Nour Maison restaurant",
    "who to call at Nour Maison",
    "book table by phone Nour Maison",
    "restaurant email support",
    "restaurant feedback form",
    "contact for birthday booking",
    "how to message a restaurant",
    "restaurant contact page example",
    "restaurant communication Milton Keynes",
  ],
};

const Contact = () => {
  return (
    <>
      <PagesBanner
        title={"Contact US"}
        slogan={"Reach Us Anytime, Anywhere!"}
        scrollTo={"contact"}
      />

      <ContactContent />
    </>
  );
};

export default Contact;
