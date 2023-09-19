import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error=useRouteError()
  console.log(error)
  return (
    <div className="text-3xl text-center font-semibold my-80">
      <h2>OOOPS !! Error </h2>
      <p> {error.statusText || error.message} </p>
    </div>
  );
};

export default ErrorPage;
