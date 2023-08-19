


export default function Home() {
  return (
  
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <container>
    <div>
        <div className="mx-auto flex flex-col items-center text-center lg:px-32 xl:max-w-3xl pt-8">
          <h1 className="text-4xl font-bold leadi sm:text-5xl"> Monitor your issues 
            <span className="text-emerald-400"> with </span>
            <span className="text-fuchsia-400"> ishues</span> 
          </h1>
        </div>
      </div>
      <div className="mt-16  flex flex-col justify-center items-center sm:flex-row">
          <a className="w-80 inline-flex justify-center items-center gap-x-5 text-center text-gray-100 bg bg-fuchsia-400 text-lg text tracking-widest font-medium rounded-md hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition py-3 px-4" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html" target="_blank">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width={40} height={36} fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Explore git issues
          </a>
        </div>


        </container>



   </main>
  )
}

