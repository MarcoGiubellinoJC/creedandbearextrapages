//Libs
import { Container } from "@hybris-software/ui-kit"

//Assets
// const HeroImage = 'https://via.placeholder.com/750x550.webp'
import HeroImage from '../../../../../Assets/images/ourTeamHeroImage.png'

//Style
import Style from './HeroSection.module.css'

const HeroSection = () => {
    return (
        <Container className={Style.componentWrapper}>
            <div className={Style.pattern} />
            <div className={Style.content}>
                <h1 className={Style.title}>OUR SKILLED TEAM</h1>
                <img className={Style.heroImage} src={HeroImage} alt="heroimage" draggable={false} />
            </div>
        </Container>
    )
}

export default HeroSection