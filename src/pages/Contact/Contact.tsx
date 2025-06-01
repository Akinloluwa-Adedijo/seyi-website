const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight uppercase">
          Șèyí,ThePoet
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Artist based in Vancouver
        </p>
        <button
          // onClick={() => setIsContactOpen(true)}
          className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Let's Make Something
        </button>
      </div>
    </div>
  );
};

export default Contact;
