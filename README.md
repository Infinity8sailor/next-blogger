# Next Blogger 

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
Well there are two parts of this project, one is this structural repo and other is Content Repo. All the site related structural components are in this repo and content is fetched from the content repo which can be public or private. 


### Triggering the Content updates to the main site
   - [X] Add github action to content repo
   - [X] Create a Deploy Trigger using vercel on Main site [ Deploy Hook ]
   - [x] Once the link is deploy hook Api is created, add that to github action variables under DEPLOY_HOOK
   - [X] Enable the Media provider in tina.io


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