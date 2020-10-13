> Cheat Sheet
---
>  { 
> //NOTE : One way to get a specific place value in an array
> var str 
> var str = str2[str2.length - 3];
>   }
---
> //NOTE How to Export a Function
> 
``` module.exports = (conditions) => {
    const BlogPost = 
    {
        @OBJECT
    }
      }
    });
  
    return BlogPost;
  }; ```
  > This file can then be called to export the data for BlogPost

  OBJECTS
   var testObj = {
     "a name" : "thisname", // - 1
     name : "testname" // - 2
   }
   var testObj1 = testObj['a name'] // - 1 HOW TO CALL Property 1
   var testObj2 = testObj.name // - 2 HOW TO CALL Property 2

   ---
    var dogs = {
      Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
    };
    var myDog = "Hunter"; // THIS DEFINES THE PROPERTY WE WANT
    var myBreed = dogs[myDog]; // THIS IS OUR NEW CALL FOR THAT PROPERTY - array dogs is called , then it looks for the element myDog which is set to Hunter , returning the value Doberman
    console.log(myBreed); // "Doberman"
  ---
  // Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (value === '') delete object[id][prop];
  else if (prop === 'tracks') {
    object[id][prop] = object[id][prop] || [];
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  }

  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');