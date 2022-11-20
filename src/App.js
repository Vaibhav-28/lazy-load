import './App.css';
import { useState,useEffect } from 'react';
import Card from './components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [posts,setPosts]  = useState(Array.from({length:5}))
  const [hasMore,setHasMore] = useState(true)

  useEffect(()=>{
    console.log(posts,"<===")
  },[posts])

  const fetchMore = () => {
    if(posts.length<=95){
      setPosts(posts.concat(Array.from({length:5})))
    }else{
      setHasMore(false)
    }
  }

  return (
    <>
      <div className="head">Posts</div>
        <InfiniteScroll dataLength={posts?.length} next={fetchMore} hasMore={hasMore} loader={<p>Loading...</p>}>
          <div className="container">
            {posts.length>0 && posts.map((post,i)=>{
              return(
                <div key={i} className="cards">
                  <Card post={i}/>
                </div>
              )
            })}
          </div>
        </InfiniteScroll>
    </>
  );
}

export default App;
