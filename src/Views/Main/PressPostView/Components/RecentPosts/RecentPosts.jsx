
//Libs
import { Container } from '@hybris-software/ui-kit'

//Style
import Style from './RecentPosts.module.css'

const RecentPosts = () => {
    return (
        <Container className={Style.componentWrapper}>
            <h2>RECENT BLOGS</h2>
            <div className={Style.blogsWrapper}>
                <Blog />
                <Blog />
            </div>
        </Container>
    )
}

const Blog = () => {
    return (
        <div className={Style.blog}>
            <img src='https://via.placeholder.com/800x450.webp' alt='' />
            <p className={Style.date}>13/10/2022</p>
            <p className={Style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
    )
}

export default RecentPosts