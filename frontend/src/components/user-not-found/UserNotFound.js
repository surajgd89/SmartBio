import './user-not-found.scss';


function UserNotFound() {
   const handleRedirect = () => {
      window.location.href = '/';
   };
   return (
      <div className="not-found-container">
         <h1>404 - User Not Found</h1>
         <p>We're sorry, but the requested user was not found.</p>
         <button onClick={handleRedirect}>Go to Home Page</button>
      </div>
   )
}

export default UserNotFound