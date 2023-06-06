import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Contact from '../../components/contact/Contact'
import HeaderSecondary from '../../components/header/HeaderSecondary'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSecondary content='Contact' />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage