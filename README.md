# Brooklyn College TTP Residency Application — 2nd Coding Challenge
### My Name and Favorite Hobby Deployed Static Web Page

- [Index](index.html)
  - Displays full name, favorite hobby enclosed in \<h1> tags
  - Displays current time (also enclosed in \<h1> tags)
  - Optional: Includes hyperlink to YouTube video in reference to favorite hobby :)
- [JavaScript](script.js)
  - Contains the code to display current time using toLocaleString( ) and setInterval( )

<br>

**Resolved bugs:**
- **Issue:** Unusual memory usage detected when keeping the webpage up for an extended period of time, eventually crashing the page after a few minutes.
- **Solution:** Set Date( ) object and the formatted string generated by toLocaleString( ) to null before the next iteration of setInterval( ) runs the displayTime( ) function. Move the setInterval( ) call outside of the displayTime( ) function.
