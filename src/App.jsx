import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

function App() {
  const navigation=useNavigation()
  return (
    <div className="text-center container mx-auto">
      <Navbar></Navbar>
      <h1 className="text-3xl text-center mb-6">This is the Permanent Header</h1>
      {
        navigation.state==="loading"
        ?<FidgetSpinner
        visible={true}
        height="80"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#ff0000', '#00ff00', '#0000ff']}
        backgroundColor="#F4442E"
      />
      : <Outlet></Outlet>

      }


      <h3 className="text-center text-2xl my-10">this is the footer of this website</h3>
    </div>
  );
}

export default App;
