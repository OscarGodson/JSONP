# JSONP Beta 1.0
## Alpha Stage

### What
This is a super tiny JSONP library for when you don't need jQuery or another JS library just for JSONP requests. It supports both callbacks and [Promises](http://www.html5rocks.com/en/tutorials/es6/promises/) for easy use asynchronous use.

### Why
After searching for "JSONP examples" and "JSONP tutorials" I was dissapointed by the lack of straightforward JSONP stuff out there. While there is nothing wrong with jQuery and I use it every single day, sometimes you need to do some JSONP without using jQuery and so I wrote this for myself, but feel free to use it! The min version is only 621 bytes.

### How
The high-level signature for the function looks like this:

    JSONP([uri], [data], [custom_method_name], [callback])

* uri - simply specify the endpoint you want to call. [string]
* data - the payload that you want to include in your request. [object]
* custom_method_name - this controls the name of the function that will make the JSONP request. Optionally used in certain cases. [string]
* callback - a function called on a succesful response. [function]

To get my Twitter avatar for example you'd do:
    ```javascript
    JSONP('http://twitter.com/users/oscargodson.json').then(function(json){
        console.log(json.profile_image_url);
    });
    ```
Sometimes the third-party site require a custom method name, like Flickr, which requires `jsoncallback` rather than the standard `callback` method. Here's an example to get a thumbnail of my latest pic on Flickr:
    ```javascript
    JSONP('http://api.flickr.com/services/feeds/photos_public.gne?id=12389944@N03&format=json','jsoncallback').then(function(json){
      console.log(json.items[0].media.m);
    });
    ```
You can also pass parameters in the form of a JSON object, like so:
    ```javascript
    JSONP('https://api.github.com/users/carvefx/gists',{'since': '2014-02-01T12:00:00Z'}).then(function(json){
      document.getElementById('github').innerHTML = json.data[0].html_url;
    });
    ```
Additionally you can use a callback instead, providing one as the last parameter:
    ```javascript
    JSONP('http://twitter.com/users/oscargodson.json',function(json){
        console.log(json.profile_image_url);
    });
    ```

### Browser Support
* IE6+ (using a polyfill like [Babel](babeljs.io) or [ES6-Promise](https://github.com/jakearchibald/es6-promise) )
* Edge 13+
* Firefox 29.0+
* Safari 7.1+
* Google Chrome 32.0+
* Opera 19+

### To do...

* Anything else people request, if anything
