const cart = () => {
  const cartBtn = document.getElementById("cart");
  console.log(cartBtn);
  const cartModal = document.querySelector(".cart");
  // console.log(cartModal);
  const cartCloseBtn = cartModal.querySelector(".cart-close");
  // console.log(cartCloseBtn);
  const openCart = () => {
    cartModal.style.display = "flex";
  };

  const closeCart = () => {
    cartModal.style.display = "";
  };

  // cartBtn.onclick = openCart;
  // cartCloseBtn.onclick = closeCart;
  cartBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);
};
export default cart;
