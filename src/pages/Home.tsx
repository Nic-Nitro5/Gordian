import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="container">
            <h1 className="my-4">Home</h1>
            <div className="card shadow-sm bg-white border rounded">
                <div className="card-body">
                    <h5 className="card-title">Welcome to the Gordian test home page</h5>
                    <p className="card-text">This is the opportunity where I can try and convince Gordian to employ me. I want the position as they use the technologies that intrigue me and I would really like to be profficient with. </p>
                    <Link to="/users" className="btn btn-outline-primary me-2">Users</Link>
                    <Link to="/resources" className="btn btn-outline-primary">Resources</Link>
                </div>
            </div>
        </div>
    );
}