var dogs = [
  {
    name: "bones",
    price: 1
  },
  {
    name: "syntax",
    price: 2
  },
  {
    name: "wishbone",
    price: 3
  }
];
var total = 0;
var container = document.getElementById('groceryList');

dogs.forEach(function(element){
  var listItem = document.createElement('li');
  listItem.innerHTML = element.name + ": " + element.price;
  container.appendChild(listItem);
  total += element.price;
});

var totalContainer = document.createElement('li');
totalContainer.innerHTML = "Total: $" + total;
container.appendChild(totalContainer);
