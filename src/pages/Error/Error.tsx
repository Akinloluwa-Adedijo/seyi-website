import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import useDocumentTitle from "../../utils/useDocumentTitle";

const Error = () => {
  useDocumentTitle("OOps! Page Not Found");
  return (
    <SectionWrapper title="OOps! Page Not Found">
      <div className="bg-yellow-300 text-black p-5 text-xl font-medium">
        <a href="/">Go to Home</a>
      </div>
    </SectionWrapper>
  );
};

export default Error;
