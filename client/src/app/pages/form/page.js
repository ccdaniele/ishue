'use client'
import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app";

import { data } from "autoprefixer"

export default function issueForm() {



  
    const handleSubmit = async (event) => {
      event.preventDefault()
      
      // git authentication

      const {
        data: { login },
      } = await octokit.rest.users.getAuthenticated();
      console.log("Hello, %s", login);

    // GET Request

      const octokit = new Octokit({
        auth: process.env.GIT_TOKEN,
        userAgent: "ishue/v1.0.0",
      });

      const owner = event.target.first.value
      const repo =  event.target.last.value
        
      try {
        const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
          owner: `${owner}`,
          repo: `${repo}`,
          });

          alert(data.first.title)
          console.log(data.first.title)

      } catch (error) {
        console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
      }
   
      // const newObj ={
      //   headers: {
      //     'Accept': 'application/vnd.github+json',
      //     'Authorization': 'Bearer git_token',
      //     'X-GitHub-Api-Version': '2022-11-28',
      //   },
      // }
      //  const owner = event.target.first.value
      //  const repo =  event.target.last.value
        
      //   const endpoint = `https://api.github.com/repos/${owner}/${repo}/issues`
      //   console.log(endpoint, newObj)

      //   fetch(endpoint, newObj)
      //   .then(resp=>resp.json())
      //   .then(data=>{console.log(data,"request")}, 
      //     alert('data.first.title'))


      // // Form the request for sending data to the server.
      // const options = {
      //   // The method is POST because we are sending data.
      //   method: 'POST',
      //   // Tell the server we're sending JSON.
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   // Body of the request is the JSON data we created above.
      //   body: JSONdata,
      // }
   
      // // Send the form data to our forms API on Vercel and get a response.
      // const response = await fetch(endpoint, options)
   
      // // Get the response data from server as JSON.
      // // If server returns the name submitted, that means the form works.
      // const result = await response.json()
  
      // alert(`Is this your full name: ${result.data.first}`)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form onSubmit={handleSubmit}>
      
      <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
      <div className="px-4 py-8 sm:px-10">
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300">
            </div>
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 text-gray-500 bg-white">
              Repository details
            </span>
          </div>
        </div>
        <div className="mt-6">
          <div className="w-full space-y-6">
            <div className="w-full">
              {/* OWNER  */}
              <div className=" relative ">
              <label htmlFor="first"></label>
                <input type="text" id="first" name="first"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder= "Repository Owner" />
              </div>
            </div>
                          {/* Repository  */}
            <div className="w-full">
              <div className=" relative ">
              <label htmlFor="last"></label>
                <input type="text" id="last" name="last" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Repository Name" />
              </div>
            </div>
            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
        {/* <p className="text-xs leading-5 text-gray-500">
          This data are display for information and can change
        </p> */}
      </div>
    </div>

        {/* <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
   
        <button type="submit">Submit</button> */}


      </form>
    )
  }


