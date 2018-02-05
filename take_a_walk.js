// Take a Ten Minute Walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// PSEUDO CODE
// First determine that there are ten directions total, if length is not equal to ten return false.
// Second determine if there are an equal number of n/s and e/w directions in the array so that you end back at the start.



// CODE
// Refactored Final Version

function isValidWalk(walk) {
  var ns = 0;
  var ew = 0;
  walk.forEach(function(dir){
    switch(dir) {
      case 'n': ns++; break;
      case 's': ns--; break;
      case 'e': ew++; break;
      case 'w': ew--; break;
    }
  });
  return walk.length == 10 && ns === 0 && ew === 0
}

// Original Functional Version

// function isValidWalk(walk) {
//   if(walk.length != 10){
//     return false;
//   }
//   var ns = 0;
//   var ew = 0;
//   walk.forEach(function(direction){
//     if ( direction === 'n' ){
//       ns += 1;
//     } else if ( direction === 's' ){
//       ns -= 1;
//     } else if ( direction === 'e' ){
//       ew += 1;
//     } else {
//       ew -= 1;
//     }
//   });

//   console.log("north south " + ns);  // 0
  
//   console.log("east west " + ew);  // 0

//   if ( ns === 0 && ew === 0 ){
//     return true
//   } else {
//     return false
//   }
// }


// OTHER SOLUTIONS

// 1.  My initial solution attempted to use case, but I missed the break in each statement.  I was also trying to combine with forEach instead of writing a for loop as is done below.

// function isValidWalk(walk) {
//   var dx = 0
//   var dy = 0
//   var dt = walk.length
  
//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case 'n': dy--; break
//       case 's': dy++; break
//       case 'w': dx--; break
//       case 'e': dx++; break
//     }
//   }
  
//   return dt === 10 && dx === 0 && dy === 0
// }


// 2.  Return issues a callback to the count function, which includes a nested filter function that it uses to compare.  Then uses double equal to return a true or false statement.

// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function(a){return a==val;}).length;
//   }
//   return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }


// DRIVER CODE
isValidWalk(['n','s']) // should return false

isValidWalk(['n','s','n','w','e','s','n','s','n','s'])  // should return true

isValidWalk(['n','n','n','s','n','s','n','s','n','s'])  // should return false

isValidWalk(['s','w','w','n','e','n','s','w','e','e'])  // should return true



