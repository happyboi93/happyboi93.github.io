export const getStaticProps = async()=>{
    const res = await fetch('http://localhost:5000/api/item');
    const data = await res.json();
    console.log(data);
    return{
      props:{posts:data}
    }
  } 
  
  const Post = ({ posts }) => {
    // console.log(posts)
    return (
      <>
      {
         (posts && posts.map(post =>{
          return <div key={post.id}>
            <h3 key={post.id}>{post.item}</h3>
          </div>
        }))
      }
      </> 
    );
  }
  
  export default Post;
  
  // {
  //   posts.map(post =>{
  //     return <div key={post.id}>
  //       <h3 key={post.id}>{post.item}</h3>
  //     </div>
  //   })
  // }