import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const post=useLoaderData()
  return (
    <div>
      <h3 className=" text-xl font-semibold">This is the posts section </h3>
      <h2 className=" text-3xl">Total Posts : {post.length}</h2>

      <div className="grid grid-cols-5 gap-4">
        {
            post.map(post=><Post key={post.id} post={post} ></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;
