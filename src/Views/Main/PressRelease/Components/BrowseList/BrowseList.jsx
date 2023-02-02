//Libs
import { Container, Button } from '@hybris-software/ui-kit'

//Assets
import { BsChevronRight } from 'react-icons/bs'

//Style
import Style from './BrowseList.module.css'

const BrowseList = ({ postList = [], page = 0, postsPerPage = 6, isLoading = true, loadingMessage = 'Loading ...' }) => {

    const renderPosts = () => {
        if (postList.length <= 6)
            return postList

        let startIndex = page * postsPerPage
        let endIndex = ((page + 1) * postsPerPage) - 1
        let postsToRender = []
        for (let i = startIndex; i < (endIndex + 1); i++) {
            postsToRender.push(postList[i])
        }

        return postsToRender
    }

    return (
        <Container className={Style.componentWrapper}>
            {isLoading && <div className={Style.loader}>{loadingMessage}</div>}
            {
                renderPosts().map((data) => {
                    return <Post {...data} key={data.id} />
                })
            }
        </Container>
    )
}

const Post = ({ frontImage, topic, timetoread, title, shortCaption, id }) => {
    const goToPost = () => {

    }

    return (
        <div className={Style.postWrapper}>
            <div className={Style.postImage} style={{ backgroundImage: `url(${frontImage})` }} />

            <div className={Style.postContent}>
                <div className={Style.about}><span>{topic}</span>{timetoread}</div>
                <h3>{title + id}</h3>
                <p>{shortCaption}</p>
                <Button
                    buttonClassName={Style.postButton}
                    onClick={goToPost}
                >
                    Read More <BsChevronRight size={'.8em'} />
                </Button>
            </div>
        </div>
    )
}

export default BrowseList