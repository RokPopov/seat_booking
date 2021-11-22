const container = document.querySelector(".container");
// grab all the seats that are not occupied
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
// changing the type of the movieSelect into a number
let ticketPrice = +movieSelect.value;

// update the total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// movie-select event listener
movieSelect.addEventListener("change", function (e) {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// seat-select event listener
container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
