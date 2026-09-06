import React from "react";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import ContactData from "./ContactData/ContactData";
import ContactInfo from "./ContactInfo/ContactInfo";

const ContactPage = () => {
  return (
    <div>
      <HeaderBanner title={"Contact Us"} />
      <ContactData />
      <ContactInfo />
    </div>
  );
};

export default ContactPage;
