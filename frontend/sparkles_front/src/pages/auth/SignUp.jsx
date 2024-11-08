import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import axiosInst from "../../helper/AxiosInstance";
import { Link } from "react-router-dom";

const SignUp = () => {
 
  // Usestates and variables
  const [enteredCredentials, setEnteredCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)


  // Functions
  const handelEnteredCredentials = (e) => {
    const { name, value } = e.target
    setEnteredCredentials((prev) => {
      return {...prev, [name]: value}
    })
  }

  const handelSignInSubmit = async(e) => {
    e.preventDefault();
    setEnteredCredentials({
    email: "",
    password: "",
    confirmPassword: ""
  })
    try {
      axiosInst.get("/texturl")
    }
    catch (error) {
      
    }
   
  }

  console.log("Enter credentials", enteredCredentials)
  return (
    <section className="h-full">
      <div className="container h-full px-6 py-2">
        <div className=" mt-16 g-6 flex h-full flex-wrap items-start justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className=" sm:mb-10 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              // src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"

              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full "
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
           <div className="mt-6 w-11/12 md:w-8/12 lg:ml-6 lg:w-5/12">
            <div className="h-full mb-6">
               <h2 className="text-center text-slate-100 font-medium text-2xl h-full bg-slate-700 p-1 rounded-md">SignUp</h2>
            </div>
            <form onSubmit={handelSignInSubmit}>
              
              <div className=" flex flex-col w-full">
               
                {/* <!-- Email input --> */}
                   <input
                  type="email"
                  name="email"
                  value={enteredCredentials.email}
                  className="mb-2 w-full p-2 text-black  text-lg rounded-md outline-none border-1 border-slate-700"
                  placeholder="Enter Email"
                  onChange={handelEnteredCredentials}
                  autoComplete="email"
                    required
                />
                {/* <!--Password input--> */}
                <div className="  w-full relative ">
                <input
                type={"password"}
                    name="password"
                    value={enteredCredentials.password}
                 className="w-full mb-2 p-2 text-black  text-lg rounded-md outline-none border-1 border-slate-700"
                  size="lg"
                  placeholder="Enter Password"
                  onChange={handelEnteredCredentials}
                  autoComplete="current-password"
                  required
                  />
                </div>
                
                {/* confirm passeord */}
                 <div className="  w-full relative ">
                <input
                type={isPasswordVisible ? "text" : "password"}
                    name="confirmPassword"
                    value={enteredCredentials.confirmPassword}
                 className="w-full mb-3 p-2 text-black  text-lg rounded-md outline-none border-1 border-slate-700"
                  placeholder="Reenter Password"
                  onChange={handelEnteredCredentials}
                  autoComplete="new-password"
                  required
                  />
                  <div className="absolute top-2 right-2 text-slate-800 text-3xl"
                  onClick={()=> setIsPasswordVisible(prev => !prev)}>{isPasswordVisible ? < IoEyeOff /> : <IoEye />}</div>
                  </div>
                
              </div>
              

              
              

              {/* <!-- Remember me checkbox --> */}
              <div className="mb-2 flex items-center justify-end">
                

                {/* <!-- Forgot password link --> */}
                <div 
                  className="text-white transition-all duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 my-2 "
                >
                  Have An Account, <Link to="/login" className="text-green-700 hover:underline  font-semibold">Login</Link>
                </div>
              </div>

              {/* <!-- Submit button --> */}

              <div className="w-full ">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign Up
                </button>
              </div>

              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* <!-- Social login buttons --> */}
              <div  className="w-full">
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                >
                  {/* <!-- Facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  SignUp with Facebook
                </a>
              </div>
              <div className="w-full ">
                <a
                  className="mb-3 flex gap-2 w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  style={{ backgroundColor: "#eb493c" }}
                  href="#!"
                  role="button"
                >
                  {/* <!-- Twitter --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>
                  SignUp with Google
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp