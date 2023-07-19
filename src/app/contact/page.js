import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from './contact.module.css'

const Contact = () => {
    return (
      <>
        <h1>Contact Us</h1>
        <ContactCard/>
        <ContactForm/>
      </>
    );
  };
  
  export default Contact;