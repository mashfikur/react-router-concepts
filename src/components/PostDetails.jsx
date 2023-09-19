import { useLoaderData ,useParams } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { useEffect, useState  } from "react";

const PostDetails = () => {
  const [loader, setLoader] = useState(true);
  const postDetails = useLoaderData();
  const params=useParams()

  console.log(params)

  useEffect(() => {
    if (postDetails) {
      setLoader(false);
    }
  }, [postDetails]);

  const { title, body } = postDetails;
  return (
    <div>
      {loader && (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <h3 className="text-2xl font-semibold text-purple-600">
        Title : {title}
      </h3>
      <p className="text-xl font-medium">{body}</p>
    </div>
  );
};

export default PostDetails;
