// Apply Functional Programming to Convert Strings to URL Slugs


function urlSlug(title) {
    return title
       .toLowerCase()
       .trim()
       .split(/\s+/)
       .join("-");
   
   }
   // Only change code above this line
   urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
   console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));