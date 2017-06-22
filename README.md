# react-search
Week 19 React Homework

This project sets the stage for the development of a knowledge worker utility we are calling "Search-on-Search."

The assignment was to build a search application using the React library. The structure of the application... and many of the pieces are in place. What remains is the glue to make them work together.

As noted in the "About Search-on-Search" modal, the intent here is to develop an app that will benefit students, teachers, and knowledge workers in general, helping them to turn their many hours of searching the web into an information resource.

Search-on-Search, as we see it involves an intial search is similar to what we might perform with a popular search engine such as Google, except that we carry out the search using a web scraper. Selected results from web scrapint are stored and annotated, providing a document database for subsequent searching. The subsequent searching (in the future) will employ Elasticsearch.

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
The front-end layout is in place with the "About Search-on-Search" modal providing an overview of the app. Actually, this modal-facilitated section of the app is the most fully developed, providing information about the nature of the app and the meaning of terms being used. The code for this section is under the help directory under components.

The "search the web about" section awaits further development. In particular, we need add the query box... a form for text entry associated with the web scraping function.

The "search information store about" section awaits further development. In particular, we need add the query box... a form for text entry associated with searching the (future) Elasticsearch information store.

The "past search results" section is constructed to show nine previous search results, arranged initially as a simple three-by-three grid. The thinking is to display closest matches in groups of nine. The current form of this has placeholder images and faker-facilitated text entries, a la the example developed by the special lecture on React development offered by Jonathan.

As far as the assignment is concerned, we have demonstrated that we can lay out the stucture of a working React-based app, albeit an incomplete app at this point in time.