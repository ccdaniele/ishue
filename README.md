# README

rails new ishue — api     

rails g scaffold Issue url:string repository_url:string labels_url:string id:integer number:integer title:string user:string user_avatar:string user_url:string state:boolean locked:boolean current_assignee:string comments:integer created_at:timestamp updated_at:timestamp closed_at:timestamp author_association:string body:string positive_reactions:integer negative_reactions:integer

rails generate serialized issue

Api: 
- Controller
- Routes

Add cors 

Dependecies: 

- https://github.com/cyu/rack-cors

next.js create app https://nextjs.org/docs/pages/api-reference/create-next-app 

npx create-next-app@latest 

Dependencies: 

Tailwinds

npm install octokit 
 

ORT=
MONGO_URI= "mongodb+srv://ishue:SPuySvyc7hoIdnVs@ishue-auth.gg1ggne.mongodb.net/?retryWrites=true&w=majority"

ACCESS_TOKEN_SECRET="eyJhbGciOiJIUzI1NiJ9.e30.FXibJVNHsvJ6Ff-N9XtTTom9cGExRqsldHbrhAOqRUg"
REFRESH_TOKEN_SECRET="eyJhbGciOiJIUzUxMiJ9.e30.KCZ5m4MoRSeRA8kNBJyvTtoGwuedtmNqO6NSfK5OGy4XMTGPwC_8Tz_UK5yUlVQKZ0AuZq1-K-G9BOl1qMPYJw"
VERIFY_EMAIL_TOKEN_SECRET=
EMAIL_HOST="danecalco@gmailcom"
EMAIL_USER="nodemailer"
EMAIL_PASSWORD="gubsucdsifhbjsdq"
CLIENT_URL="http://localhost:8080/"
# mongo_db:https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/
# Role name: ishue
# password: SPuySvyc7hoIdnVs
 
