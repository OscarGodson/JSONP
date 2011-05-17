#JSONP Beta 1.0
##Alpha Stage

###What 
This is a super tiny JSONP library for when you don't need jQuery or another JS library just for JSONP requests.

###Why
After searching for "JSONP examples" and "JSONP tutorials" I was dissapointed by the lack of straightforward JSONP stuff out there. While there is nothing wrong with jQuery and I use it every single day, sometimes you need to do some JSONP without using jQuery and so I wrote this for myself, but feel free to use it! The min version is only 621 bytes.

###How

It's simple. There are three parameters, but you only need two. This is what it looks like:

    JSONP([url],[method],[callback])

To get my Twitter avatar for example you'd do:

    JSONP('http://twitter.com/users/oscargodson.json',function(json){
      console.log(json.profile_image_url);
    });

Sometimes the third-party site require a custom method name, like Flickr, which requires `jsoncallback` rather than the standard `callback` method. Here's an example to get a thumbnail of my latest pic on Flickr:

    JSONP('http://api.flickr.com/services/feeds/photos_public.gne?id=12389944@N03&format=json','jsoncallback',function(json){
      console.log(json.items[0].media.m);
    });

###To do...

* I have yet to test on any browsers by Firefox 4 and Chrome 11 on Mac
* Set params programmatically rather than all in the URL
* Anything else people request, if anything