import Image from 'next/image';

export default function PixelatedPoster() {
    return (
        <section className="pt-6 lg:pt-10 relative px-4 lg:px-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-black text-white rounded-2xl p-6 lg:p-12 text-center relative overflow-hidden">
                    {/* Background image */}
                    <div className="absolute inset-0">
                        <Image
                            src="https://www.paymanai.com/assets/images/contact.png?v=0ddbad40b3"
                            alt="Background"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="opacity-80"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="text-2xl lg:text-[50px] leading-tight lg:leading-[58px] font-semibold mb-6 lg:mb-8">
                            Can&apos;t wait to give<br />your AI Agent top-end<br />financial capabilities?
                        </div>
                        <div className="flex justify-center space-x-4 cursor-pointer">
                            <a 
                                className="button-outline w-full lg:w-auto text-center block lg:inline-block" 
                                href=""
                            >
                                Talk To Us →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}