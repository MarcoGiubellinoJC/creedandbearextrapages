import React, { useState } from 'react'

//Components
import GetInTouchForm from './Components/GetInTouchForm/GetInTouchForm.jsx'
import HeroSection from './Components/HeroSection/HeroSection.jsx'
import BrowseList from './Components/BrowseList/BrowseList.jsx'
import NewsletterBanner from './Components/NewsletterBanner/NewsletterBanner.jsx'
import { PartnersSlider } from '../../../Components/Advanced/PartnersSlider/PartnersSlider.jsx'

//Assets
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

//Data
import { postList, highlightPostData, partners } from './data.js'

//Style
import Style from './PressReleaseView.module.css'

//Consts
const POSTS_PER_PAGE = 6

const PressRelease = () => {
    const [currentPage, setCurrentPage] = useState(0)

    const changePage = (changeTo) => {
        if (changeTo < 0)
            return

        let maxPage = ((postList.length - (postList.length % POSTS_PER_PAGE)) / POSTS_PER_PAGE) - 1 + (postList.length % POSTS_PER_PAGE > 0 ? 1 : 0)

        if (changeTo <= maxPage)
            setCurrentPage(changeTo)

        return
    }

    const renderButtons = () => {
        let maxPage = ((postList.length - (postList.length % POSTS_PER_PAGE)) / POSTS_PER_PAGE) - 1 + (postList.length % POSTS_PER_PAGE > 0 ? 1 : 0)
        let buttons = []

        if (maxPage < 5)
            for (let i = 0; i <= maxPage; i++) {
                buttons.push(<div className={Style.paginationButton} key={i} onClick={() => { changePage(i) }} current={(i === currentPage).toString()}>{i + 1}</div>)
            }
        else if (currentPage < 3) {
            for (let i = 0; i < 5; i++) {
                buttons.push(<div className={Style.paginationButton} key={i} onClick={() => { changePage(i) }} current={(i === currentPage).toString()}>{i + 1}</div>)
            }
        }
        else if ((maxPage - currentPage) > 2)
            for (let i = (currentPage - 2); i <= (currentPage + 2); i++) {
                buttons.push(<div className={Style.paginationButton} key={i} onClick={() => { changePage(i) }} current={(i === currentPage).toString()}>{i + 1}</div>)
            }
        else
            for (let i = (maxPage - 4); i <= maxPage; i++) {
                buttons.push(<div className={Style.paginationButton} key={i} onClick={() => { changePage(i) }} current={(i === currentPage).toString()}>{i + 1}</div>)
            }

        return buttons
    }

    return (
        <div className={Style.pageWrapper}>
            <HeroSection highlightData={highlightPostData} />
            <BrowseList postList={postList} page={currentPage} postsPerPage={POSTS_PER_PAGE} isLoading={false} loadingMessage={'Loading ...'} />

            <div className={Style.pagination}>
                <div className={Style.paginationButton} onClick={() => { changePage(currentPage - 1) }}><BsChevronLeft size={'1rem'} /></div>
                {
                    renderButtons()
                }
                <div className={Style.paginationButton} onClick={() => { changePage(currentPage + 1) }}><BsChevronRight size={'1rem'} /></div>
            </div>
            
            <NewsletterBanner />
            <PartnersSlider data={partners} />
            {/* <GetInTouchForm /> */}
        </div>
    )
}

export default PressRelease