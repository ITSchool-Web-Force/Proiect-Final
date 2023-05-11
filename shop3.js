const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");
const shopItems = document.querySelectorAll(".shop-item");

searchButton.addEventListener("click", function() {
  const searchTerm = searchBox.value.toLowerCase();
  shopItems.forEach(function(item) {
    const itemName = item.querySelector(".shop-item-name").textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
