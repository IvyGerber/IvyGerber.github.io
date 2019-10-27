let productsCountEl=document.getElementById("products-count");
console.log(productsCountEl);
let addToCartButtons=document.querySelectorAll(".add");
console.log(addToCartButtons);
for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click",function(){
		let prevProductsCount=+productsCountEl.textContent;
		productsCountEl.textContent=prevProductsCount+1;
	})
}
let productLikeEl=document.getElementsByClassName("like");
console.log(productLikeEl)
for (let i = 0; i < productLikeEl.length; i++) {
	productLikeEl[i].addEventListener("click",function myFunction(x) {
  x.classList.toggle("like");
})
}