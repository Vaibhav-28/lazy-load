import React, {useEffect,useState} from 'react'
import './Card.css'

function Card(props) {
  const [post,setPost]  = useState([])
  const fetchData = () =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${props.post+1}`)
    .then((response) => response.json())
    .then((data) => setPost(data));
  }
  useEffect(() => {
    fetchData();
  })
  return (
    <div>
      <div className="card">
        <div className="cardPic">
          <img src={`https://avatars.dicebear.com/api/human/${post.userId}.svg`} alt="userPic" />
        </div>
        <div className="title">
          {post.title}
        </div>
        <div className="desc">
          {post?.body?.length > 70 ? post?.body.substring(0, 67) + "..." : post?.body}
        </div>
      </div>
    </div>
  )
}

export default Card