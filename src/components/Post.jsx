import PropTypes from 'prop-types'
const Post = ({post}) => {
    const{id,title}=post
    return (
        <div className='border-2 border-yellow-500 rounded-md p-3'>
            <h3 className="font-medium text-purple-600">post id :{id} </h3>
            <h2 className="text-2xl font-sembold">Title : {title} </h2>
        </div>
    );
};

Post.propTypes={
    post:PropTypes.object
}

export default Post;