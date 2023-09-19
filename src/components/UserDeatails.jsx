import { useLoaderData } from "react-router-dom";


const UserDeatails = () => {
    const userDetails=useLoaderData()
    const {name,website}=userDetails
    return (
        <div>
            <h3 className="text-2xl font-semibold">This is the details of user : {name} </h3>
            <h3 className="text-xl font-semibold">user website : {website} </h3>
        </div>
    );
};

export default UserDeatails;