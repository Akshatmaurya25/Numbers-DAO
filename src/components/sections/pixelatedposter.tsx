import Image from "next/image";
import CalendlyEmbed from "@/components/sections/calendyEmbed";

export default function PixelatedPoster() {
  return (
    <section className="pt-6 lg:pt-10 relative ">
      <div className=" mx-auto ">
        <div className="bg-black text-white rounded p-6 lg:p-12 text-center relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            {/* <Image
                            src="https://www.paymanai.com/assets/images/contact.png?v=0ddbad40b3"
                            alt="Background"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="opacity-80"
                        /> */}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-fit">
            <div className="flex flex-col items-center ">
              <div className="">
                <div className="text-sm font-medium tracking-wider text-blue-400">
                  GET STARTED
                </div>
                <div className="w-full h-[2px] bg-blue-400 mt-1 opacity-50"></div>
              </div>
              <h2 className="text-2xl md:text-7xl lg:text-[50px] leading-tight lg:leading-[58px] font-semibold bg-gradient-to-r from-white/90 to-white/60 text-transparent bg-clip-text">
                Book A Call
              </h2>
            </div>
            <div className="items-center p-0 m-0 w-full max-w-3xl max-h-fit">
              {" "}
              {/* Added max-width for better layout */}
              <CalendlyEmbed url="https://calendly.com/pranesh25joshi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
