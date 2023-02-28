var dictionary = {
  "apple": "a round fruit with red or green skin",
  "banana": "a curved fruit with yellow skin",
  "orange": "a citrus fruit with orange skin and juicy pulp",
  "grape": "a small round fruit that grows in bunches",
  "watermelon": "a large fruit with green skin and red juicy flesh"
};

var testDiv = document.getElementById("kvp");
for (var key in dictionary) {
  testDiv.innerHTML += key + ": " + dictionary[key] + "<br>";
}


function lookup() {
    var word = document.getElementById("word").value.toLowerCase(); // converts value to lowercase
    if (dictionary.hasOwnProperty(word)) {
      document.getElementById("Dictionary").innerHTML = dictionary[word];
    } else {
      document.getElementById("Dictionary").innerHTML = "Sorry, the word you entered is not in the dictionary.";
    }
}