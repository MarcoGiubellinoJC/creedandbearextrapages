import { useState } from "react"

const defaultOptions = {
    postsPerPage: 6,
    buttonClassname: '',
    activeButtonClassname: '',
    paginationButtonsMaxNumber: 5
}

const usePagination = (postList = [], options = {
    postsPerPage,
    buttonClassname,
    activeButtonClassname,
    paginationButtonsMaxNumber
}) => {
    const [currentPage, setCurrentPage] = useState(0)
    const paginationOptions = { ...defaultOptions, ...options }

    const changePage = (changeTo) => {
        if (changeTo < 0)
            return

        let maxPage = ((postList.length - (postList.length % paginationOptions.postsPerPage)) / paginationOptions.postsPerPage) - 1 + (postList.length % paginationOptions.postsPerPage > 0 ? 1 : 0)

        if (changeTo <= maxPage)
            setCurrentPage(changeTo)

        return
    }

    const renderButtons = () => {
        let maxPage = ((postList.length - (postList.length % paginationOptions.postsPerPage)) / paginationOptions.postsPerPage) - 1 + (postList.length % paginationOptions.postsPerPage > 0 ? 1 : 0)
        let buttons = []

        //Less pages that the max i can show
        if (maxPage < paginationOptions.paginationButtonsMaxNumber)
            for (let i = 0; i <= maxPage; i++) {
                buttons.push(<div className={i === currentPage ? paginationOptions.activeButtonClassname : paginationOptions.buttonClassname} key={i} onClick={() => { changePage(i) }}>{i + 1}</div>)
            }
        //Current selected page is before or at half than current showing buttons
        else if (currentPage < (Math.ceil(paginationOptions.paginationButtonsMaxNumber / 2))) {
            for (let i = 0; i < paginationOptions.paginationButtonsMaxNumber; i++) {
                buttons.push(<div className={i === currentPage ? paginationOptions.activeButtonClassname : paginationOptions.buttonClassname} key={i} onClick={() => { changePage(i) }}>{i + 1}</div>)
            }
        }
        else if ((maxPage - currentPage) > (paginationOptions.paginationButtonsMaxNumber - Math.ceil(paginationOptions.paginationButtonsMaxNumber / 2)))
            for (let i = (currentPage - (paginationOptions.paginationButtonsMaxNumber - Math.ceil(paginationOptions.paginationButtonsMaxNumber / 2) - ((paginationOptions.paginationButtonsMaxNumber % 2) === 1 ? 0 : 1)));
                i <= (currentPage + (Math.floor(paginationOptions.paginationButtonsMaxNumber / 2)));
                i++) {
                buttons.push(<div className={i === currentPage ? paginationOptions.activeButtonClassname : paginationOptions.buttonClassname} key={i} onClick={() => { changePage(i) }}>{i + 1}</div>)
            }
        else
            for (let i = (maxPage - (paginationOptions.paginationButtonsMaxNumber - 1)); i <= maxPage; i++) {
                buttons.push(<div className={i === currentPage ? paginationOptions.activeButtonClassname : paginationOptions.buttonClassname} key={i} onClick={() => { changePage(i) }}>{i + 1}</div>)
            }

        return buttons
    }

    const getPostsDataToRender = () => {
        if (postList.length <= paginationOptions.postsPerPage)
            return postList

        let startIndex = currentPage * paginationOptions.postsPerPage
        let endIndex = ((currentPage + 1) * paginationOptions.postsPerPage) - 1
        let postsToRender = []

        if (startIndex > postList.length) {
            startIndex = postList.length - (postList.length % paginationOptions.postsPerPage)
            endIndex = postList.length - 1
        }

        for (let i = startIndex; i < (endIndex + 1); i++) {
            if (postList[i] !== undefined)
                postsToRender.push(postList[i])
        }
        return postsToRender
    }

    return { currentPage, renderButtons, changePage, getPostsDataToRender }
}

export default usePagination