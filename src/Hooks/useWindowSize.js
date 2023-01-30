import { useState, useEffect } from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    function handleResize() {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}

export default useWindowSize