import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users=useLoaderData()
    return (
        <div className="text-center container mx-auto">
            <h2 className="text-3xl">Users : {users.length} </h2>

            <h3>Welcome to our users page</h3>
            <p>in this specific page we will give you our users</p>
            <div className="grid grid-cols-3 gap-6 my-3">
                {
                    users.map((user)=><User key={user.id} user={user} ></User>)
                }
            </div>
        </div>
    );
};

export default Users;