Specifically designed for mobile browser viewing. And very badly written…
  Once you past 820px width the CSS will start to break. I did not have time to fix.

HTML is hardcoded in so do what you gotta do for whatevers. CSS should help with the organization.

ALL CONTENT GOES IN THE CONTAINER DIV!
This includes your all “pages” for conversations as well.
Front page format as follows:
  <div class=“container>
    <div class box> // has onclick javascript on BOX div. change as you see fit.
      <div class avatar>
        <img>
      <div class timestamp>
      <div class innertext>
        <h2 class name>
        <p class preview>


Javascript will be need to add in:
  - Dates
  - Append new .box divs
  - Do your menu thing
  - everything else