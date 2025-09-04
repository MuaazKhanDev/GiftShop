// Fetch products and render
fetch("products.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("product-list");

    // Render products
    data.products.forEach((product, index) => {
      let productBox = document.createElement("div");
      productBox.classList.add("imgbox");

      productBox.innerHTML = `
        <img class="imgboximg" src="${product.img_url}" alt="${product.name}">
        <button class="addicon" data-index="${index}">
            <img src="/images/Addicon.svg" alt="">
        </button>
      `;
      container.appendChild(productBox);
    });

    const modal = document.querySelector(".page1");
    const closeBtn = document.querySelector(".closeicon");
    const modalImg = document.querySelector(".page1-img img");
    const modalName = document.querySelector(".page1content .name");
    const modalPrice = document.querySelector(".page1content .price");
    const modalDesc = document.querySelector(".page1content .description");
    const addToCartBtn = document.querySelector(".btncart");

    // Open modal
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

    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Add to cart closes modal
    addToCartBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  })
  .catch(error => console.error("Error loading products:", error));


const hamburger = document.querySelector(".hamburger");
const mobileDropdown = document.querySelector(".mobile-dropdown");
const hamburgerIcon = document.querySelector(".hamburger img:first-child"); // first img = hamburger
const closeIcon = document.querySelector(".hamburger .close-icon");        // second img = close

hamburger.addEventListener("click", () => {
  mobileDropdown.classList.toggle("show");

  if (mobileDropdown.classList.contains("show")) {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});
