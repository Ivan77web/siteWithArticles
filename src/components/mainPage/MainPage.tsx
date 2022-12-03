import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import cl from "./MainPage.module.css"

const MainPage = () => {
    const { allArticles } = useTypedSelector(state => state)

    useEffect( () => {
        console.log(allArticles);
    }, [allArticles])

    return(
        <div className={cl.mainPage}>
            MainPage
        </div>
    )
}

export {MainPage}