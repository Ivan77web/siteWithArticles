import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import cl from "./CreateArticle.module.css";
import { InputBlock } from "./inputBlock/InputBlock";
import { Instruments } from "./instruments/Instruments";
import { List } from "./list/List";

export interface IDataValue {
    id: number,
    value: string,
    fontSize: string,
    isLink: boolean,
    link: string,
}

const CreateArticle = () => {
    const [allArticle, setAllArticle] = useState<IDataValue[]>();
    const [dataValue, setDataValue] = useState<IDataValue>();
    const [valueInput, setValueInput] = useState("");
    const [isLink, setIsLink] = useState(false)
    const [fontSize, setFontSize] = useState("paragraph");
    const [link, setLink] = useState("");
    const dispatch = useDispatch();

    const addArticle = () => {
        dispatch({type: "addArticle", payload: dataValue})
        
        console.log("Added");  
    }

    useEffect(() => {
        setDataValue({
            id: allArticle?.length || 0,
            value: valueInput,
            fontSize,
            isLink,
            link
        })
    }, [valueInput, fontSize])

    return (
        <div className={cl.createBlock}>
            <div className={cl.article}>
                <div className={cl.list}>
                    <List
                        allArticle={allArticle}
                        fontSize={fontSize}
                        valueInput={valueInput}
                    />
                </div>

                <div className={cl.inputText}>
                    <InputBlock
                        valueInput={valueInput}
                        setValueInput={setValueInput}
                        dataValue={dataValue}
                        allArticle={allArticle}
                        setAllArticle={setAllArticle}
                        setFontSize={setFontSize}
                        setIsLink={setIsLink}
                        setLink={setLink}
                        addArticle={addArticle}
                    />
                </div>
            </div>

            <div className={cl.instruments}>
                <Instruments
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    allArticle={allArticle}
                    isLink={isLink}
                    setIsLink={setIsLink}
                    link={link}
                    setLink={setLink}
                />
            </div>
        </div>
    )
}

export { CreateArticle }