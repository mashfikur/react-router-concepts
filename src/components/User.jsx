import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border-2 border-red-600 rounded-md p-4">
      <h3 className="text-3xl">Name : {name}</h3>
      <h3 className="text-2xl">email : {email}</h3>
      <h3 className="text-xl">phone : {phone}</h3>
      <Link to={`/users/${id}`} className="font-semibold text-purple-700">Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
