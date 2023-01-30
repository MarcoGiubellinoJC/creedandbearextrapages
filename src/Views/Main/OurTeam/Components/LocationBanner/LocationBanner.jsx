import React, { useState } from 'react'

//Assets
import SwitzerlandImage from '../../../../../Assets/images/switzerlandBannerImage2.png'
import DubaiImage from '../../../../../Assets/images/dubaiBannerImage2.png'

//Style
import Style from './Locationbanner.module.css'

const LocationBanner = () => {
    const [selected, setSelected] = useState(0)
    return (
        <div className={Style.componentWrapper}>
            <div className={Style.banner}>
                <div className={Style.left} style={{ backgroundImage: `url(${SwitzerlandImage})` }} isselected={(selected === 0).toString()} onClick={() => { setSelected(0) }}><p>SWITZERLAND</p></div>
                <div className={Style.right} style={{ backgroundImage: `url(${DubaiImage})` }} isselected={(selected === 1).toString()} onClick={() => { setSelected(1) }}><p>DUBAI</p></div>
            </div>
        </div>
    )
}

export default LocationBanner