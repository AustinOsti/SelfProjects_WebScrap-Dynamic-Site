# SelfProjects_WebScrap_Dynamic-Site
Scraping data from websites that are dynamic in nature i.e content is rendered through Javascript.

We will use web automation tools and libraries like Selenium, Cypress, Nightmare, Puppeteer, x-ray, Headless browsers like phantomjs etc.

Why these tools and libraries? These tools and libraries are generally used by Software testers in tech industries for software testing. All of these opens a browser instance in which our website can run just like other browsers and hence executes javascript files which render the dynamic content of the website.

# What will we need
Web scraping is divided into two simple parts —

1. Fetching data by making an HTTP request
2. Extracting important data by parsing the HTML DOM

We will be using Node.js and browser automation library:

1. Nightmare — is a high-level browser automation library from Segment.
2. Cheerio — jQuery for Node.js. Cheerio makes it easy to select, edit, and view DOM elements.

Nightmare is similar to axios or any other request making library but what makes it odd is that it uses Electron under the cover, which is similar to PhantomJS but roughly twice as fast and more modern. Nightmare uses Javascript for handing/manipulating DOM through evaluate function which is complex to implement. So, we will use Cheerio for handling DOM content by fetching innerHTML through evaluate function and pass the content (innerHTML) to Cheerio which is easy, fast, and flexible to implement. Moreover, Nightmare also supports proxies, promises and async-await.

We will scrape the products listed on the flipkart.com website but only those which appears in the search for nodejs books

We need some help of Chrome Developer Tools to search through the HTML of a web page and select the required data. 

# Note
if required you may need to log into the website you are scraping.