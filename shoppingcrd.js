
const totalDisplay = document.querySelector(".total");

const productCards = document.querySelectorAll(".list-products > .card-body");

function updateTotal() {
  let total = 0;

  // re-query each time so removed cards aren't counted
  document.querySelectorAll(".list-products > .card-body").forEach((card) => {
    const unitPrice = parseFloat(card.querySelector(".unit-price").textContent); // "100 $" → 100
    const qty = parseInt(card.querySelector(".quantity").textContent, 10);
    total += unitPrice * qty;
  });

  totalDisplay.textContent = `${total} $`;
}

function deleteCard(card) {
  card.classList.add("removing"); // triggers CSS exit animation

  card.addEventListener(
    "animationend",
    () => {
      card.remove();
      updateTotal();
    },
    { once: true }
  );
}

productCards.forEach((card) => {
  const plusBtn  = card.querySelector(".fa-plus-circle");
  const minusBtn = card.querySelector(".fa-minus-circle");
  const trashBtn = card.querySelector(".fa-trash-alt");
  const heartBtn = card.querySelector(".fa-heart");
  const qtySpan  = card.querySelector(".quantity");

  plusBtn.addEventListener("click", () => {
    qtySpan.textContent = parseInt(qtySpan.textContent, 10) + 1;
    updateTotal();
  });

  minusBtn.addEventListener("click", () => {
    const current = parseInt(qtySpan.textContent, 10);

    if (current > 0) {
      qtySpan.textContent = current - 1;
      updateTotal();
    } else {
      qtySpan.classList.add("shake"); // can't go below 0 — shake as feedback
      qtySpan.addEventListener("animationend", () => qtySpan.classList.remove("shake"), {
        once: true,
      });
    }
  });

  trashBtn.addEventListener("click", () => deleteCard(card));

  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
  });
});


updateTotal();
