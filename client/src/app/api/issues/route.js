import { NextResponse} from 'next/server'


 
export async function GET(req) {

  const { owner, repo } = req.nextUrl.searchParams

  const endpoint =  `https://api.github.com/repos/${owner}/${repo}/issues`


  const res = await fetch(endpoint, {
    method: 'GET',
    headers: {
      "Authorization": "Token " + process.env.GIT_TOKEN,
      'Content-Type': 'application/json',
    
    },
  })
 
  const data = await res.json()
 
  return NextResponse.json(data)
}