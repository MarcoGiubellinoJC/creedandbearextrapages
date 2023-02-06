import React, { useState } from 'react'

//Components
import GetInTouchForm from './Components/GetInTouchForm/GetInTouchForm.jsx'
import HeroSection from './Components/HeroSection/HeroSection.jsx'
import BrowseList from './Components/BrowseList/BrowseList.jsx'
import NewsletterBanner from './Components/NewsletterBanner/NewsletterBanner.jsx'
import { PartnersSlider } from '../../../Components/Advanced/PartnersSlider/PartnersSlider.jsx'

//Hooks
import usePagination from '../../../Hooks/usePagination.jsx'
import useWindowSize from '../../../Hooks/useWindowSize.js'

//Assets
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

//Data
import { postList, highlightPostData, partners } from './data.js'

//Style
import Style from './PressReleaseView.module.css'

//Consts
const POSTS_PER_PAGE = 6

const PressRelease = () => {
    const { width } = useWindowSize()
    const { currentPage, renderButtons, changePage } = usePagination(postList, {
        postsPerPage: POSTS_PER_PAGE,
        buttonClassname: Style.paginationButton,
        activeButtonClassname: Style.paginationButtonActive,
        paginationButtonsMaxNumber: width < 450 ? 3 : 5
    })

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