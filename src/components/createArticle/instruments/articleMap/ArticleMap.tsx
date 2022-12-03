import React, { useEffect } from "react";
import { IDataValue } from "../../CreateArticle";
import cl from "./ArticleMap.module.css"
import { ElemMap } from "./elemMap/ElemMap";

interface IArticleMapProps{
    allArticle: IDataValue[] | undefined, 
}

const ArticleMap: React.FC<IArticleMapProps> = ({allArticle}) => {
    return(
        <div className={cl.map}>
            {
                allArticle 
                ?
                allArticle.map(elem => 
                    <ElemMap key={elem.id} elem={elem}/>
                )
                :
                <p className={cl.emptyArticle}>Пустая страница</p>
            }
        </div>
    )
}

export {ArticleMap}