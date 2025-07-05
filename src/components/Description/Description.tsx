const phrase: string[] = [
  "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations.",
];

const Description = () => {
  return (
    <div className="text-2xl sm:text-[3vw] flex flex-wrap w-[90%]">
      {[phrase]}
    </div>
  );
};

export default Description;
