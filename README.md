Hello! 

This is the My Clerks App. I had a lot of fun coding this project! It is the first time I've ever built a carousel so it was really cool getting a better idea of how they work. To get this this app working locally I believe all you need to do is clone, install dependencies with npm install, move into root directory, and then run npm start.

I imported react-elastic-carousel for this app. It helped a lot with the UX portion of things, but came with an interesting caveat when it came to fetching more users. Turned out that checking for the end of the users array (where I stored users) with react-elastic-carousels variable "isEdge" is not as straightforward as I would have liked. That is why there is a big check for fetching more users on that right button click. However, we got it working, and I think it's working pretty well. Whenever you get to the end of the array and click on the right button it fetches 12 more users and I think the experience is pretty smooth.

I think it was a small enough app to not need state management like redux. Therefore, I left that out.

I spent a significant amount of time up until this point, and have not included testing, but besides that I have everything that I believe the instructions were asking for! Thanks you for giving me a fun coding project!

