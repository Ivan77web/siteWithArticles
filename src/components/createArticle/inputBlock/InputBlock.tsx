import React from "react";
import { IDataValue } from "../CreateArticle";
import cl from "./InputBlock.module.css"

interface IInputBlockProps{
    valueInput: string,
    setValueInput: (value: string) => void,
    dataValue: IDataValue | undefined,
    allArticle: IDataValue[] | undefined,
    setAllArticle: (value: IDataValue[]) => void,
    setFontSize: (value: string) => void,
    setIsLink: (value: boolean) => void,
    setLink: (value: string) => void,
    addArticle: () => void,
}

const InputBlock: React.FC<IInputBlockProps> = ({
    valueInput, setValueInput,
    dataValue, 
    allArticle, setAllArticle,
    setFontSize,
    setIsLink,
    setLink,
    addArticle,
}) => {
    const addModule = () => {
        if (dataValue && dataValue.value) {
            if (allArticle) {
                setAllArticle([...allArticle, dataValue])
            } else {
                setAllArticle([dataValue])
            }

            setValueInput("");
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

            <button onClick={addArticle} style={{position: "absolute", right: "-150px"}}>
                Добавить
            </button>
        </div>
    )
}

export { InputBlock }