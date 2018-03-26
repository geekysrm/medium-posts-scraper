scraper = require('medium-scraper');
 
  var medium = {user: '@geekysrm'}
 
  scraper.getPosts(medium).then(function(results) {
    console.log(results);
  })