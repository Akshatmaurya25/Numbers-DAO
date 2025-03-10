import Image from "next/image";

export default function ApostrophyQuote() {
  return (
    <div className="flex justify-center mb-10">
      <section className="container w-[80%] py-6 lg:py-10 relative lg:px-0 text-white ">
        <div className="lg:mx-[100px]  py-8 lg:py-12 text-center
        //  hoverShadow 
        hover-shadow-box-animation
         bg-[#000000] border border-[#E7E7E7] rounded-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          {/* Opening quote mark */}
          {/* <div className="absolute top-[-20px] md:top-[-30px] left-[40px] font-serif text-gray-200">
                        <Image
                            src="https://www.paymanai.com/assets/images/right-comma.svg?v=0ddbad40b3"
                            alt="Quote"
                            width={60}
                            height={60}
                            className="w-12 h-12 lg:w-[60px] lg:h-[60px]"
                        />
                    </div> */}

          {/* Closing quote mark */}
          {/* <div className="absolute bottom-[-20px] md:bottom-[-30px] right-[40px] font-serif text-gray-200">
                        <Image
                            src="https://www.paymanai.com/assets/images/left-comma.svg?v=0ddbad40b3"
                            alt="Quote"
                            width={60}
                            height={60}
                            className="w-12 h-12 lg:w-[60px] lg:h-[60px]"
                        />
                    </div> */}

          <div className="max-w-3xl flex flex-col  justify-center items-center mx-auto relative z-10 px-4 lg:px-0">
            <h2 className="text-3xl lg:text-[50px] leading-tight lg:leading-[58px] font-bold mb-4 lg:mb-6">
            Driving Innovation and Collaboration
            </h2>
            <p className="text-base lg:text-lg text-whi mb-6 lg:mb-8">
            We aim to unlock the potential of talent across global market, helping them learn, collaborate, and create impactful solutions for the future of Web3 and AI
            </p>
            <a
              href=""
              className="button-outline-inverse hover:text-white  hover:bg-[#0d71ec] bg-[#0d71ec]/30 transition-all duration-150 border-1 border-solid border-[#0d71ec] w-full lg:w-auto text-center block lg:inline-block border-2  rounded-full px-6 py-2 max-w-48"
            >
              Start Building →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
