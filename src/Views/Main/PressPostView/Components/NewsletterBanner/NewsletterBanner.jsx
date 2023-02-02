//Libs
import { Button, Container } from '@hybris-software/ui-kit'

//Style
import Style from './NewsletterBanner.module.css'

const NewsletterBanner = () => {
    return (
        <Container className={Style.componentWrapper}>
            <div className={Style.banner}>
                <div className={Style.text}>
                    <h4>Get in contact</h4>
                    <p>Want to know more? Just reach out to us.</p>
                </div>
                <Button buttonClassName={Style.button}>SUBSCRIBE TO OUR NEWSLETTER</Button>
            </div>
        </Container>
    )
}

export default NewsletterBanner