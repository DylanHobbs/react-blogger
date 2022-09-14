# React Blogger
React <3 Markdown

An actual simple way to run a static blog for people who are in anyway technical.  
No CMS, just static assets that get bundled at buildtime  
Write your posts in Markdown and that's about all there is to it.

Everything is written in React and is completly customiseable.

## How to use this template
1. Clone the repo as a template
    - You can press the "Use This Template" button on the github page
    - Or use a tool like [Degit](https://github.com/Rich-Harris/degit) to clone the repo
2. Create your own repo / clone
    - If you used "Use This Template" on github you'll be taken to your new repo. You clone this to your local machine
    - If you used Degit, just head over to the github/gitlab and click "Add New Repo" and follow the instructions for "existing folder/repository"   
3. Get it running locally  
    - Once you have your own personal repo cloned to your machine, get into that folder and run the below commands. Once done, you'll find the site at http://localhost:5173
```
> npm i 
> npm run dev
```

4. Modify the code!   
    - You can create new posts by creating markdown files in the `/src/posts` directory.
    - Follow the format used by `TestPost.md`.  
    - There are examples of how to use some markdown elements in there too.  
    - To get started just duplicate `TestPost.md` and change the name of the new file to `TestPost2.md`.
    - If you have your browser open, you'll see the changes in realtime as you save your files.  
    - You'll need to change the `slug` and `title` to whatever you want.  
    - Here's a rundown of all the fields in the **greymatter** at the start of the files
        - `hidden` - Optional, defaults to false. If true, will hide the post in navigation and direct by url
        - `slug` - **Must be unique** across your site. This is the url that is used to get to the post. 
        - `title` - This text is used in the navigation and displays at the top of the post page
        - `description` - Currently unused
        - `date` - Currently unused
        - `author` - Currently unused
        - `tags` - Currently unused

5. Push to production   
    - This is pretty easy with Netlify. Create an account or sign in and add a new site through version control.  
    - You may need to link your account to your Github/Gitlab to see the repo, but it should work out of the box once you get the repo selected.  
    - Netlify will give you a random domain, but will freely allow you to change it to one you own.
# Todo
- [ x ] Make list search able
- [ x ] Independent scrolling detail panel (or fixed nav .. )
- [ x ] Add current page highlighting
- [ ] Add scss and variables
- [ ] Syntax highlighting in code blocks
- [ x ] Fix history mode on production
- [ ] Allow markdown field to suggest an ordering 
- [ ] Add documentation on how to use this template
- [ ] Table of contents with anchor link ( enabled per markdown )