import { useLoaderData } from "react-router-dom";
import './Post.css'

export default function Post() {
  const post = useLoaderData()
  
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.content}}></div>
    </div>
  )
}