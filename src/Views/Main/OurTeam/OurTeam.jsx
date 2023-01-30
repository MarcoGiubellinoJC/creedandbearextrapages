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
            <LocationBanner />
            <TeamList />
            <NewsletterBanner />
        </div>
    )
}

export default OurTeam