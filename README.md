# react-search
Week 19 React Homework

The task is to build a search application using the React library. The structure of the application... and many of the pieces are in place. What remains is the glue to make them work together.

As noted in the Search Utility Help modal, the intent here is to develop an app that will benefit students, teachers, and knowledge workers in general, helping them to turn their many hours of searching the web into an information resource.

In simple terms, we are trying to develop a search-on-search utility. The intial search is similar to what we might perform with a popular search engine such as Google, except that we carry out the search using a web scraper. The secondary search is on the annotated results of past searches.

# Reference Material
We begin with a react start-up system that we built with Jonathan's help after the regular class meeting time on Saturday, June 17. Other souces to draw from include the book Pro MERN Stack by Vasan Subramanian (2017, http://www.apress.com/us/book/9781484226520), react-bootsrtap documentation (https://react-bootstrap.github.io/components.html), and the solution from the prior assignment (shown under the directory 0-mongo-base-solution). 

# Technologies Used
Here are the primary technologies or building blocks for the app:

* react 
* react-bootstrap (including modal for Search Utility Help) 
* Node (foundation for server, npm sources)
* Express for web server
* cheerio for web scaping under the scripts directory
* MongoDB document database 
* (future) Elasticsearch for the search on search... this is the ultimate database for the information resource, not MongoDB.

In other words, we are working on a MERN stack app.

# Development Status
The front-end layout is in place with the Search Utility Help providing an overview of the app.

The "enter new search request" section awaits further development. In particular, we need add the query box... a form for text entry associated with the web scraping function.

The "past search results" section is constructed to show nine previous search results, arranged initially as a simple three-by-three grid. The thinking is to display closest matches in groups of nine.