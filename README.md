# Next Blogger   [Demo](https://next-blogger-demo.vercel.app/)

## Start 
```bash
npm run start # do not use run dev as we are not working locally
```

### Local URLs
- http://localhost:3000 : browse the website
- http://localhost:3000/admin : connect to Tina Cloud and go in edit mode
- http://localhost:3000/exit-admin : log out of Tina Cloud
- http://localhost:4001/altair/ : GraphQL playground to test queries and browse the API documentation


## How Does this Next-Blogger Project works
Well, There are two parts of this project, one is this Structural-Repo ( this one )  and other is [Content-Repo](https://github.com/Infinity8sailor/next-blogger-content-repo). All the site related structural components are in this repo and content is fetched from the content repo which can be public or private using Tina CMS. 

- [ ] Host this site somewhere ( vercel [ recommended ], netlify )
- [ ] Provide .env file with tina credentials
- [ ] Follow rest of Instructions from the [Content-Repo](https://github.com/Infinity8sailor/next-blogger-content-repo)


# Contents
- [ ] Collections : set of similar content
  - [X] pages : routing pages
    - [X] Home
    - [X] About
    - [ ] Gallary
  - [X] Posts
  - [ ] Users
  - [X] Authors
  - [ ] Quotes
  
# Features and Updates
- [ ] Reading time to be displayed.
- [ ] Quotes Feature.