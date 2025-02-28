import Image from "next/image";
import Card1 from "@/assests/card1.svg";
import Card2 from "@/assests/card2.svg";
import Card3 from "@/assests/card3.svg";
export default function CardHero() {
  return (
    <div className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8 text-center text-black ">
      <h2 className="text-3xl lg:text-[50px] leading-tight lg:leading-[58px] font-semibold mb-4">
        Uniting Builders and
        <br className="hidden lg:block" />
        <div className="md:hidden"> </div>Ecosystems w/- Purpose
      </h2>
      {/* <p className="mb-4 text-sm lg:text-base">
        We thought of everything so you don&apos;t have to
      </p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
        <div className="p-4 lg:p-6">
          <Image
            src={Card1}
            width={500}
            height={300}
            className="w-auto"
            alt="Fund Source"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4 mb-2 lg:mb-4">
            Empower Your Builder Journey{" "}
          </h3>
          <p className="text-sm lg:text-base text-gray-600">
            Numbers DAO empowers builders on their unique journey, offering
            personalized dashboards.
          </p>
        </div>
        <div className="p-4 lg:p-6">
          <Image
            src={Card2}
            width={500}
            height={300}
            className="w-auto"
            alt="Fund Source"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4 mb-2 lg:mb-4">
            Build Your Global Network
          </h3>
          <p className="text-sm lg:text-base text-gray-600">
            Join our thriving community, collaborate with builders, and
            participate in events to grow your web3 network.
          </p>
        </div>
        <div className="p-4 lg:p-6">
          <Image
            src={Card3}
            width={500}
            height={300}
            className="w-auto"
            alt="Fund Source"
          />
          <h3 className="text-lg lg:text-xl font-semibold mt-4 mb-2 lg:mb-4">
            Ecosystem Hub Integration
          </h3>
          <p className="text-sm lg:text-base text-gray-600">
            Get introduced to ecosystems and create tailored growth paths with
            jobs, tutorials, and events.
          </p>
        </div>
      </div>
    </div>
  );
}
