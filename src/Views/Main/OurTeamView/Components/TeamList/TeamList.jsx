//Libs
import { Container } from "@hybris-software/ui-kit"

//Assets
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

//Data
import { teamMembers } from './data.js'

//Style
import Style from './TeamList.module.css'

//Constants
const socialsIcons = {
    facebook: <FaFacebookF size={20} />,
    twitter: <FaTwitter size={20} />,
    instagram: <FaInstagram size={20} />,
    linkedin: <FaLinkedinIn size={20} />,
}

const TeamList = () => {
    return (
        <Container className={Style.componentWrapper}>
            {
                teamMembers.map((data, index) => {
                    return <TeamMember {...data} key={index} />
                })
            }
        </Container>
    )
}

const TeamMember = ({ fullname, caption, image, socials }) => {
    return (
        <div className={Style.teamMember}>
            <div className={Style.memberImage}>
                <img src={image} alt={fullname} draggable={false} />
            </div>
            <div className={Style.memberContent}>
                <h6>{fullname}</h6>
                <p>{caption}</p>
                <div className={Style.socials}>
                    {
                        Object.keys(socials).map((key, index) => {
                            if (socialsIcons[key] !== undefined)
                                return (
                                    <a href={socials[key]} target={"_blank"} rel="noreferrer" key={index}>{socialsIcons[key]}</a>
                                )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamList