"use client";
import FormInput from "@/commonUl/FormInput";
import SecondaryButton from "@/commonUl/SecondaryButton";
import React from "react";
export default function page() {
  return (
    <>
      <div className="loginFormText">
        <div className="imageWidth">
          <h1>Welcome Back 👋</h1>
          <p>Today is a new day. Its your day. You shape it. </p>
          <label>Email</label>
          <FormInput placeHolder="Example@email.com" />
          <label>Password</label>
          <FormInput placeHolder="At least 8 characters" />
          <a href="">Forgot Password?</a>
          <SecondaryButton label="Sign in" className="full" />
          <div className="signUp">
            <p>
              Don t you have an account? <a href=""> Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
