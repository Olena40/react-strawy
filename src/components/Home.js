import React from "react";
import Posts from "./Posts";

const Home = ({ articles}) => {
/*   console.log(articles); */
    return (
          <div className="App">
          <div className='ull'>
       <ul className='navi'>
          {articles.map((article, index) => (
            <li className='lii' key={index}>
              <a href={`#${article.fields.slug}`}>{article.fields.name}</a>
            </li>
          ))}
        </ul>
        </div> 
        <div className="container">
        <header>
            <div className='wrapper'>
              <h1>Recipes</h1>   
            </div>
          </header>

          <main id='wrapper1'>
                <div className='wrapper1'>
                  <Posts posts = {articles} />
                </div> 
          </main>
    </div>
    </div>
    );
  };
  
  export default Home;
 