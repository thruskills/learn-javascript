function serverRequest(query, callback){
    setTimeout(function(){
      var response = query + "full!";
      callback(response);
    },5000);
  }
  
  function getResults(results){
    console.log("Response from the server: " + results);
  }
  
  serverRequest("The glass is half ", getResults);
  
  // Result in console after 5 second delay:
  // Response from the server: The glass is half full!