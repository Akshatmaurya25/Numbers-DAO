import DeveloperSection from "@/components/sections/developer-section";
import PartnerCarousel from "@/components/sections/partner-carousel";
import React from "react";
import ProfileCard from "./profile-card";

function page() {
  const datadummy = [
    {
      name: "Alice Johnson",
      title: "Software Engineer",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Michael Smith",
      title: "Product Manager",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Sophia Martinez",
      title: "UX Designer",
      imageUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    },
    {
      name: "David Lee",
      title: "Data Scientist",
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
    {
      name: "Emily Brown",
      title: "Marketing Specialist",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    },
    {
      name: "Daniel Kim",
      title: "Blockchain Developer",
      imageUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    },
    {
      name: "Jessica White",
      title: "Content Strategist",
      imageUrl: "https://images.unsplash.com/photo-1542206395-9feb3edaa68f",
    },
    {
      name: "William Garcia",
      title: "AI Researcher",
      imageUrl: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
    },
    {
      name: "Olivia Wilson",
      title: "Cybersecurity Analyst",
      imageUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004",
    },
    {
      name: "James Anderson",
      title: "Cloud Architect",
      imageUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    },
    {
      name: "Henry Clark",
      title: "Machine Learning Engineer",
      imageUrl: "https://images.unsplash.com/photo-1545996124-0501ebae030d",
    },
    {
      name: "Ava Robinson",
      title: "HR Manager",
      imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    },
    {
      name: "Ethan Harris",
      title: "Game Developer",
      imageUrl: "https://images.unsplash.com/photo-1546964124-0cce460f38ef",
    },
    {
      name: "Charlotte Moore",
      title: "Financial Analyst",
      imageUrl: "https://images.unsplash.com/photo-1542222257-29176c79fdc5",
    },
    {
      name: "Liam Turner",
      title: "DevOps Engineer",
      imageUrl: "https://images.unsplash.com/photo-1554384645-13eab165c24b",
    },
    {
      name: "Isabella Walker",
      title: "Graphic Designer",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
    {
      name: "Noah Scott",
      title: "IT Consultant",
      imageUrl: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7",
    },
    {
      name: "Mia Adams",
      title: "Content Writer",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      name: "Lucas Nelson",
      title: "Security Engineer",
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    },
    {
      name: "Amelia Carter",
      title: "Full-Stack Developer",
      imageUrl: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368",
    },
    {
      name: "Benjamin Ramirez",
      title: "AI Ethicist",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    },
    {
      name: "Harper Campbell",
      title: "Business Analyst",
      imageUrl: "https://images.unsplash.com/photo-1517701604594-6d021c2e4303",
    },
    {
      name: "Mason Mitchell",
      title: "Systems Architect",
      imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    },
    {
      name: "Evelyn Perez",
      title: "SEO Specialist",
      imageUrl: "https://images.unsplash.com/photo-1558898479-26be16b321b4",
    },
    {
      name: "Elijah Roberts",
      title: "Game Designer",
      imageUrl: "https://images.unsplash.com/photo-1573497161562-24827b2edab4",
    },
    {
      name: "Abigail Hall",
      title: "Digital Marketing Manager",
      imageUrl: "https://images.unsplash.com/photo-1542327897-035c98810303",
    },
    {
      name: "Alexander Allen",
      title: "Cloud Engineer",
      imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48",
    },
    {
      name: "Ella Young",
      title: "Robotics Engineer",
      imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    },
    {
      name: "Jack Hernandez",
      title: "Tech Lead",
      imageUrl: "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2",
    },
    {
      name: "Scarlett King",
      title: "E-commerce Manager",
      imageUrl: "https://images.unsplash.com/photo-1523307730650-594bc63a0df7",
    },
    {
      name: "Aiden Scott",
      title: "AR/VR Developer",
      imageUrl: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      name: "Luna Green",
      title: "Corporate Lawyer",
      imageUrl: "https://images.unsplash.com/photo-1504253163759-3e46fefbbc7c",
    },
    {
      name: "Hudson Baker",
      title: "Data Engineer",
      imageUrl: "https://images.unsplash.com/photo-1551836022-deb4988dcac7",
    },
    {
      name: "Penelope Collins",
      title: "Economist",
      imageUrl: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218",
    },
    {
      name: "Julian Cox",
      title: "Solutions Architect",
      imageUrl: "https://images.unsplash.com/photo-1524255684952-d7185b509571",
    },
    {
      name: "Victoria Stewart",
      title: "Investment Banker",
      imageUrl: "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1",
    },
    {
      name: "Levi Ross",
      title: "AI Consultant",
      imageUrl: "https://images.unsplash.com/photo-1522252234503-e356532cafd5",
    },
    {
      name: "Stella Sanchez",
      title: "Healthcare Analyst",
      imageUrl: "https://images.unsplash.com/photo-1536763225213-b5592b525630",
    },
  ];
  const data = [
    {
      name: "Aashrya Shrivastava",
      title: "Creator Arc",
      imageUrl: "/team/arc/aashrya.jpg",
    },
    {
      name: "Prakhar Sharma",
      title: "Builder Arc",
      imageUrl: "/team/arc/prakhar.jpg",
    },
    {
      name: "Abhineet Singh Baghel",
      title: "Builder Arc",
      imageUrl: "/team/arc/abhineet.jpg",
    },
    {
      name: "Singupalli Kartik",
      title: "Builder Arc",
      imageUrl: "/team/arc/kartik.jpg",
    },
    {
      name: "Taniya Shreekumar",
      title: "Designer Arc",
      imageUrl: "/team/arc/taniya.jpg",
    },
    {
      name: "Chandan Kumar",
      title: "Builder Arc",
      imageUrl: "/team/arc/cadalt.jpg",
    },
    {
      name: "Ashutosh Tiwari",
      title: "Creator Arc",
      imageUrl: "/team/arc/ashutosh.jpg",
    },
    {
      name: "Nakul Chouksey",
      title: "Builder Arc",
      imageUrl: "/team/arc/nakul.jpg",
    },
    {
      name: "Yatharth Tripathi",
      title: "Builder Arc",
      imageUrl: "/team/arc/yatharth.jpg",
    },
    {
      name: "Abhishekh Raina",
      title: "Builder Arc",
      imageUrl: "/team/arc/abhishekh.jpg",
    },
    {
      name: "Isha Sahu",
      title: "Builder Arc",
      imageUrl: "/team/arc/isha.jpg",
    },
    {
      name: "Shivi Shukla",
      title: "Designer Arc",
      imageUrl: "/team/arc/shivi.jpg",
    },
    {
      name: "Sudhanshu Tiwari",
      title: "Builder Arc",
      imageUrl: "/team/arc/sudhanshu.jpg",
    },
    {
      name: "Sumit S Raghuwanshi",
      title: "Builder Arc",
      imageUrl: "/team/arc/sumit.jpg",
    },
  ];

  return (
    <div>
      <PartnerCarousel />
      <div className="bg-black">
        <h2 className="text-white text-center py-16 font-semibold text-4xl md:text-4xl lg:text-[4rem] font-space-grotesk mb-2">
          Our Contributors
        </h2>
        <div className="md:px-[8rem] px-[2.5rem] grid grid-cols-4 gap-8 ">
          {data &&
            data.length &&
            data.map((data, i) => <ProfileCard key={i} {...data} />)}
        </div>
      </div>
    </div>
  );
}

export default page;
