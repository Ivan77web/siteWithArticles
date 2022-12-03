import React, { useState } from "react";
import { IDataValue } from "../../../CreateArticle";
import cl from "./ElemMap.module.css"

interface IElemMapProps {
    elem: IDataValue,
}

const ElemMap: React.FC<IElemMapProps> = ({ elem }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {
                isOpen
                    ?

                    <div className={cl.elem + " " + cl.elemOpen}>
                        <div className={cl.title}>
                            <p className={cl.idTextOpen}>{elem.id + 1}. &nbsp;</p>
                            <p className={cl.valueOpen}>{elem.value}</p>
                        </div>

                        <div>
                            <p>{elem.fontSize === "paragraph" ? "Параграф" : "Заголовок"}</p>
                        </div>

                        <div className={cl.buttons}>
                            <div className={cl.buttonOpen} onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? "-" : "+"}
                            </div>

                            {
                                isOpen
                                    ?
                                    <div className={cl.buttonEdit}>
                                        Edit
                                    </div>
                                    :
                                    <div />
                            }
                        </div>
                    </div>

                    :

                    <div className={cl.elem + " " + cl.elemClose}>
                        <p>{elem.id + 1}. &nbsp;</p>
                        <p className={cl.value}>{elem.value}</p>

                        <div className={cl.buttonOpen} onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? "-" : "+"}
                        </div>
                    </div>
            }
        </div>
    )
}

export { ElemMap }