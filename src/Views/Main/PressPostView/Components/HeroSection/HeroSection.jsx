//Libs
import { Container } from "@hybris-software/ui-kit"

//Assets
import BG from '../../../../../Assets/images/pressHeroBg1.png'

//Style
import Style from './HeroSection.module.css'

const HeroSection = ({ title = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit', posted = '13/10/2022', topic = 'Category', timetoread = '8 min', frontImage = '' }) => {
    return (
        <Container className={Style.componentWrapper} style={{ backgroundImage: `url(${BG})` }}>
            <div className={Style.content}>
                <h2>{title}</h2>
                <p>{posted} . {topic} . {timetoread} read</p>
            </div>
            <img src={frontImage} alt="highlight image" />
        </Container>
    )
}
export default HeroSection