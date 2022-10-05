# Project: Bamboo Forest Board🎋
***
### URL: https://steady-halva-48ccc0.netlify.app/
> It takes a sec to get data from database(because free deploy server platfrom is used and it turn off server while it isn't in use for a while)
> Therefore, when you tried to sign in or sign up, need to wait for a sec.

> Since it was deployed with Heroku, the server goes to sleep if there is no use for 30 minutes. There is a delay of 10-20 seconds to wake up again.

> When web is redirected, netlify can not read where to start page (I guess because it is maden by react, will try netlify.toml or _redirects) 

> Additional functions other than CRUD are not implemented on the server. Will be implemented after refactoring the client code.
***
## Purpose and plan of this project

>This web page is maden for portfolio as practcing JavaScript, Node.js( React, express) and MySQL( sequelize).

>This is my first web project maden from scratch.

>I left code for Home, Report List page and widget bar for future Idea of design and function.
***
## Web page description
> This web page is single page application. Therefore, It can works without refreshing website but rendering components.

>It implements anonymous bulletin board with functions such as posting, logging in, signing up, searching, and etc.
***


## 1) Sign out, Sign up, Sign in functions
<img width="1078" alt="image" src="https://user-images.githubusercontent.com/76520105/185748127-ccaa3186-6d85-45c0-b49a-4c5842d7d251.png">
<img width="1084" alt="image" src="https://user-images.githubusercontent.com/76520105/185748138-54152d20-9504-40f0-a49d-59812eaa1564.png">
<img width="1115" alt="image" src="https://user-images.githubusercontent.com/76520105/185748161-0f691324-822e-4cb3-bc81-2ee946478690.png">
<img width="1097" alt="image" src="https://user-images.githubusercontent.com/76520105/185748166-03e2eb78-a1b9-4fd0-a5d6-a2035019420b.png">
<img width="1067" alt="image" src="https://user-images.githubusercontent.com/76520105/185748173-7ccc9a2f-4e42-486a-98a3-8323bcf105e2.png">

>It can check if input is correct form warn the user.

<img width="1091" alt="image" src="https://user-images.githubusercontent.com/76520105/185748234-8fe8814d-ff09-4ec0-ae71-8c54ce33aea9.png">

***

***

## 2)Category, search functions
<img width="1102" alt="image" src="https://user-images.githubusercontent.com/76520105/185748250-e3b1aa61-716f-4a29-9cee-9e2da6985faa.png">
<img width="1094" alt="image" src="https://user-images.githubusercontent.com/76520105/185748266-3eec1de3-af24-4eb9-a8fa-c62d951831be.png">
<img width="1092" alt="image" src="https://user-images.githubusercontent.com/76520105/185748279-f2c71a6c-70c5-45c5-acc2-61743ce13492.png">

***

***

## 3)Post, Post view Settings, Edit my information functions
<img width="1089" alt="image" src="https://user-images.githubusercontent.com/76520105/185748332-a50aae8e-bd67-4317-8444-6ed6081cf9d0.png">
<img width="1088" alt="image" src="https://user-images.githubusercontent.com/76520105/185748340-2d39f2f1-2173-494d-b20f-8bc85cc2d416.png">
<img width="1091" alt="image" src="https://user-images.githubusercontent.com/76520105/185748348-de25bd61-23ff-4991-8e2c-4653d8cabb19.png">
<img width="1109" alt="image" src="https://user-images.githubusercontent.com/76520105/185748359-7adb31f6-f695-4849-a645-98ff1b596fae.png">

***

***

## 4)Responsive UI
<img width="637" alt="image" src="https://user-images.githubusercontent.com/76520105/185748394-5de8ed0d-1ecb-4fb9-9d87-7f546b011317.png">
<img width="632" alt="image" src="https://user-images.githubusercontent.com/76520105/185748412-62cd17d0-ea97-49a8-beb4-fdd9a772605d.png">

>When the screen becomes smaller than a certain size, the menu bar can be turned on and off through the toggle, and the horizontally arranged items are vertically  arranged.

***
***

## 5) Likes, Bookmark, Report, Comment Functions
<img width="1093" alt="image" src="https://user-images.githubusercontent.com/76520105/185789762-ccd25363-d66f-45e0-a191-805124359540.png">
<img width="1071" alt="image" src="https://user-images.githubusercontent.com/76520105/185789780-398e7908-97b8-42fa-9aec-345fcf2672f7.png">
<img width="1084" alt="image" src="https://user-images.githubusercontent.com/76520105/185838896-c75a48cd-1b39-4095-8d42-6821230e9350.png">



*********************************
**********************************

## 6) CRUD function with Server
### Read
<img width="1024" alt="image" src="https://user-images.githubusercontent.com/76520105/186188855-60dc4345-fedc-43dd-8891-44bc90338d54.png">
>GET: get posts all

<img width="1010" alt="image" src="https://user-images.githubusercontent.com/76520105/186188945-2587ab13-0521-498c-ae31-01162f20d282.png">
>GET: get posts by category

<img width="978" alt="image" src="https://user-images.githubusercontent.com/76520105/186190536-13bcf034-b388-4168-8843-1bb768f8a9d0.png">
>GET: get post by post Id

### Create
<img width="1022" alt="image" src="https://user-images.githubusercontent.com/76520105/186190969-75dfd070-f926-4ff8-ae6b-e85fde649cc5.png">
<img width="991" alt="image" src="https://user-images.githubusercontent.com/76520105/186192367-048c408b-2348-45b2-9025-37338f731e95.png">
>POST: create post. (Likes and Time will be implemented with SQL

### Update
<img width="1068" alt="image" src="https://user-images.githubusercontent.com/76520105/186192712-1b0db818-605b-4595-a08f-e34cb8d3c968.png">
<img width="1077" alt="image" src="https://user-images.githubusercontent.com/76520105/186192752-a2615328-1c09-4bd5-b5d7-c92e850c9d42.png">
<img width="928" alt="image" src="https://user-images.githubusercontent.com/76520105/186192990-f42b63de-6d72-44fb-afce-f7a154801a22.png">
<img width="1038" alt="image" src="https://user-images.githubusercontent.com/76520105/186194154-5c152d73-bf35-4ae4-9d73-8e100a8011af.png">
<img width="1014" alt="image" src="https://user-images.githubusercontent.com/76520105/186194188-dad4f673-e65b-48ac-9163-dc6e243d43b3.png">
>PUT: update post.

### Delete
<img width="1063" alt="image" src="https://user-images.githubusercontent.com/76520105/186194376-dfd267a7-40ce-4093-a7a8-368641e4405f.png">
<img width="1060" alt="image" src="https://user-images.githubusercontent.com/76520105/186194412-2cdfa4fc-9555-4a13-b374-9bc4ee65d87d.png">
<img width="1081" alt="image" src="https://user-images.githubusercontent.com/76520105/186194452-88fceae4-0a0f-49bf-885f-7da85a7f28f8.png">
>DELETE: delete post.



*********************************
**********************************

## 7) Auth functions with server: Sign up, Sign in, Sign out, Me
<img width="814" alt="image" src="https://user-images.githubusercontent.com/76520105/186713391-11d7f17d-a3b2-4166-8c40-af287e69fe2d.png">
>Sign in with email: cat@student.ubc.ca

***

<img width="1051" alt="image" src="https://user-images.githubusercontent.com/76520105/186713515-327a44e2-c36e-4886-9ede-3afe661953d2.png">
<img width="1064" alt="image" src="https://user-images.githubusercontent.com/76520105/186713557-ecf3aaa3-6b2b-4b85-b701-79ef8d9402c5.png">
<img width="1012" alt="image" src="https://user-images.githubusercontent.com/76520105/186713622-3d933d0d-595b-4ee3-879e-c05362f0130f.png">
<img width="1048" alt="image" src="https://user-images.githubusercontent.com/76520105/186713659-30d3530b-54d8-4b1f-99a9-6bec4df1b6c8.png">
> Edit own post

***

<img width="1072" alt="image" src="https://user-images.githubusercontent.com/76520105/186713739-65035962-020d-4adf-b856-7f2880f26838.png">
<img width="1061" alt="image" src="https://user-images.githubusercontent.com/76520105/186713766-e2bb18dd-0fcb-45c7-a383-696473259adf.png">
> Delete own post

***

<img width="1055" alt="image" src="https://user-images.githubusercontent.com/76520105/186713831-e85e6614-62d3-40f7-b5a8-251227ff5ca4.png">
> Can't edit or delete other's post

***

<img width="1066" alt="image" src="https://user-images.githubusercontent.com/76520105/186713912-dfe2d033-16c7-482b-a416-33a5c90a82be.png">
<img width="915" alt="image" src="https://user-images.githubusercontent.com/76520105/186713944-42e6bb28-7f85-46f9-ba51-11bd66b6e28c.png">
> Sign out

***

<img width="563" alt="image" src="https://user-images.githubusercontent.com/76520105/186714053-9067dba5-433c-488f-a21b-ffc7786c5b32.png">
<img width="1031" alt="image" src="https://user-images.githubusercontent.com/76520105/186714091-b9b64534-6aa2-468e-84d3-1aa5004f51ee.png">
> Sign up with email: bird@student.ubc.ca

***

<img width="996" alt="image" src="https://user-images.githubusercontent.com/76520105/186714252-c66df68c-3582-489b-9426-f2425cdd648c.png">
<img width="1048" alt="image" src="https://user-images.githubusercontent.com/76520105/186714287-3afcd2e6-5f60-4f28-9d6c-2dfb3fea72a9.png">
> new account made post successfully

***

> React lose state when the web is refreshed. However, when it is signed up or signed in, it take jwt token from server and save in localstorage.
> Me function call this jwt token saved in localstorage and set state to be signed in when the web is refreshed.
> Therefore, it can be valid no matter it is refreshed unless it is expired.

***
***

## 8) Connected to Database
<img width="344" alt="image" src="https://user-images.githubusercontent.com/76520105/187019889-42cacdaf-75ec-4af9-b946-2bb50242d8e5.png">
<img width="1036" alt="image" src="https://user-images.githubusercontent.com/76520105/187019935-6e7ff392-a2a1-4490-bc4f-8f7f041a19af.png">
> Making account(Sign up)

***

<img width="946" alt="image" src="https://user-images.githubusercontent.com/76520105/187019970-b97505a5-80cc-48df-a936-0e13ed8ca622.png">
<img width="1080" alt="image" src="https://user-images.githubusercontent.com/76520105/187019979-7072f40f-c840-416e-95fa-e9093978254d.png">
<img width="1090" alt="image" src="https://user-images.githubusercontent.com/76520105/187020011-27cd3b1b-14a2-497d-a7c1-0d6d26dfb3bd.png">
> Posting

***

<img width="1051" alt="image" src="https://user-images.githubusercontent.com/76520105/187020221-2c989a6b-71d9-4f14-b979-1ce7008a4092.png">
<img width="997" alt="image" src="https://user-images.githubusercontent.com/76520105/187020248-99e2a6cf-0bb4-4ab8-85be-379403d24f88.png">
<img width="1086" alt="image" src="https://user-images.githubusercontent.com/76520105/187020260-e51ecd7b-e611-467c-99da-86a2f58df7be.png">
<img width="1083" alt="image" src="https://user-images.githubusercontent.com/76520105/187020275-14065e6e-b2d9-420c-aa04-f4cd43dc1ce3.png">
> Editing

***

<img width="522" alt="image" src="https://user-images.githubusercontent.com/76520105/187020330-b899ec33-68e0-48e4-9b66-04b604488ed1.png">
<img width="984" alt="image" src="https://user-images.githubusercontent.com/76520105/187020342-9b654031-f93c-4303-a228-f9fd9d726d4a.png">
<img width="1086" alt="image" src="https://user-images.githubusercontent.com/76520105/187020346-5814fe4c-fcfd-437a-822f-638ea4630682.png">
<img width="1081" alt="image" src="https://user-images.githubusercontent.com/76520105/187020352-cde40c12-bccf-4d5e-a72c-2ee36118e2b2.png">

> Sign in with other account( can see other's post but can't delete or edit)

***
<img width="1065" alt="image" src="https://user-images.githubusercontent.com/76520105/187020404-5e6cbdf3-d852-43fe-8555-3b026e6adb7a.png">
<img width="1070" alt="image" src="https://user-images.githubusercontent.com/76520105/187020416-0dba8cb6-c796-4715-9800-99c75b17bf5f.png">
<img width="1078" alt="image" src="https://user-images.githubusercontent.com/76520105/187020424-d66e03ea-7e48-4106-b796-bb91fffff10f.png">
<img width="1086" alt="image" src="https://user-images.githubusercontent.com/76520105/187020432-191aed49-dc29-4229-ac39-969727750bc2.png">
<img width="1088" alt="image" src="https://user-images.githubusercontent.com/76520105/187020435-42e40066-206c-493b-809f-8e272d13b89d.png">
<img width="1067" alt="image" src="https://user-images.githubusercontent.com/76520105/187020453-2a1012db-b9c9-4df2-b919-e8fcd30750c0.png">
> Delete own post




