'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {

  const [ success, setSuccess ] = useState(false) 
  const [ data, setData ] = useState([]) 
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
    const params = {
      urlPath: new URL(event.target.inputUrl.value).pathname
    }

    const JSONdata = JSON.stringify(params)
    const endpoint = `/api/issues?urlPath=${params.urlPath}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'arguments':`{'urlPath':'${params.urlPath}'}`
      },
    }
    
    const response = await fetch(endpoint, options)

    try {
      const result = await response.json();

      console.log('success',result)

      setSuccess(true)
      setData(result)
    }

    catch (error){
      
    }
      
  }


  return (
    <main>
      {/* query */}
        <div>
        {/* conditional start 1 */}
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
        {/* end conditional 1*/}
        </div>  
        {/* report */}
        <div>
          {/* conditional start 2 */}
          {success? 
          // conditional=true
          <div className="hero min-h-screen bg-base-200">
            <div className="overflow-x-auto">
            <div>{data.map(data=>             
                <table className="table table-md table-pin-rows table-pin-cols">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Title</th>
                      <th>Username</th>
                      <th>URL</th>
                      <th>Statys</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th></th>
                      <td>{data.title}</td>
                      <td>{data.user.login}</td>
                      <td>{data.url}</td>
                      <td>{data.state}</td>
                    </tr>
                  </tbody>
                </table>  
            )}
            </div>
            </div>
          </div>    
          :
          // conditional=false
          <div>{console.log('no') }</div>
          }
          {/* end conditional 2*/}
        </div>
  </main>
  


    )
}
