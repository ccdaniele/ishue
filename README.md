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
 