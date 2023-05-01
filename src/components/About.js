import React from "react";

//child of App
export default function About ({
    image = "https://via.placeholder.com/215", 
    about
    }) {
  
    return (
        <aside className='abouts'>
            <img src={image} alt= "blog logo"/>
            <p>{about}</p>
        </aside>
    );
}