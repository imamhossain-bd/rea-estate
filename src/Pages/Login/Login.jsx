import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log('location in the login page',location);


    const handelLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            console.log(result);

            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error);
        })
    }


    return (
        <div className="px-16">
            <div className="hero min">
                <div className="hero-content">
                    <div className="card shrink-0 shadow-2xl bg-base-100">
                        <h2 className="text-center mt-5 text-xl font-bold">Login</h2>
                        <form onSubmit={handelLogin} className="card-body w-[400px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mb-6">Do not have an Account? <Link to='/register'><span className="text-[#FF8C47]">Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;