import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import HeaderSecondary from "../../components/header/HeaderSecondary";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className={styles.contactPage}>
      <Navbar />
      <HeaderSecondary content="Contact" />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
