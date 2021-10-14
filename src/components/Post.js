import React from 'react'
/* import marked from 'marked' */
import { Link } from "react-router-dom";

const Post = ({article}) => {
   /*  console.log (article) */
    const {name, image, kurz, slug} = article.fields
    // const description = marked(discription)
    return (
       
    <Link to={`/Recipe/${slug}`}>
      <div id={slug} className={`post`}>
        <h2 className='title'>{name}</h2>
        
       
   

<p>{image && <img className= 'image' src={image.fields.file.url} alt={name} title={name} />}</p>
<p>{kurz}</p>


{/* <div dangerouslySetInnerHTML={{ __html: description.html }}></div> */}

</div>
</Link>
    )
}

export default Post

