import React from "react";
import { IDataValue } from "../CreateArticle";
import cl from "./InputBlock.module.css"

interface IInputBlockProps{
    valueInput: string,
    setValueInput: (value: string) => void,
    dataValue: IDataValue | undefined,
    allArticle: IDataValue[] | undefined,
    setAllArticle: (value: IDataValue[]) => void,
    setIsItalic: (value: boolean) => void,
    setIsBold: (value: boolean) => void,
    setFontSize: (value: string) => void,
    setIsLink: (value: boolean) => void,
    setLink: (value: string) => void,
}

const InputBlock: React.FC<IInputBlockProps> = ({
    valueInput, setValueInput,
    dataValue, 
    allArticle, setAllArticle,
    setIsItalic,
    setIsBold,
    setFontSize,
    setIsLink,
    setLink,
}) => {

    const addModule = () => {
        if (dataValue) {
            if (allArticle) {
                setAllArticle([...allArticle, dataValue])
            } else {
                setAllArticle([dataValue])
            }

            setValueInput("");
            setIsItalic(false);
            setIsBold(false);
            setFontSize("paragraph");
            setIsLink(false);
            setLink("")
        }
    }

    return (
        <div className={cl.inputText}>
            <input
                className={cl.input}
                placeholder="Введите текст"
                value={valueInput}
                onChange={e => setValueInput(e.target.value)}
            />

            <button
                className={cl.addModule}
                onClick={addModule}
            >
                +
            </button>
        </div>
    )
}

export { InputBlock }