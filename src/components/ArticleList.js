import React from "react";
import Article from "./Article";

//child of App

export default function ArticleList ({ posts }) {
    const ArticleOfElem = posts.map((p)  => {
        return <Article 
        key={p.id} 
        title={p.title} 
        date={p.date} 
        preview={p.preview} 
        />
    })
    
    //unsure if function is right 
    return (<main>{ArticleOfElem}</main>);
}

 