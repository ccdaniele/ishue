import { NextResponse} from 'next/server'
 
export async function GET(request) {

  const owner = request.nextUrl.searchParams.get("owner")

  const repo = request.nextUrl.searchParams.get("repo")

  const endpoint =  `https://api.github.com/repos/${owner}/${repo}/issues`

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'Authorization': 'Token' + process.env.GIT_TOKEN,
    },

  }

  const response = await fetch(endpoint, options)

  try {
    const fetched = await response.json()

    return NextResponse.json(fetched)
  }

  catch (error){throw new Error('Failed to fetch data')
}
    

 
}