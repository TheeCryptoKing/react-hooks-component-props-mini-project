import React from "react";


//child of ArticleList
export default function Article ({
    title,
    date = "January 1, 1970",
    preview
    }) {
     return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
     );
}