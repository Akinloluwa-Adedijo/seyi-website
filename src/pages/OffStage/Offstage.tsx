import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

type OffStageListProps = {
  name: string;
  albumName: string;
  year: number;
  readMore: string;
};
type PoemListProps = {
  name: string;
  year: number;
  theme: string;
  readMore: string;
};

const OffStageList = ({
  name,
  albumName,
  year,
  readMore,
}: OffStageListProps) => {
  return (
    <>
      <ul className="grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase pt-3 pb-3 gap-5 font-semibold hover:bg-yellow-300 hover:text-black transition-colors duration-300 ease-in">
        <li>{name}</li>
        <li>{albumName}</li>
        <li>{year}</li>
        <li>{readMore}</li>
      </ul>
    </>
  );
};
const PoemList = ({ name, year, theme, readMore }: PoemListProps) => {
  return (
    <>
      <ul className="grid grid-cols-3 sm:grid-cols-4 w-full border-t-2 border-yellow-300 uppercase pt-3 pb-3 gap-5 font-semibold hover:bg-yellow-300 hover:text-black transition-colors duration-300 ease-in">
        <li>{name}</li>
        <li>{year}</li>
        <li>{theme}</li>
        <li>{readMore}</li>
      </ul>
    </>
  );
};
const Offstage = () => {
  return (
    <SectionWrapper title="Offstage">
      <div className="flex flex-col w-full items-center ">
        <h3 className="text-3xl uppercase py-5">Music Reviews</h3>
        <div className="flex flex-col  w-full">
          <OffStageList
            name="Rema"
            albumName="Heis"
            year={2022}
            readMore="Read More"
          />
          <OffStageList
            name="Rema"
            albumName="Heis"
            year={2022}
            readMore="Read More"
          />
        </div>
      </div>
      <div className="flex flex-col w-full items-center ">
        <h3 className="text-3xl uppercase py-5">Poems</h3>
        <div className="flex flex-col  w-full">
          <PoemList
            name="Rema"
            year={2022}
            theme="Grief"
            readMore="Read More"
          />
        </div>
      </div>
      <div className="flex w-full items-end justify-between ">
        <h3 className="text-3xl uppercase">MEDIA</h3>
        <a href="">See all!</a>
      </div>
    </SectionWrapper>
  );
};

export default Offstage;
