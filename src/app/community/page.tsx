import CommunityImageGallery from "./communityimagegallary";
import CommunityLinks from "./communitylinks";
import CommunityPageHero from "./communitypagehero";

export default function Community(){
    return  (
        <>
            <CommunityPageHero/>
            <CommunityLinks/>
            <CommunityImageGallery/>
        </>
    )
}