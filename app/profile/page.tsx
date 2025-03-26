"use client";
import { useState, useEffect } from "react";
import UserFeed from "../components/user-feed/user-feed";
import Session from 'supertokens-web-js/recipe/session';

const Profile = () => {
  const [userId, setUserId] = useState<String>("");
  const [userDetails, setUserDetails] = useState(); 
      useEffect(() => {
        
          async function getJWT() {
            if (await Session.doesSessionExist()) {
                  let userId = await Session.getUserId();
                  setUserId(userId);
                  console.log(userId); 
            }
          }
      
          getJWT();
          
          const userInfo = async () => {
            try {
              
              const response = await fetch(
                `http://localhost:3000/api/user/?user_id=${userId}`//no api route to userDetails
              );
              setUserDetails(await response.json());//not sure what the response is so line 39 has errors
            } catch (e) {
              console.log(e);
            }
          };
      
          userInfo();
      }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px", // Add a border radius to give the form a rounded corner effect
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add a box shadow to give the form a lift up effect
          maxWidth: "90vw", // Set a maximum width for the form
          margin: "auto auto 30px auto",
          height: "33vh",
          width: "100vw",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="px-4 sm:px-0">
          <h3 className="text-base/7 font-semibold text-gray-900">Profile</h3>
          <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {userDetails.first_name + " " + userDetails.last_name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm/6 font-medium text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                {userDetails.email}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px", // Add a border radius to give the form a rounded corner effect
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add a box shadow to give the form a lift up effect
          maxWidth: "55vw", // Set a maximum width for the form
          margin: "auto",
          width: "100vw",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserFeed/>
      </div>
    </>
  );
};

export default Profile;
