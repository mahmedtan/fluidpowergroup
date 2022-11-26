import db from "db";

const ServicesHome = () => {
  return (
    <div className="bg-[#191919]" id="services">
      <div className="w-full wrapper    text-black flex">
        <div className="flex  min-h-max   text-yellow-600 border-yellow-600 border-r-2 border writing-tb text-2xl font-semibold p-1 sm:p-2 items-center justify-center">
          Services{" "}
        </div>

        <div className="h-full w-full ">
          <div className="flex flex-col gap-4 p-8 ">
            <div className="text-2xl sm:text-3xl font-semibold  text-yellow-600">
              Services
            </div>
            <div className="font-bold text-4xl sm:text-5xl text-yellow-500">
              What we provide
            </div>
          </div>

          {db.services.map((item, index) => (
            <div
              className="w-full p-7 sm:p-10  text-yellow-500 flex sm:flex-row flex-col  gap-4 sm:gap-10 border-yellow-600  border-t-2 h-full hover:bg-[#151515] hover:shadow-lg hover:shadow-yellow-400/50 hover:text-yellow-400 cursor-pointer transition-all duration-200"
              key={index}
            >
              <div className="w-full h-48 sm:h-28  sm:w-48 bg-slate-200/20 border border-slate-200/10">
                {/* <Image /> */}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="text-2xl sm:text-3xl font-semibold">{item}</div>
                <div className="text-xl text-yellow-600 sm:text-2xl font-light opacity-75">
                  Loren ipsum dolor sit amet consectetur adipisicing elit. Vel
                  rem vitae ad repellat nemo cum iusto eaque distinctio sequi
                  sint.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
