import React, { useEffect, useState } from "react";
import { IDataValue } from "../CreateArticle";
import { ArticleMap } from "./articleMap/ArticleMap";
import cl from "./Instruments.module.css";

interface IInstrumentsProps {
    isItalic: boolean,
    setIsItalic: (value: boolean) => void,
    isBold: boolean,
    setIsBold: (value: boolean) => void,
    fontSize: string,
    setFontSize: (value: string) => void,
    choiceContinue: string,
    setChoiceContinue: (value: string) => void,
    allArticle: IDataValue[] | undefined,
    isLink: boolean,
    setIsLink: (value: boolean) => void,
    link: string,
    setLink: (value: string) => void,
}

const Instruments: React.FC<IInstrumentsProps> = ({
    isItalic, setIsItalic,
    isBold, setIsBold,
    fontSize, setFontSize,
    choiceContinue, setChoiceContinue,
    allArticle,
    isLink, 
    setIsLink,
    link,
    setLink
}) => {
    const choiceFontSize = (value: string) => {
        setFontSize(value);

        if (value === "header") {
            setIsBold(false);
            setIsItalic(false);
            setChoiceContinue("newParagraph")
        }
    }

    const checkFontSize = () => { // Для смены fontSize, если он равен Заголовок
        if (!isItalic || !isBold || choiceContinue === "nextString" || choiceContinue === "without") {
            setFontSize("paragraph")
        }
    }

    return (
        <div className={cl.insruments}>
            <div className={cl.viewText}>

                <div
                    className={cl.button}
                    style={isItalic ? { background: "teal", color: "white" } : { background: "white" }}
                    onClick={() => {
                        setIsItalic(!isItalic);
                        checkFontSize();
                    }}
                >
                    <i>Курсив</i>
                </div>

                <div
                    className={cl.button}
                    style={isBold ? { background: "teal", color: "white" } : { background: "white" }}
                    onClick={() => {
                        setIsBold(!isBold);
                        checkFontSize();
                    }}
                >
                    <b>Жирный</b>
                </div>

            </div>

            <div className={cl.choiceType}>
                <div className={cl.oneChoice}>
                    <input
                        type="radio"
                        className={cl.radioButton}
                        checked={fontSize === "header" ? true : false}
                        onChange={() => { choiceFontSize("header") }}
                    />

                    <p className={cl.textInChoice}>Заголовок</p>
                </div>

                <div className={cl.oneChoice}>
                    <input
                        type="radio"
                        className={cl.radioButton}
                        checked={fontSize === "paragraph" ? true : false}
                        onChange={() => { choiceFontSize("paragraph") }}
                    />

                    <p className={cl.textInChoice}>Параграф</p>
                </div>
            </div>

            <div className={cl.choiceContinue}>
                <div className={cl.oneChoice}>
                    <input
                        type="radio"
                        className={cl.radioButton}
                        checked={choiceContinue === "without" ? true : false}
                        onChange={() => {
                            setChoiceContinue("without");
                            checkFontSize();
                        }}
                    />

                    <p className={cl.textInChoice}>Без перевода</p>
                </div>

                <div className={cl.oneChoice}>
                    <input
                        type="radio"
                        className={cl.radioButton}
                        checked={choiceContinue === "nextString" ? true : false}
                        onChange={() => {
                            setChoiceContinue("nextString");
                            checkFontSize();
                        }}
                    />

                    <p className={cl.textInChoice}>Следующая строка</p>
                </div>

                <div className={cl.oneChoice}>
                    <input
                        type="radio"
                        className={cl.radioButton}
                        checked={choiceContinue === "newParagraph" ? true : false}
                        onChange={() => {
                            setChoiceContinue("newParagraph")
                            checkFontSize();
                        }}
                    />

                    <p className={cl.textInChoice}>Новый абзац</p>
                </div>
            </div>

            <div className={cl.choiceLink}>
                <div
                    className={cl.buttonLink}
                    style={isLink ? { background: "teal", color: "white" } : { background: "white" }}
                    onClick={() => {
                        setIsLink(!isLink);
                    }}
                >
                    Ссылка
                </div>

                <div>
                    {
                        isLink && <input value={link} onChange={e => setLink(e.target.value)} className={cl.linkInput} placeholder="Ссылка" />
                    }
                </div>
            </div>

            <div className={cl.articleMap}>
                <ArticleMap
                    allArticle={allArticle}
                />
            </div>
        </div >
    )
}

export { Instruments }