
# Thruskills Project 1 - My Portfolio using Express.js

  

## Pages to build

  

| Sno. | Page | Route |
|-----------------------|-------------------|---|
| 1 | Home | / |
| 2 | Projects | /projects |
| 3 | Project Detail | /projects/:title |
| 4 | Blog | /blog |
| 5 | Blog Detail | /blog/:title |
| 6 | About | /about |
| 7 | Contact | /contact |

  

## Extra requirements

1. Page Layouts

2. Header/Navbar

3. Footer

  

## Home
![enter image description here](https://thruskills.s3.ap-south-1.amazonaws.com/projects/1-my-portfolio/1-home-page.jpeg)
  
**Requirements**

  - **Subscribe**: 
	  - On click of subscribe button validate email id and if it's valid send it to backend server.
	  - On the server side, read the email id
	  - Save the email in DB in newsletter collection
	  - Send a message back to the page and display below email id text box. Message "*Your subscription is confirmed*"
  - **View All**:
	  - Under recent projects section, On click of view all link, take user to projects page
	 - Under recent posts section, On click of view all link, take user to blog page
 - **Recent Projects Grid**:
	 - Make Cover Image a hyperlink to project detail page
	 - Make project title a hyperlink to project detail page
- **Recent Posts Grid**:
	 - Make Cover Image a hyperlink to blog detail page
	 - Make post title a hyperlink to blog detail page
 - **Footer**:
	  - Link "Your Name" to home page i.e. root /
	  - Link "Thruskills" to https://www.thruskills.com **and open it in new tab**
	  - Link "Projects" to projects page
	  - Link "Blog" to blog page
	  - Link "About" to about page
	  - Link "Contact" to contact page
	  
## Projects
![enter image description here](https://thruskills.s3.ap-south-1.amazonaws.com/projects/1-my-portfolio/2-project-list-page.jpeg)
  
**Requirements**

   - **Projects Grid**:
	 - Make Cover Image a hyperlink to project detail page
	 - Make project title a hyperlink to project detail page
	 - Display maximum 12 projects in a page
 - **Pagination**:
	 - Create pagination links
	 - < Go to first page
	 - \> Go to last page
	 - 1...N Go to nth page
	 - Calculate total number of pages and create pages links

## Project detail
![enter image description here](https://thruskills.s3.ap-south-1.amazonaws.com/projects/1-my-portfolio/3-project-detail-page.jpeg)
  
**Requirements**

   - **Sidebar**:
	 - **Github link**: Link it to your [github](gitgub.com) repository of the project
	 - **Demo link**: Link it to the demo url if available
	 - **Technologies**
		 - List down all the technologies used in the project, one per line
	 - **Tags**
		 - List down all the tags added to the project, one per line
 - **Project title**:
	 - Use <h1\> tag
 - **Project description**
	 - Use <p\> tag
  - **Project screen shots**
	  - Use [Bootstrap Carousel](https://getbootstrap.com/docs/4.0/components/carousel/)
	  - Show next and previous buttons
	  
## Blog
![enter image description here](https://thruskills.s3.ap-south-1.amazonaws.com/projects/1-my-portfolio/4-blog-list-page.jpeg)
  
**Requirements**

   - **Posts Grid**:
	 - Make Cover Image a hyperlink to blog/post detail page
	 - Make blog title a hyperlink to blog/post detail page
	 - Display maximum 12 projects in a page
 - **Pagination**:
	 - Create pagination links
	 - < Go to first page
	 - \> Go to last page
	 - 1...N Go to nth page
	 - Calculate total number of pages and create pages links
	 
## Blog detail
![enter image description here](https://thruskills.s3.ap-south-1.amazonaws.com/projects/1-my-portfolio/5-blog-detail-page.jpeg)
  
**Requirements**

   - **Sidebar**:
	 - **Category**: Display name of the category post belongs to
	 - **Tags**
		 - List down all the tags added to the project, one per line
	 - **Related Posts**
		 - Links to similar posts (based on category)
		 - Display post title
		 - Link it to post/blog detail page
 - **Blog title**:
	 - Use <h1\> tag
 - **Blog description**
	 - Use <div\> to display the blog contents
  - **Comments**
	  - Use [Disqus](https://disqus.com/) for comments
	  
## About
![enter image description here](https://thruskills.s3.ap-south-1.amazonaws.com/projects/1-my-portfolio/6-about-page.jpeg)

  **Requirements**

   - **Sidebar**:
	 - **Your photo**: Display your recent photo
	 - **Links**
		 - Create links to your profiles
			 - Github
			 - Facebook
			 - LinkedIn
			 - Twitter
			 - AngelList
	 - **About this project**
		 - Links to the technologies used in the projects
  - **Project timelines**
	  - List down your learnings while building this project
	  - Follow chronological order

## Contact
![enter image description here](https://thruskills.s3.ap-south-1.amazonaws.com/projects/1-my-portfolio/7-contact-page.jpeg)
  
**Requirements**

   - **Sidebar**:
	 - Same as about page
  - **Contact form**
	  - Validate input data
	  - Submit form and read the data at backend
	  - Save the form data in the DB under contact collection
	  - Display "Error" or "Success" message accordingly
	  
### Page Layouts

You will have to create two layouts. One for the full page view and another with sidebar. Please refer above images for the same.

### Header/Navbar

You will have the following 

1. Your name pointing to home page

2. Projects

3. Blog

4. About

5. Contact


### Footer

You will have to create a simple footer across the site. The contents of footer are given in the home page design above.
