import React from "react";
import { IDataValue } from "../CreateArticle";
import cl from "./List.module.css";

interface IListProps {
    allArticle: IDataValue[] | undefined,
    fontSize: string,
    valueInput: string,
}

const List: React.FC<IListProps> = ({
    allArticle,
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
                                (module.fontSize === "header"
                                    ?
                                    cl.header
                                    :
                                    module.fontSize === "subtitle"
                                        ?
                                        cl.subtitle
                                        :
                                        cl.paragraph
                                ) + " " 
                            }
                        >
                            {
                                module.isLink
                                    ?
                                    <a href={module.link} target="_blank">{module.value}&nbsp;</a>
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
                    (fontSize === "header"
                        ?
                        cl.header
                        :
                        fontSize === "subtitle"
                            ?
                            cl.subtitle
                            :
                            cl.paragraph
                    )
                }
            >
                {valueInput}
            </p>
        </div>
    )
}

export { List }