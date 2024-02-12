import './users-listing.scss';
function UsersListing({ AllUserData }) {
   return (
      <div className="users-listing">
         <section className='users-section'>
            <h1 className="head"><span>Welcome to</span> <div>SmartBio</div></h1>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias repudiandae, deleniti magnam rerum, eveniet mollitia sint libero, ex veniam provident reiciendis sed ea consequuntur esse perferendis at accusantium pariatur!</div>
            <ul className='list'>
               {
                  AllUserData.map((user, index) => {
                     const { personalInfo, userName } = user;
                     const { name, designation, profilePicture } = personalInfo;
                     const { first, last } = name;
                     return (
                        <li key={index} className='item'>
                           <img src={process.env.PUBLIC_URL + profilePicture} alt="Profile Pic" className='profile-img' />
                           <div className='user-info'>
                              <h4 className='name'>{`${first} ${last} `} </h4>
                              <span className='desg'>{`${designation[0]}`}</span>
                           </div>
                           <a href={process.env.PUBLIC_URL + `?user=${userName}`} className='view' target='_blank'>
                              <i className="far fa-arrow-right"></i>
                           </a>
                        </li>
                     );
                  })
               }
            </ul>
         </section>
      </div>
   );
}
export default UsersListing;