import React from "react";
import Dashboard from "../components/Dashboard";
import Sidenav from "../components/Sidenav";


const Profile = () => {
 
  // const [userData, setUserData] = useState(true);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     const data = await getUserData();
  //     setUserData(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className='flex py-20 mt-20 ml-30 text-gray-800'>
      {/* {userData && 
        <>
        <Sidenav/>
        <Dashboard/>
        </>
      } */}
      <div>
        <Sidenav/>
        <Dashboard />
      </div>
      <div>
      
      </div>
    </div>
  )
}
export default Profile
