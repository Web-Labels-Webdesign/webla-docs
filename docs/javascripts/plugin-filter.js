document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector(".plugin-search");
  if (!input) return;

  var cards = document.querySelectorAll(".plugin-card");
  var noResults = document.querySelector(".plugin-no-results");

  input.addEventListener("input", function () {
    var term = input.value.toLowerCase().trim();
    var visible = 0;

    cards.forEach(function (card) {
      var match = !term || card.getAttribute("data-search").indexOf(term) !== -1;
      card.hidden = !match;
      if (match) visible++;
    });

    if (noResults) {
      noResults.hidden = visible > 0;
    }
  });
});
