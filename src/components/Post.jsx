import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div className="border-2 border-yellow-500 rounded-md p-3 flex flex-col">
      <div className="flex-grow">
        <h3 className="font-medium text-purple-600">post id :{id} </h3>
        <h2 className="text-2xl font-sembold">Title : {title} </h2>
      </div>
      <div className="mt-4">
        <Link to={`/posts/${id}`}  className="text-purple-600 font-semibold">Show Details</Link>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
