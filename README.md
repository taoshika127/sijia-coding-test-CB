# sijia-coding-test-CB
## Steps:
1. After cloned the repository, run npm install
2. create an .env file and enter port number. e.g. port = 8080
3. Open one terminal and run npm run server
4. One another termianl and run npm run watch
5. For easier access, I didn't hide the config file for cloudinary API. The config file is under src/components/config_photo.js.

## My Blog
Video Go-through: 
https://drive.google.com/file/d/1ITckyW0o9V3U-Xk7cLVhU3L9tdlbAU8P/view?usp=sharing 

My blog is a website where the creator can view, edit and add new blogs of hers/his.
I have spent two and half days to work on this app. Below is a workflow:

Day 0: Got the coding test. Designed the UIUX in Lucid. https://lucid.app/lucidspark/686a3cc1-8c1e-455b-8a7f-2177492d8844/edit?viewport_loc=-393%2C-1756%2C3861%2C1881%2C0_0&invitationId=inv_849ec3ca-7c55-417a-874d-b28804696c91 . I wanted this app to be intuitive, easy to use, and also functional for the creator to search blogs, sort by date, views, and filter by different tags. For each post, the creator can remove/add existing tags in the database, and also add brand new tags, they can also edit the blog title and body text.

Day 1: Based on the app idea, and my designed UI, I started to create the bone structure in VScode. I thought about how many pages it should have, and what components each page should have, and how I may use the compnents as much as possible. I also spent some time on state planning, how to pass props more efficiently, and how to minimize server request. I started to build the necessary components first then move to the pages.

Day 2: Building all necessary components and pages. And tested constantly to make sure no bugs or bad user experiences.

Day 3: Since I got some extra time, I decided to add the photo feature, which allows the creator to add one photo per blog. It worked fine.

## Some notes: 

due to the limited time, I didn't get to build the data API, I just created some sample data in VScode, which can be accessd in db folder. Ideally I would build the API in a different repository and use MongoDB or Postgres to build the database. Also, if I had more time, I would implement Auth0 to provide some authentication guard for different pages. For example, for people other than the blog creator herself/himself, they won't be able to edit or add the blog. They can only view, sort, filter and search. Also, right now it's wokring on localhost only, if I had more time I would deploy it by using AWS ec2 instance.


