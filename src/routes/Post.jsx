import { useLoaderData } from "react-router-dom";
import './Post.css'

export default function Post() {
  const post = useLoaderData()

  return (
    <div className="post">
      <div dangerouslySetInnerHTML={{__html: post.content}}></div>
    </div>
  )
}