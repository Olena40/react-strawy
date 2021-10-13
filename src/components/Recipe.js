import React from "react";
import { useParams } from "react-router-dom";
import PostDiscription from "./PostDiscription";



const Recipe = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find((e) => e.fields.slug === slug);
  /* console.log(post); */
  
  
  return (
    <div className="flexbox">
      <div>{post && <PostDiscription article={post} />}</div>
      
    </div>
  );
};

export default Recipe;