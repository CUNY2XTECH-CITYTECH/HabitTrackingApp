"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import {
  signUp,
  doesEmailExist,
} from "supertokens-web-js/recipe/emailpassword";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //sign-up clicked
  const signUpClicked = async (email: string, password: string) => {
    try {
      const response = await signUp({
        formFields: [
          {
            id: "email",
            value: email,
          },
          {
            id: "password",
            value: password,
          },
        ],
      });
      console.log("Inside sign up clicked");
      console.log(response.status + " Response status");

      if (response.status === "FIELD_ERROR") {
        // one of the input formFields failed validation
        response.formFields.forEach((formField) => {
          if (formField.id === "email") {
            // Email validation failed (for example incorrect email syntax),
            // or the email is not unique.
            window.alert(formField.error);
          } else if (formField.id === "password") {
            // Password validation failed.
            // Maybe it didn't match the password strength
            window.alert(formField.error);
          }
        });
      } else if (response.status === "SIGN_UP_NOT_ALLOWED") {
        // the reason string is a user friendly message
        // about what went wrong. It can also contain a support code which users
        // can tell you so you know why their sign up was not allowed.
        window.alert(response.reason);
      } else {
        // sign up successful. The session tokens are automatically handled by
        // the frontend SDK.
        window.location.href = "/home";
      }
    } catch (err: any) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert("Oops! Something went wrong.");
      }
    }
  };

  const checkEmail = async (email: string) => {
    try {
      let response = await doesEmailExist({
        email,
      });

      if (response.doesExist) {
        window.alert("Email already exists. Please sign in instead");
      }
    } catch (err: any) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert("Oops! Something went wrong.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    await checkEmail(email)
    await signUpClicked(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 bg-white p-4 shadow-md rounded-md"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 border rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-2 border rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Sign Up
      </button>
    </form>
  );
}
