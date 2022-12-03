import { IDataValue } from "../../components/createArticle/CreateArticle"

interface IDefautState{
    articles: IDataValue[]
}

interface IActionArticles{
    type: string;
    payload: IDataValue[];
}


const defaultState = {
    articles: []
}

export const articlesReducer = (state: IDefautState = defaultState, action: IActionArticles) => {
    switch(action.type){
        case "addArticle":
            return [...state.articles, action.payload]
        default: 
            return state
    }
}