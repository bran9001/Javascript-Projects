function displayType(vegetable) {
    var vegetableType = vegetable.getAttribute("data-vegetable-type");
    alert(vegetable.innerHTML + " is in the " + vegetableType + " classification!");
}