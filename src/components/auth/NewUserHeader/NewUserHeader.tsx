import Image from "next/image";

export const NewUserHeader = () => {
  return (
    <div className="relative bg-emerald-800">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          src={"/images/8488221_3921258.jpg"}
          height={500}
          width={500}
          alt="A person wearing a mask while working on a computer"
        />
        <div
          className="absolute inset-0 bg-emerald-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-extralight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome
        </h1>
      </div>
    </div>
  );
};
