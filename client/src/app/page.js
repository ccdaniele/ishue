

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl"> Monitor your issues 
            <span className="text-emerald-400"> with </span>
            <span className="text-fuchsia-400"> ishues</span> 
           
          </h1>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-fuchsia-400 text-gray-100">Get started</button>
            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 border-emerald-400">Learn more</button>
            {/* <fieldset className="w-full space-y-1 dark:text-gray-100">
              <label htmlFor="Search" className="hidden">Search</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
              </div>
            </fieldset> */}
          </div>
        </div>
      </section>
    </main>
  )
}

