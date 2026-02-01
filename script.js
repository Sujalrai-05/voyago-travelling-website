function setFilter(btn) {
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function likeHotel(btn) {
  let name = btn.parentElement.querySelector("h3").innerText;

  if (btn.innerText === "♡") {
    btn.innerText = "♥";
    btn.style.color = "red";
    localStorage.setItem(name, "liked");
  } else {
    btn.innerText = "♡";
    btn.style.color = "white";
    localStorage.removeItem(name);
  }
}

window.onload = function () {
  document.querySelectorAll(".card").forEach(card => {
    let name = card.querySelector("h3").innerText;
    let btn = card.querySelector(".fav");

    if (localStorage.getItem(name)) {
      btn.innerText = "♥";
      btn.style.color = "red";
    }
  });
};

const container = document.getElementById("cardContainer");

function slideLeft() {
  container.scrollBy({ left: -260, behavior: "smooth" });
}

function slideRight() {
  container.scrollBy({ left: 260, behavior: "smooth" });
}

function scrollTopPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
