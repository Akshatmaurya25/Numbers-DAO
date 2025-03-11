import Image from "next/image";
import { FaDiscord, FaTelegram } from "react-icons/fa";

export default function CommunityPageHero() {
  return (
    <div className="flex-grow md:mb-20 pt-headerMobileInfobar lg:pt-headerDesktopInfobar">
      <div
        className="relative -mt-headerMobile flex justify-center items-center min-h-[640px] flex-col overflow-hidden pt-headerMobile sm:min-h-[900px] lg:-mt-headerDesktop lg:pt-headerDesktop"
        style={{ height: "auto", backgroundColor: "#000000" }}
      >
        <div className="container xl:max-w-screen-xl flex justify-center items-center relative z-10 grow text-3xl font-bold text-white -mt-36 md:-mt-48">
          <div className="mx-auto max-w-xl xl:max-w-[45vw]">
            <div className="prose max-w-none items-center flex flex-col prose-headings:font-heading text-center text-h4 prose-headings:mb-4 prose-p:mx-auto prose-p:max-w-2xl prose-p:leading-relaxed prose-p:text-black">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 font-bold tracking-wide">
                Join the Numbers DAO Community
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8 font-normal">
                Numbers DAO is a community of innovators and blockchain
                enthusiasts. Connect with like-minded individuals, participate
                in governance, and help shape the future of decentralized
                finance.
              </p>
              <div className="flex items-center bg-white/30 rounded w-fit justify-center gap-4 mt-4 sm:mt-8">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/yourlink"
                  className="group inline-flex font-heading tracking-wide uppercase no-underline items-center justify-center rounded text-sm sm:text-base lg:text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:text-secondary py-3 sm:py-4 px-6 sm:px-8"
                >
                  Join Our Tg
                  <FaTelegram className="ml-2 text-[22px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-full w-full"
          style={{ transform: "none" }}
        >
          <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained h-full w-full object-cover object-top">
            <Image
              src="https://cartesi.io/static/90df5cd405904e363c14d55b4680d745/dec56/hero.webp"
              alt=""
              className="h-full w-auto grayscale opacity-25 object-cover -translate-x-20 scale-125 object-top"
              fill
              sizes="(min-width: 4000px) 4000px, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
