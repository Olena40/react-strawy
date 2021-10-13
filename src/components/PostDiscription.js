import React from "react";
// import marked from "marked";
import { Link } from "react-router-dom";

const PostDiscription = ({ article }) => {
  console.log(article);
  const { name, image,kurz, discription, slug } = article.fields;
  // const postDescription = marked(description);
  return (
    <Link to={`/Recipe/${slug}`}>
      <div id={slug} className={`post`}>
        <h2 className="title">{name}</h2>
        {image && (
          <img
            className="featuredImage"
            src={image.fields.file.url}
            alt={name}
            title={name}
          />
        )}
        <p>{kurz}</p>
        {discription}
      </div>
    </Link>
  );
};

export default PostDiscription;