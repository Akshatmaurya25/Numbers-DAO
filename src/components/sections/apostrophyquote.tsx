import Image from 'next/image'

export default function ApostrophyQuote() {
    return (
        <div className='flex justify-center mb-10'>
            <section className="container w-[80%] py-6 lg:py-10 relative px-4 lg:px-0 text-black ">
                <div className="lg:mx-[100px] py-8 lg:py-12 text-center bg-[#FEFDFD] border border-[#E7E7E7] rounded-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    {/* Opening quote mark */}
                    <div className="absolute top-[-20px] md:top-[-30px] left-[40px] font-serif text-gray-200">
                        <Image
                            src="https://www.paymanai.com/assets/images/right-comma.svg?v=0ddbad40b3"
                            alt="Quote"
                            width={60}
                            height={60}
                            className="w-12 h-12 lg:w-[60px] lg:h-[60px]"
                        />
                    </div>

                    {/* Closing quote mark */}
                    <div className="absolute bottom-[-20px] md:bottom-[-30px] right-[40px] font-serif text-gray-200">
                        <Image
                            src="https://www.paymanai.com/assets/images/left-comma.svg?v=0ddbad40b3"
                            alt="Quote"
                            width={60}
                            height={60}
                            className="w-12 h-12 lg:w-[60px] lg:h-[60px]"
                        />
                    </div>

                    <div className="max-w-3xl mx-auto relative z-10 px-4 lg:px-0">
                        <h2 className="text-3xl lg:text-[50px] leading-tight lg:leading-[58px] font-bold mb-4 lg:mb-6">
                            Full autonomy for AI? We don&apos;t even give that to humans.
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8">
                            Don&apos;t get stuck wondering how or where your AI is spending money. Work
                            alongside your AI with smart controls and approvals. Because sometimes
                            even the brightest need a helping hand.
                        </p>
                        <a href="" className="button-outline-inverse hover:bg-[#F38264] w-full lg:w-auto text-center block lg:inline-block border-2 border-black rounded-full px-6 py-2">
                            Start Building →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}