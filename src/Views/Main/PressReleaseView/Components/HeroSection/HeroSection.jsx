//Libs
import { Button, Container } from '@hybris-software/ui-kit'

//Assets
import { BsChevronRight } from 'react-icons/bs'
import BG from '../../../../../Assets/images/pressHeroBg1.png'
//Style
import Style from './HeroSection.module.css'

const HeroSection = ({ highlightData = {
    title: "",
    shortCaption: "",
    frontImage: "",
    topic: "",
    timetoread: Date.now()
} }) => {


    return (
        <Container className={Style.componentWrapper} style={{ backgroundImage: `url(${BG})` }}>
            <h1>PRESS RELEASE</h1>
            <p>Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict altera legimu. Me vita de lege ndos expet end ista aliu mi ando, haeo tibi que com titure viset cut.Proin tempus elit a laoreet </p>

            <div className={Style.highlightPost}>
                <div className={Style.postImage} style={{ backgroundImage: `url(${highlightData.frontImage})` }} />

                <div className={Style.postContent}>
                    <div className={Style.about}><span>{highlightData.topic}</span>{highlightData.timetoread}</div>
                    <h3>{highlightData.title}</h3>
                    <p>{highlightData.shortCaption}</p>
                    <Button
                        buttonClassName={Style.postButton}
                    >
                        Read More <BsChevronRight size={'.8em'} />
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default HeroSection