import React from "react";
import { Route, Routes } from "react-router";
import { CreateArticle } from "./createArticle/CreateArticle";
import { MainPage } from "./mainPage/MainPage";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/mainPage" element={<MainPage/>}/>
            <Route path="/admin" element={<CreateArticle/>}/>
        </Routes>
    )
}

export {AppRouter}