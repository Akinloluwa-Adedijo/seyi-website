import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import useDocumentTitle from "../../utils/useDocumentTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
const Contact = () => {
  useDocumentTitle("Ṣèyí,ThePoet | Contact");
  return (
    <SectionWrapper title="Let's Make Something.">
      <ContactForm />
    </SectionWrapper>
  );
};

export default Contact;
