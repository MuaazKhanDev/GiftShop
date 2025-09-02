const modal = document.querySelector(".page1");
const closeBtn = document.querySelector(".closeicon");
const btnCart = document.querySelector(".btncart");

container.addEventListener("click", (e) => {
  if (e.target.closest(".addicon")) {
    let index = e.target.closest(".addicon").dataset.index;
    let product = data.products[index];

    modalImg.src = product.img_url;
    modalName.textContent = product.name;
    modalPrice.textContent = "Rs. " + product.price;
    modalDesc.textContent = product.description;

    modal.style.display = "block";
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

btnCart.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});
