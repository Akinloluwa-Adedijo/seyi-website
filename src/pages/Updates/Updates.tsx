import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import UpdateCard from "../../components/UpdateCard/UpdateCard";

const Updates = () => {
  return (
    <SectionWrapper title="Updates">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <UpdateCard
          title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
        />
        <UpdateCard
          title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
        />
        <UpdateCard
          title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
        />
        <UpdateCard
          title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
        />
        <UpdateCard
          title="Upcoming Album: OLUWASEYI, THE PROTAGONIST "
          imgSrc="/seyi-landing.jpg"
          imgAlt="Alt image goes here"
        />
      </div>
    </SectionWrapper>
  );
};

export default Updates;
