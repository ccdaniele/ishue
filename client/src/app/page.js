'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {

  const [ success, setSuccess ] = useState(false) 
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
    const params = {
      owner: event.target.inputOwner.value,
      repo: event.target.inputRepo.value,
      url: event.target.inputUrl.value,
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
      setPayload(response)
      router.push('/report')
    }

    catch (error){
      
      console.log('error',result)
    }
      
  }


  return (
    <main>
      {/* query */}
        <div>
        {/* conditional start */}
        {!success? 
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content">
              {/* Description + button*/}
                <div className="max-w-xl flex flex-col space-y-6 ">
                  {/* Description */}
                  <div className="mx-auto flex flex-col items-center text-center lg:px-32 xl:max-w-3xl pt-8">
                    <h1 className="text-4xl font-bold leadi sm:text-5xl"> Monitor your issues 
                      <span className="text-emerald-600"> with </span>
                      <span className="text-fuchsia-400"> ishues</span> 
                    </h1>
                  </div>
                {/* Button */}
                  <div tabIndex={0} className="collapse bg-fuchsia-400 text-primary-content">
                  <input type="checkbox" />
                    <div className="collapse-title">
                    Add Repository information
                    </div>
                    <div className="collapse-content bg-fuchsia-400"> 
                    {/* expand */}
                    <form onSubmit={handleSubmit}>
                      <div tabIndex={0} className="grid grid-rows-4 grid-flow-col gap-6" >
                        {/* Repo Owner*/}
                        <div>
                          <input type="text" placeholder="Repository Owner" id="inputOwner" name="inputOwner" className="input input-bordered input-primary w-full " />
                        </div>
                        {/* Repo Name*/}  
                        <div>
                          <input type="text" placeholder="Repository Name" id="inputRepo" name="inputRepo"className="input input-bordered input-primary w-full "/>
                          <p>or just copy and paste repo link   </p>
                        </div>
                        {/* Repo URL*/}  
                        <div>
                          <input type="text" placeholder="Repository URL" id="inputUrl" name="inputUrl"className="input input-bordered input-primary w-full "/>
                        </div>
                        {/* Repo Owner*/}
                        <div>
                          <button type ="submit" className="btn btn-block">Wide</button>
                        </div>  
                      </div>
                    </form> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
         :
         // conditional=false
        <div>{console.log('no') }</div>
        }
        </div>  
        {/* report */}
        <div>
          {/* conditional start */}
          {success? 
          // conditional=true
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                              <tr>
                                  <th></th>
                                  <th>Name</th>
                                  <th>Job</th>
                                  <th>Favorite Color</th>
                              </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                              <tr>
                                  <th>1</th>
                                  <td>Cy Ganderton</td>
                                  <td>Quality Control Specialist</td>
                                  <td>Blue</td>
                              </tr>
                            {/* row 2 */}
                              <tr>
                                  <th>2</th>
                                  <td>Hart Hagerty</td>
                                  <td>Desktop Support Technician</td>
                                  <td>Purple</td>
                              </tr>
                            {/* row 3 */}
                              <tr>
                                  <th>3</th>
                                  <td>Brice Swyre</td>
                                  <td>Tax Accountant</td>
                                  <td>Red</td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                  </div>
            </div>
           
          :
          // conditional=false
          <div>{console.log('no') }</div>
          }
          {/* end conditional */}
        </div>
  </main>
  


    )
}
