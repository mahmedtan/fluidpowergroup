import Image from "next/image";

const LocationAbout = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-semibold">Our Location</h2>

      <div className="text-2xl w-full ">
        <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            alt="Map"
            src="/map.png"
          />

          <div className="absolute top-0 left-0 p-8 sm:p-16 flex items-center h-full">
            <div className=" bg-white p-8 sm:p-12 font-light shadow-xl rounded-2xl text-2xl sm:text-3xl">
              Unit 6, <br /> 13 Newman Street, <br /> Wangaratta, <br /> Victoria
              3677, Austrailia
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAbout;
