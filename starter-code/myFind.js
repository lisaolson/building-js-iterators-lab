// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Find
function myFind(arr, callback) {

    for (var i=0; i<arr.length; i++) {
      if (callback(arr[i], i, arr)){
        return arr[i];
      }
    }
  }

//  CODE INSIDE HERE   //



/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/
//function takes in array(dogs) and a callback function.
//goes through all elements in array and calls back callback function which is, Element name, element index and array itself
//callback return true = return value of element
//callback return false =






// export this function (you can ignore this for now)
module.exports = myFind;
