import Image from 'next/image';

export default function CommunityPageHero() {
    return (
        <div className="flex-grow md:mb-20 pt-headerMobileInfobar lg:pt-headerDesktopInfobar">
            <div 
                className="relative -mt-headerMobile flex justify-center items-center min-h-[640px] flex-col overflow-hidden pt-headerMobile sm:min-h-[900px] lg:-mt-headerDesktop lg:pt-headerDesktop" 
                style={{ height: 'auto', backgroundColor: '#00F6FF' }}
            >
                <div className="container xl:max-w-screen-xl flex justify-center items-center relative z-10 grow text-3xl font-bold text-black -mt-36 md:-mt-48">
                    <div className="mx-auto max-w-xl xl:max-w-[45vw]">
                        <div className="prose max-w-none prose-headings:font-heading text-center text-h4 prose-headings:mb-4 prose-p:mx-auto prose-p:max-w-2xl prose-p:leading-relaxed prose-p:text-black">
                            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 sm:mb-6 font-bold tracking-wide">Join the Numbers DAO Community</h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8 font-normal">Numbers DAO is a community of innovators and blockchain enthusiasts. Connect with like-minded individuals, participate in governance, and help shape the future of decentralized finance.</p>
                            <div className="flex items-center justify-center gap-4 mt-4 sm:mt-8">
                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://discord.gg/yourlink" 
                                    className="group inline-flex font-heading tracking-wide uppercase no-underline items-center justify-center rounded text-sm sm:text-base lg:text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:text-secondary py-3 sm:py-4 px-6 sm:px-8"
                                >
                                    Join Our Discord
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-4 sm:h-6 w-4 sm:w-6 flex-shrink-0 fill-current ml-2">
                                        <path d="M13.4583 6.64901L5.82687 14.2644C5.69709 14.3884 5.54298 14.4503 5.36454 14.4503C5.18609 14.4503 5.03198 14.3884 4.9022 14.2644C4.77827 14.1346 4.71631 13.9805 4.71631 13.8021C4.71631 13.6236 4.77827 13.4695 4.9022 13.3398L12.5176 5.70832H5.86502C5.69456 5.70832 5.5425 5.64146 5.40883 5.50774C5.27515 5.374 5.20831 5.21856 5.20831 5.04141C5.20831 4.86424 5.27515 4.70889 5.40883 4.57534C5.5425 4.4418 5.69678 4.37503 5.87168 4.37503H14C14.2112 4.37503 14.396 4.45416 14.5542 4.61241C14.7125 4.77066 14.7916 4.9554 14.7916 5.16663V13.2949C14.7916 13.4699 14.7247 13.6241 14.591 13.7578C14.4573 13.8915 14.3018 13.9583 14.1247 13.9583C13.9475 13.9583 13.7922 13.8915 13.6586 13.7578C13.5251 13.6241 13.4583 13.4721 13.4583 13.3016V6.64901Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 h-full w-full" style={{ transform: 'none' }}>
                    <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-full w-full object-cover object-top">
                        <Image
                            src="https://cartesi.io/static/90df5cd405904e363c14d55b4680d745/dec56/hero.webp"
                            alt=""
                            className="h-full w-auto object-cover object-top"
                            fill
                            sizes="(min-width: 4000px) 4000px, 100vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}