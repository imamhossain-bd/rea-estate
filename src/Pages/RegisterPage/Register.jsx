
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const Register = () => {

    
    const { createUser } = useContext(AuthContext)
    const handelRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(name, email, photo, password);

        
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <div className="px-16">
            <div className="hero min">
                <div className="hero-content">
                    <div className="card shrink-0 shadow-2xl bg-base-100">
                    <h2 className="text-center mt-5 text-xl font-bold">Please Registration</h2>
                        <form onSubmit={handelRegister} className="card-body w-[400px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"name="photo" placeholder="Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <p className="text-center mb-6">Already have an Account? <Link to='/login'><span className="text-[#FF8C47]">Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;