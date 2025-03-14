"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent } from "react";
import { signIn } from "supertokens-web-js/recipe/emailpassword";

const LoginForm = () =>{

  
    async function signInClicked(email: string, password: string) {
        try {

            const response = await signIn({
                formFields: [{
                    id: "email",
                    value: email
                }, {
                    id: "password",
                    value: password
                }]
            })
            console.log("Inside sign in clicked");
            console.log(response.status + " Response status"); 
            

            if (response.status === "FIELD_ERROR") {
                response.formFields.forEach(formField => {
                    if (formField.id === "email") {
                        // Email validation failed (for example incorrect email syntax).
                        window.alert(formField.error)
                    }
                })
            } else if (response.status === "WRONG_CREDENTIALS_ERROR") {
                window.alert("Invalid email or password")
            } else if (response.status === "SIGN_IN_NOT_ALLOWED") {
                // the reason string is a user friendly message
                // about what went wrong. It can also contain a support code which users
                // can tell you so you know why their sign in was not allowed.
                window.alert(response.reason)
              
            } else {
                // sign in successful. The session tokens are automatically handled by
                // the frontend SDK
                window.location.href = "/home"
            }
        } catch (err: any) {
            if (err.isSuperTokensGeneralError === true) {
                // this may be a custom error message sent from the API by you.
                window.alert(err.message);
            } else {

                window.alert("Oops! Something went wrong: " + err.message);
            }
        }

      
    }

    //NextJs with its Type Safety. We need FormEvent<HTMLFormElement>
    const handleSubmit = (event  :FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        signInClicked(email,password );
    }
    return(
        <>
        <div style={{
            height: '100vh',
            width : '100vw',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center'
            
        }}>
            <form style={{
                backgroundColor: '#fff', 
                padding: '20px', 
                borderRadius: '10px', // Add a border radius to give the form a rounded corner effect
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a box shadow to give the form a lift up effect
                maxWidth: '50vw', // Set a maximum width for the form
                margin: 'auto'}} 
                onSubmit = {handleSubmit}>
            <div>
                <label style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    color: '#3498db',
                    textAlign: 'center'}} > Log-In </label>
            </div>
            <div className="mb-5">
                <label id = "email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
                <label id="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
    
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign-In</button>
            </form>
            </div>
        </>
    );
}

export default LoginForm;