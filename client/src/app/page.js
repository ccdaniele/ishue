'use client'

export default function Home() {

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
    }

    catch (error){
      
      console.log('error',result)
    }
      
  }


  return (
    <main>
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
  </main>


    )
}
