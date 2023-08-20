'use client'

// import { useParams } from 'next/navigation'

export default function form() {

  // const { owner, repo } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const params = {
      owner: event.target.first.value,
      repo: event.target.last.value,
    }

    const JSONdata = JSON.stringify(params)
    const endpoint = `/api/issues?owner=${params.owner}&repo=${params.repo}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'arguments':`{'owner':'${params.owner}', 'repo':'${params.repo}'}`
      },
    }
    
    const response = await fetch(endpoint, options)

    try {
      const result = await response.json();

      console.log('success',result)
    }

    catch (error){
      
      console.log('error',result)
    }
      
  }
    return (
      
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
      </div>
    </div>



      </form>
    )
  }


  