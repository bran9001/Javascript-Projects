// initializes a dictionary
var dictionary = {
  "apple": "a round fruit with red or green skin",
  "banana": "a curved fruit with yellow skin",
  "orange": "a citrus fruit with orange skin and juicy pulp",
  "grape": "a small round fruit that grows in bunches",
  "watermelon": "a large fruit with green skin and red juicy flesh"
};

// inputs dictionary into HTML element
var testDiv = document.getElementById("kvp");
for (var key in dictionary) {
  testDiv.innerHTML += key + ": " + dictionary[key] + "<br>";
}

// looks up dictionary kvp
function lookup() {
    var word = document.getElementById("lookup").value.toLowerCase(); // converts value to lowercase
    if (dictionary.hasOwnProperty(word)) {
      document.getElementById("dictionaryLookup").innerHTML = dictionary[word]; // sets HTML value to kvp
    } else {
      document.getElementById("dictionaryLookup").innerHTML = "Sorry, the word you entered is not in the dictionary.";
    }
}

// deletes dictionary kvp
function del() {
  var word = document.getElementById("del").value.toLowerCase(); // converts value to lowercase
  if (dictionary.hasOwnProperty(word)) {
    delete dictionary[word]; // deletes kvp
    document.getElementById("dictionaryDel").innerHTML = word + " has been deleted";
    document.getElementById("kvp").innerHTML = ''; // clears HTML element containing dictionary
    var testDiv = document.getElementById("kvp"); // inputs deleted dictionary into HTML element
    for (var key in dictionary) {
      testDiv.innerHTML += key + ": " + dictionary[key] + "<br>";
    }
  } else {
    document.getElementById("dictionaryDel").innerHTML = "Sorry, the word you entered is not in the dictionary.";
  }
}