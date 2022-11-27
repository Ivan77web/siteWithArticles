import React from "react";
import { IDataValue } from "../CreateArticle";
import cl from "./List.module.css";

interface IListProps {
    allArticle: IDataValue[] | undefined,
    isItalic: boolean,
    isBold: boolean,
    fontSize: string,
    valueInput: string,
}

const List: React.FC<IListProps> = ({
    allArticle,
    isItalic,
    isBold,
    fontSize,
    valueInput,
}) => {
    return (
        <div className={cl.list}>
            {
                allArticle
                    ?
                    allArticle.map(module =>
                        <div
                            key={module.id}
                            className={
                                cl.oneModule + " " +
                                (module.isItalic ? cl.italic : "") + " " +
                                (module.isBold ? cl.bold : "") + " " +
                                (module.fontSize === "header" ? cl.header : cl.paragraph) + " " +
                                (
                                    module.choiceContinue === "without"
                                        ?
                                        cl.withoutLineBreak
                                        :
                                        ""
                                )
                            }
                        >
                            {
                                module.isLink
                                    ?
                                    module.choiceContinue === "nextString"
                                        ?
                                        <a href={module.link} target="_blank">&#x0020;{module.value}&nbsp;</a>
                                        :
                                        <a href={module.link} target="_blank">{module.value}&nbsp;</a>
                                    :
                                    module.choiceContinue === "nextString"
                                        ?
                                        <p>&#x0020;{module.value}&nbsp;</p>
                                        :
                                        <p>{module.value}&nbsp;</p>
                            }
                        </div>
                    )
                    :
                    ""
            }

            <p
                className={
                    cl.notSavePart + " " +
                    (isItalic ? cl.italic : "") + " " +
                    (isBold ? cl.bold : "") + " " +
                    (fontSize === "header" ? cl.header : cl.paragraph)
                }
            >
                {valueInput}
            </p>
        </div>
    )
}

export { List }