import React, { useEffect, useState } from "react";
import cl from "./CreateArticle.module.css";
import { InputBlock } from "./inputBlock/InputBlock";
import { Instruments } from "./instruments/Instruments";
import { List } from "./list/List";

export interface IDataValue {
    id: number,
    value: string,
    isItalic: boolean,
    isBold: boolean,
    fontSize: string,
    choiceContinue: string,
    isLink: boolean,
    link: string,
}

const CreateArticle = () => {
    const [allArticle, setAllArticle] = useState<IDataValue[]>();
    const [dataValue, setDataValue] = useState<IDataValue>();
    const [valueInput, setValueInput] = useState("");
    const [isItalic, setIsItalic] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [isLink, setIsLink] = useState(false)
    const [fontSize, setFontSize] = useState("paragraph");
    const [choiceContinue, setChoiceContinue] = useState("without");
    const [link, setLink] = useState("")

    useEffect(() => {
        setDataValue({
            id: allArticle?.length || 0,
            value: valueInput,
            isItalic,
            isBold,
            fontSize,
            choiceContinue,
            isLink,
            link
        })
    }, [valueInput, isItalic, isBold, fontSize, choiceContinue])

    return (
        <div className={cl.createBlock}>
            <div className={cl.article}>
                <div className={cl.list}>
                    <List
                        allArticle={allArticle}
                        isItalic={isItalic}
                        isBold={isBold}
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
                        setIsItalic={setIsItalic}
                        setIsBold={setIsBold}
                        setFontSize={setFontSize}
                        setIsLink={setIsLink}
                        setLink={setLink}
                    />
                </div>
            </div>

            <div className={cl.instruments}>
                <Instruments
                    isItalic={isItalic}
                    setIsItalic={setIsItalic}
                    isBold={isBold}
                    setIsBold={setIsBold}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    choiceContinue={choiceContinue}
                    setChoiceContinue={setChoiceContinue}
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