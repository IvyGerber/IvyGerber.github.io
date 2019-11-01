let productsCountEl=document.getElementById("products-count");
let addToCartButtons=document.querySelectorAll(".add");
for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click",function(){
		let prevProductsCount=+productsCountEl.textContent;
		productsCountEl.textContent=prevProductsCount+1;
	})
}
let likeButton=document.getElementsByClassName("like");
for (let i = 0; i < likeButton.length; i++) {
	likeButton[i].addEventListener("click",function() {
  likeButton[i].classList.toggle("liked");
})
}

 $('.slider').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed: 2000,

 });
