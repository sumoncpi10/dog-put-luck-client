import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl justify-center">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-center">Login!</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>


                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <button><span class="label-text-alt">Forget Password?</span></button>
                        </label>
                    </div>
                    <button class="btn btn-active">Login</button>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;