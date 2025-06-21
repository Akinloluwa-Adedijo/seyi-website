import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ContactForm from "../../components/ContactForm/ContactForm";
import useDocumentTitle from "../../utils/useDocumentTitle";
const Contact = () => {
  useDocumentTitle("Ṣèyí,ThePoet | Contact");
  return (
    <SectionWrapper title="Let's Make Something.">
      <ContactForm />
    </SectionWrapper>
  );
};

export default Contact;
