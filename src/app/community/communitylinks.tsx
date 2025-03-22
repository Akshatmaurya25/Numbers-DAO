import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function CommunityLinks() {
  return (
    <div className="p-5">
      <section className="flex flex-col justify-center items-center py-section">
        <div className="container xl:max-w-screen-xl">
          <div className="mb-8 lg:mb-16">
            <div className="flex max-w-screen-sm flex-col items-start">
              <p className="before:bg-tertiary before:w-1/3 before:h-[0.3rem] flex-col gap-5 text-base md:text-lg uppercase tracking-wide text-[#008BA3] font-semibold inline-flex  mb-6 lg:mb-8">
                Get Involved
              </p>
              <div className="prose max-w-none prose-headings:">
                <h1 className="text-3xl font-normal md:text-6xl text-black">
                  Join the conversation and stay connected
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-16 lg:grid-cols-4">
            {/* Twitter Card */}
            <CommunityCard
              href="https://x.com/Bhopal_DAO"
              icon={<FaXTwitter size={37} />}
              label="News & Updates"
              title="X (Twitter)"
              description="Stay up to date on the latest Numbers DAO news and join the conversation."
              members="1K+ Members"
            />

            {/* Linkedin Card */}
            <CommunityCard
              href="https://www.linkedin.com/company/bhopal-dao"
              icon={<FaLinkedin size={37} />}
              label="Open Source"
              title="LinkedIn"
              description="Get answers to your questions and connect with the global community."
              members="500+ Builders"
            />

            {/* Telegram Card */}
            <CommunityCard
              href="https://t.me/BhopalDAO"
              icon={<FaTelegram size={37} />}
              label="Discussion"
              title="Telegram"
              description="Stay in touch with the global Numbers DAO community."
              members="750+ Participants"
            />

            {/* Instagram Card */}
            <CommunityCard
              href="https://www.instagram.com/bhopal_dao/"
              icon={<FaInstagram size={37} />}
              label="Creation"
              title="Instagram"
              description="Join the discussion on the latest Numbers DAO happenings."
              members="650+ Creators"
            />
          </div>

          <div className="mb-8 mt-12 text-center">
            <a
              href="https://linktr.ee/Bhopal_DAO"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex font-heading tracking-wide uppercase no-underline items-center justify-center rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground hover:text-tertiary border border-primary py-3 px-16 sm:px-8"
            >
              Find More Channels
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-5 w-5 flex-shrink-0 fill-current"
              >
                <path d="M13.4583 6.64901L5.82687 14.2644C5.69709 14.3884 5.54298 14.4503 5.36454 14.4503C5.18609 14.4503 5.03198 14.3884 4.9022 14.2644C4.77827 14.1346 4.71631 13.9805 4.71631 13.8021C4.71631 13.6236 4.77827 13.4695 4.9022 13.3398L12.5176 5.70832H5.86502C5.69456 5.70832 5.5425 5.64146 5.40883 5.50774C5.27515 5.374 5.20831 5.21856 5.20831 5.04141C5.20831 4.86424 5.27515 4.70889 5.40883 4.57534C5.5425 4.4418 5.69678 4.37503 5.87168 4.37503H14C14.2112 4.37503 14.396 4.45416 14.5542 4.61241C14.7125 4.77066 14.7916 4.9554 14.7916 5.16663V13.2949C14.7916 13.4699 14.7247 13.6241 14.591 13.7578C14.4573 13.8915 14.3018 13.9583 14.1247 13.9583C13.9475 13.9583 13.7922 13.8915 13.6586 13.7578C13.5251 13.6241 13.4583 13.4721 13.4583 13.3016V6.64901Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CommunityCardProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  members: string;
}

function CommunityCard({
  href,
  icon,
  label,
  title,
  description,
  members,
}: CommunityCardProps) {
  return (
    <div className="relative rounded-2xl bg-black text-white overflow-hidden transition-all duration-500 group hover:scale-105">
      <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group items-center flex h-full flex-col p-6 relative z-10"
      >
      <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center">
      <div className="order-2 flex-grow lg:order-1 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      {icon}
      </div>
      <span className="order-1 rounded-full bg-[#008BA3]/10 px-3 py-1 text-xs text-[#008BA3] font-medium lg:order-2 border border-[#C0C0C0] relative z-10 transition-colors duration-300 group-hover:bg-black group-hover:text-[white]">
      {label}
      </span>
      </div>
      
      <div className="mt-6 flex w-full grow flex-col prose-p:text-sm prose-p:font-thin relative z-10">
      <div className="mb-8 flex flex-row items-start">
      <h3 className="m-0 flex grow flex-col gap-2 py-0 pl-0 text-lg font-medium transition-colors duration-300 group-hover:text-white sm:gap-3 sm:pr-4 lg:text-2xl">
      {title}
      </h3>
      <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block flex-shrink-0 fill-current h-[24px] w-[24px] transition-all duration-700 opacity-0 transform rotate-0 group-hover:opacity-100 group-hover:rotate-45 md:h-[32px] md:w-[32px]"
      >
      <path d="M13.4583 6.64901L5.82687 14.2644C5.69709 14.3884 5.54298 14.4503 5.36454 14.4503C5.18609 14.4503 5.03198 14.3884 4.9022 14.2644C4.77827 14.1346 4.71631 13.9805 4.71631 13.8021C4.71631 13.6236 4.77827 13.4695 4.9022 13.3398L12.5176 5.70832H5.86502C5.69456 5.70832 5.5425 5.64146 5.40883 5.50774C5.27515 5.374 5.20831 5.21856 5.20831 5.04141C5.20831 4.86424 5.27515 4.70889 5.40883 4.57534C5.5425 4.4418 5.69678 4.37503 5.87168 4.37503H14C14.2112 4.37503 14.396 4.45416 14.5542 4.61241C14.7125 4.77066 14.7916 4.9554 14.7916 5.16663V13.2949C14.7916 13.4699 14.7247 13.6241 14.591 13.7578C14.4573 13.8915 14.3018 13.9583 14.1247 13.9583C13.9475 13.9583 13.7922 13.8915 13.6586 13.7578C13.5251 13.6241 13.4583 13.4721 13.4583 13.3016V6.64901Z" />
      </svg>
      </div>
      <div className="flex grow flex-col">
      <div className="flex-grow">
      <p className="transition-colors duration-300 group-hover:text-white">{description}</p>
      </div>
      <p className="mt-4 transition-colors duration-300 group-hover:text-white">{members}</p>
      </div>
      </div>
      </a>
      <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#008BA3] rounded-full transition-transform duration-500 ease-out origin-center group-hover:scale-[17]"></div>
    </div>
  );
}
