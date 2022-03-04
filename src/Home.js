import { Link } from "react-router-dom";

function Home() {
    return (
        <h1>
            Home Page
            <Link to="create">Create Your SmartBio</Link>
            <Link to="delete">Delete Your SmartBio</Link>
        </h1>
    )
}
export default Home;