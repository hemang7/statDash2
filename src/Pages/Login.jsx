import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Logo from "../logo.png";

import { UserAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  // const initialValues = { email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialValues);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const [rememberMe, setRememberMe] = useState(false);

  //   useEffect(() => {
  //     if (rememberMe) {
  //       const storedEmail = localStorage.getItem("rememberedEmail");
  //       if (storedEmail) {
  //         setEmail(storedEmail);
  //       }
  //     }
  //   }, [rememberMe]);

  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      // Show validation error toast for missing fields
      toast({
        title: "Login Error",
        description: "Please enter both email and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      await signIn(email, password);
      navigate("/main-app");
      console.log("logged in!!!");
      toast({
        title: "Login Successful",
        description: "You have successfully logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      // Show validation error toast for login failure
      toast({
        title: "Login Error",
        description: "Incorrect email or password entered!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-2 md:mx-0 md:my-0 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <div className="flex justify-center">
        {/* Left side with icon and text */}
        <div className="sm:w-1/2 sm:mb-5 sm:mr-28 flex items-center">
          <img src={Logo} alt="" className="mr-3 sm:w-32" />
          <div>
            <p className="text-4xl mb-2 font-semibold text-gray-800">
              QCS StatDash
            </p>
            <p className="text-sm mb-2 text-gray-600 truncate">
              Transforming Data into Actionable Intelligence.
            </p>
          </div>
        </div>
        {/* Right side with form */}
        <div className="sm:w-1/2 ml-14">
          <h2 className="text-2xl font-semibold mb-4 text-center">Login!</h2>
          <form onSubmit={handleLogin}>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
                onClick={() => navigate("/reset-password")}
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white font-semibold uppercase rounded w-full tracking-wider"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-slate-500 text-center md:text-left">
            Don't have an account?{" "}
            <a
              className="text-red-600 hover:underline hover:underline-offset-4"
              href="#"
              onClick={() => navigate("/signup")}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
