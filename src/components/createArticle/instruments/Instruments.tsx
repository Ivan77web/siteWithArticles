import React, { useEffect, useState } from "react";
import { IDataValue } from "../CreateArticle";
import { ArticleMap } from "./articleMap/ArticleMap";
import cl from "./Instruments.module.css";

interface IInstrumentsProps {
    fontSize: string,
    setFontSize: (value: string) => void,
    allArticle: IDataValue[] | undefined,
    isLink: boolean,
    setIsLink: (value: boolean) => void,
    link: string,
    setLink: (value: string) => void,
}

const Instruments: React.FC<IInstrumentsProps> = ({
    fontSize, setFontSize,
    allArticle,
    isLink, setIsLink,
    link, setLink
}) => {
    return (
        <div className={cl.insruments}>
            <div className={cl.choiceType}>
                <div className={cl.oneChoice}>
                    <input
                        type="radio"
                        className={cl.radioButton}
                        checked={fontSize === "header" ? true : false}
                        onChange={() => setFontSize("header") }
                    />

                    <p className={cl.textInChoice}>Заголовок</p>
                </div>

                <div className={cl.oneChoice}>
                    <input
                        type="radio"
                        className={cl.radioButton}
                        checked={fontSize === "subtitle" ? true : false}
                        onChange={() => setFontSize("subtitle") }
                    />

                    <p className={cl.textInChoice}>Подзаголовок</p>
                </div>

                <div className={cl.oneChoice}>
                    <input
                        type="radio"
                        className={cl.radioButton}
                        checked={fontSize === "paragraph" ? true : false}
                        onChange={() => setFontSize("paragraph") }
                    />

                    <p className={cl.textInChoice}>Параграф</p>
                </div>
            </div>

            <div className={cl.choiceLink}>
                <div
                    className={cl.buttonLink}
                    style={isLink ? { background: "teal", color: "white" } : { background: "white" }}
                    onClick={() => setIsLink(!isLink)}
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
                <ArticleMap allArticle={allArticle}/>
            </div>
        </div >
    )
}

export { Instruments }