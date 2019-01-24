const Nightmare = require('nightmare');
const cheerio = require('cheerio');

//we initialize the nightmare and set the show property true so we can monitor what the browser is doing on execution.
const nightmare = Nightmare({ show: true });
const url = 'https://www.flipkart.com/';

// Request making using nightmare
nightmare
//make a request to url through goto function
.goto(url)
//wait for the DOM to be rendered through wait function else it executes the next followup steps without rendering of the content completely
.wait('body')
/*
we are making a request to the Flipkart website and enter nodejs books in the search bar by selecting the appropriate HTML selector using 'type' function.
Selectors can be found by inspecting the HTML using Chrome DevTools
*/
//.click('button._2AkmmA._29YdH8')
.type('input.LM6RPg', 'nodejs books')
//we will click on the search button using click function
.click('button.vh79eN')
.wait('div.bhgxx2')
//once the body is loaded completely, we fetch the innerHTML using evaluate function and return the data
.evaluate(function(){ 
	document.querySelector('body').innerHTML
})
//at last, we close the browser by calling end function
.end()
//if you are using promises, .then() must be called after .end() to run the .end() task
.then(function(response){
	console.log(getData(response));
})
.catch(function(err){
	console.log(err);
});

// Parsing data using cheerio
let getData = function(html){
	data = [];	
	if (html) {
		const $ = cheerio.load(html);
		$('div._1HmYoV._35HD7C:nth-child(2) div.bhgxx2.col-12-12')
		.each(function(row, raw_element){
			$(raw_element).find('div div div')
			.each(function(i, elem){
				let title = $(elem).find('div div a:nth-child(2)').text();
				let link = $(elem).find('div div a:nth-child(2)').attr('href');
				if (title) {
					data.push({
						title : title,
						link : link
					});
				}
			});
		});			
	}
	return data;
}