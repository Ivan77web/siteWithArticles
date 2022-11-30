import React from "react";
import { Route, Routes } from "react-router";
import { CreateArticle } from "./createArticle/CreateArticle";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<CreateArticle/>}/>

            <Route path="/admin" element={<CreateArticle/>}/>
        </Routes>
    )
}

export {AppRouter}