import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


// import React from "react";
// import Article from "./Article.js";

// function ArticleList(props) {
//     const posts = props.posts;
//     const articleElements = posts.map((post) => (
//       <Article
//         key={post.id}
//         title={post.title}
//         date={post.date}
//         preview={post.preview}
//       />
//     ));
//     return <main>{articleElements}</main>;
//   }

// export default ArticleList;

// import React from 'react';

// function Article({
//     title,
//     date="January 1, 1970",
//     preview
// }) {
//     return (
//         <article>
//             <h3>{title}</h3>
//             <small>{date}</small>
//             <p>{preview}</p>
//         </article>
//     )
// }

// export default Article



// import React from "react";
// import blogData from "../data/blog";
// import About from "./About.js";
// import Header from "./Header.js";
// import ArticleList from "./ArticleList.js";

// console.log(blogData);

// function App() {
//   return (
//     <div className="App">
//       <Header name={blogData.name}/>
//       <About image={blogData.image} about={blogData.about}/>
//       <ArticleList posts={blogData.posts} />
//     </div>
//   );
// }

// export default App;


//if you have to use props

// import React from 'react';

// function Header(props) {
//     return (
//     <header>
//         <h1>{props.name}</h1>
//     </header>
//     )
// }

// export default Header
