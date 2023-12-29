"use client";
import FormInput from "@/commonUl/FormInput";
import SecondaryButton from "@/commonUl/SecondaryButton";
import React from "react";
export default function page() {
  return (
    <>
      <div className="loginFormText">
        <div className="imageWidth">
          <h1>
            Become an <br />
            Exclusive Member
          </h1>
          <p>Sign up and join the partnership </p>
          <label>Full name</label>
          <FormInput placeHolder="Example@email.com" />
          <label>Email Address</label>
          <FormInput placeHolder="At least 8 characters" />
          <label>Password</label>
          <FormInput placeHolder="At least 8 characters" />
          <SecondaryButton label="Become A Member" className="full signGap" />
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
