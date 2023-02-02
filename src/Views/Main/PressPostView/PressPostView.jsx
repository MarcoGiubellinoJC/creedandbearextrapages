import React, { useState, useEffect } from 'react'

//Libs
import { Container } from '@hybris-software/ui-kit'

//Components
import HeroSection from './Components/HeroSection/HeroSection.jsx'
import RecentPosts from './Components/RecentPosts/RecentPosts.jsx'
import NewsletterBanner from './Components/NewsletterBanner/NewsletterBanner.jsx'

//Data
import { postList } from './data.js'

//Style
import Style from './PressPostView.module.css'

const PressPostView = () => {
    const [postData, setPostData] = useState(undefined)
    useEffect(() => {
        console.log('Page loaded')
        setTimeout(() => {
            setPostData(postList[0])
        }, 2000);
    }, [])

    return (
        <div className={Style.pageWrapper}>
            {(postData !== undefined) && <HeroSection {...postData} />}
            {/* LOADING SKELETON */}
            {(postData === undefined) &&
                <Container className={Style.skeleton}>
                    <div className={Style.textLine} style={{ width: 400 }}></div>
                    <div className={Style.textLine} style={{ width: 800, marginTop: 5 }}></div>
                    <div className={Style.textLine} style={{ width: 600, marginTop: 5 }}></div>
                    <div className={Style.imageBlock} style={{ maxWidth: 900, marginTop: 50 }}></div>
                    <div className={Style.textLine} style={{ width: '100%', marginTop: 50 }}></div>
                    <div className={Style.textLine} style={{ width: '90%', marginTop: 5 }}></div>
                    <div className={Style.textLine} style={{ width: '97%', marginTop: 5 }}></div>
                    <div className={Style.textLine} style={{ width: '87%', marginTop: 5 }}></div>
                    <div className={Style.textLine} style={{ width: '100%', marginTop: 5 }}></div>
                    <div className={Style.textLine} style={{ width: '93%', marginTop: 5 }}></div>
                    <div className={Style.textLine} style={{ width: '100%', marginTop: 5 }}></div>
                    <div className={Style.textLine} style={{ width: '65%', marginTop: 5 }}></div>
                </Container>
            }
            {
                /* Page dynamic content here*/
            }
            <RecentPosts />
            <NewsletterBanner />
        </div>
    )
}

export default PressPostView