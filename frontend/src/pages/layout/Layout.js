import { Outlet, Link } from "react-router-dom";
import { AppContext } from "../smartbio/AppContext";
import { useContext } from "react";


const Layout = () => {
   const { user } = useContext(AppContext);

   return (
      <>
         {!user.id &&
            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                     <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                     <Link to={`/smartbio/${user.id}`}>SmartBio</Link>
                  </li>
                  <li>
                     <Link to="/change-password">Change Password</Link>
                  </li>
                  <li>
                     <Link to="/login">Login</Link>
                  </li>
                  <li>
                     <Link to="/register">Register</Link>
                  </li>
                  <li>
                     <Link to="/forgot-password">Forgot Password</Link>
                  </li>
                  <li>
                     <Link to="/reset-password">Reset Password</Link>
                  </li>
               </ul>
            </nav>
         }
         <Outlet />
      </>
   )
};

export default Layout;