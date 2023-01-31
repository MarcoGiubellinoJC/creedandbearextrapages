//Libs
import { Container } from "@hybris-software/ui-kit"

//Components
import HeroSection from "./Components/HeroSection/HeroSection.jsx"
import LocationBanner from "./Components/LocationBanner/LocationBanner.jsx"
import TeamList from "./Components/TeamList/TeamList.jsx"
import NewsletterBanner from "./Components/NewsletterBanner/NewsletterBanner.jsx"

//Style
import Style from "./OurTeam.module.css"

const OurTeam = () => {
    return (
        <div className={Style.pageWrapper}>
            <HeroSection />
            <Container>
                <p className={Style.caption}>In today’s complex and global marketplace, all sell side entities, from the largest investment banks to the small and independent brokers, are facing fierce competition.</p>
            </Container>
            <LocationBanner />
            <TeamList />
            <NewsletterBanner />
        </div>
    )
}

export default OurTeam