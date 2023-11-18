import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Logo from "../logo.png";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleResetPassword = async () => {
    if (!email) {
      // Display a validation error toast for missing email
      toast({
        title: "Error",
        description: "Please enter your email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      // Send a password reset email
      await sendPasswordResetEmail(auth, email);
      // setResetEmailSent(true); // Set the state to true
      setEmail(""); // Clear the email field

      // Display a success toast
      toast({
        title: "Success",
        description:
          "Password reset email sent successfully. Check your inbox.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      // Display an error toast
      toast({
        title: "Error",
        description:
          "Error sending password reset email. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-5 md:mx-0 md:my-0 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <div className="md:w-1/2 mb-5 flex items-center">
        <img src={Logo} alt="Sample" className="w-32 sm:w-32 mr-3 sm:ml-32" />
        <div>
          <p className="text-4xl font-semibold text-gray-800">QCS StatDash</p>
          <p className="text-sm text-gray-600">
            Transforming Data into Actionable Intelligence.
          </p>
        </div>
      </div>
      <div className="sm:w-1/3 sm:mr-10 sm:mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Reset Password
          </h2>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded w-full tracking-wider"
            onClick={handleResetPassword}
          >
            Send Reset Link
          </button>
        </div>
        <div className="mt-4 font-semibold text-md text-slate-700 text-center md:text-left">
          Remember your password?{" "}
          <Link
            className="text-blue-600 hover:underline hover:underline-offset-4"
            to="/login"
          >
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
