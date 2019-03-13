require("logger");
var queryURL =
  "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=trololol";

$(".btns").on("click", function() {
  fetchLols().then(gif => {
    const url = gif.data.images.original.url;
    displayLols(url);
  });
});

function fetchLols() {
  return $.get(queryURL);
}

function displayLols(url) {
  const img = $("<img>");
  img.attr("src", url);
  $("#lolol").append(img);
}
