"use strict";

const menuButton = document.querySelector(".menu_icon");
const sideMenu = document.querySelector(".side_component");
const sideMenuCloseBtn = document.querySelector(".side_head_close");
const cartIcon = document.querySelector(".cart_icon img");
const cartItems = document.querySelector(".cart_items");
const cartEmpty = document.querySelector(".cart_items_empty");
const cartListPurchase = document.querySelector(".cart_items_list_purchase");
const listPriceQuantity = document.querySelector(".list_price_qtde");
const listPriceAmount = document.querySelector(".list_amount");
const deleteItem = document.querySelector(".cart_items_delete_item img");
const boxItemsPurchase = document.querySelector(".items_purchase");
const gallerySelectedImage = document.querySelector(".gallery_selected");
const imagesOptions = Array.from(document.querySelectorAll(".images_options"));
const [imgOption01, imgOption02, imgOption03, imgOption04] = imagesOptions;
const btnPrice = Array.from(document.querySelectorAll(".btn_price"));
const [btnMinusPrice, btnPlusPrice] = btnPrice;
const visorQuantity = document.querySelector(".visor_qtde");
const btnAddToCart = document.querySelector(".btn_add_cart");
const sliderMobileImg = document.querySelector(".slider_mobile_img");
const [sliderControlPrev, sliderControlNext] = Array.from(
  document.querySelectorAll(".slider_controls_btn")
);
const sliderComponent = document.querySelector(".slider_component");
const sliderBtnClose = document.querySelector(".slider_close");
const sliderHeadImgSelected = document.querySelector(".slider_head_selected");
const sliderBodyImages = Array.from(
  document.querySelectorAll(".slider_body_images")
);
const [sliderPrevImg, sliderNextImg] = Array.from(
  document.querySelectorAll(".slider_btn_change_img")
);
const [sliderBodyImg01, sliderBodyImg02, sliderBodyImg03, sliderBodyImg04] =
  sliderBodyImages;

let quantityItemsBuy = 0;
let gallerySelectedImageIndex = 0;
let galleryImages = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
gallerySelectedImage.setAttribute(
  "src",
  galleryImages[gallerySelectedImageIndex]
);

let sliderHeadImgSelectedIndex = 0;
let sliderMobileIndex = 0;

function switchEffectImgOp(group, element) {
  group.forEach((img) => {
    img.classList.remove("effect");
  });
  element.classList.add("effect");
}

function changeGalleryImgIndex(index) {
  gallerySelectedImageIndex = index;
  gallerySelectedImage[gallerySelectedImageIndex];
  gallerySelectedImage.setAttribute(
    "src",
    galleryImages[gallerySelectedImageIndex]
  );
}

function sliderImgAttribute() {
  sliderHeadImgSelected.setAttribute(
    "src",
    galleryImages[sliderHeadImgSelectedIndex]
  );
}

function sliderUpdateEffect() {
  switch (sliderHeadImgSelectedIndex) {
    case 0:
      switchEffectImgOp(sliderBodyImages, sliderBodyImg01);
      break;
    case 1:
      switchEffectImgOp(sliderBodyImages, sliderBodyImg02);
      break;
    case 2:
      switchEffectImgOp(sliderBodyImages, sliderBodyImg03);
      break;
    case 3:
      switchEffectImgOp(sliderBodyImages, sliderBodyImg04);
      break;
  }
}

function sliderIndexChange(value) {
  sliderHeadImgSelectedIndex = value;
  sliderImgAttribute();
}

function showBoxItemsPurchase() {
  if (quantityItemsBuy > 0) {
    boxItemsPurchase.classList.remove("close");
  } else if (quantityItemsBuy <= 0) {
    boxItemsPurchase.classList.add("close");
  }
  if (quantityItemsBuy > 0) {
    cartEmpty.classList.add("close");
    cartListPurchase.classList.remove("close");
  } else if (quantityItemsBuy <= 0) {
    cartEmpty.classList.remove("close");
    cartListPurchase.classList.add("close");
  }
  boxItemsPurchase.textContent = quantityItemsBuy;
  listPriceQuantity.textContent = quantityItemsBuy;
  listPriceAmount.textContent = "R$" + (125 * quantityItemsBuy).toFixed(2);
  deleteItem.addEventListener("click", () => {
    quantityItemsBuy = 0;
    visorQuantity.textContent = quantityItemsBuy;
    showBoxItemsPurchase();
  });
}

menuButton.addEventListener("click", () => {
  sideMenu.classList.remove("close");
  document.body.setAttribute("class", "scroll_enabled");
});
sideMenuCloseBtn.addEventListener("click", () => {
  sideMenu.classList.add("close");
  document.body.removeAttribute("class", "scroll_enabled");
});

imagesOptions.forEach((element) => {
  element.addEventListener("click", function () {
    switchEffectImgOp(imagesOptions, this);
  });
});

imgOption01.addEventListener("click", () => {
  changeGalleryImgIndex(0);
});

imgOption02.addEventListener("click", () => {
  changeGalleryImgIndex(1);
});

imgOption03.addEventListener("click", () => {
  changeGalleryImgIndex(2);
});

imgOption04.addEventListener("click", () => {
  changeGalleryImgIndex(3);
});

visorQuantity.textContent = quantityItemsBuy;

btnMinusPrice.addEventListener("click", () => {
  quantityItemsBuy--;
  quantityItemsBuy = quantityItemsBuy < 1 ? 0 : quantityItemsBuy--;
  visorQuantity.textContent = quantityItemsBuy;
  //showBoxItemsPurchase();
});

btnPlusPrice.addEventListener("click", () => {
  quantityItemsBuy++;
  visorQuantity.textContent = quantityItemsBuy;
  //showBoxItemsPurchase();
});

gallerySelectedImage.addEventListener("click", () => {
  sliderComponent.classList.remove("close");
});

sliderBtnClose.addEventListener("click", () => {
  sliderComponent.classList.add("close");
});

sliderHeadImgSelected.setAttribute(
  "src",
  galleryImages[sliderHeadImgSelectedIndex]
);

sliderNextImg.addEventListener("click", () => {
  sliderHeadImgSelectedIndex++;
  sliderHeadImgSelectedIndex =
    sliderHeadImgSelectedIndex > galleryImages.length - 1
      ? 0
      : sliderHeadImgSelectedIndex++;
  sliderImgAttribute();
  sliderUpdateEffect();
});

sliderPrevImg.addEventListener("click", () => {
  sliderHeadImgSelectedIndex--;
  sliderHeadImgSelectedIndex =
    sliderHeadImgSelectedIndex < 0
      ? galleryImages.length - 1
      : sliderHeadImgSelectedIndex--;
  sliderImgAttribute();
  sliderUpdateEffect();
});

sliderBodyImages.forEach((element) => {
  element.addEventListener("click", function () {
    switchEffectImgOp(sliderBodyImages, this);
  });
});

sliderBodyImg01.addEventListener("click", () => {
  sliderIndexChange(0);
});

sliderBodyImg02.addEventListener("click", () => {
  sliderIndexChange(1);
});

sliderBodyImg03.addEventListener("click", () => {
  sliderIndexChange(2);
});

sliderBodyImg04.addEventListener("click", () => {
  sliderIndexChange(3);
});

cartIcon.addEventListener("click", () => {
  cartItems.classList.toggle("close");
});

btnAddToCart.addEventListener("click", () => {
  showBoxItemsPurchase();
});

sliderMobileImg.setAttribute("src", galleryImages[sliderMobileIndex]);
sliderControlNext.addEventListener("click", () => {
  sliderMobileIndex++;
  sliderMobileIndex =
    sliderMobileIndex > galleryImages.length - 1 ? 0 : sliderMobileIndex++;
  sliderMobileImg.setAttribute("src", galleryImages[sliderMobileIndex]);
});

sliderControlPrev.addEventListener("click", () => {
  sliderMobileIndex--;
  sliderMobileIndex =
    sliderMobileIndex < 0 ? galleryImages.length - 1 : sliderMobileIndex--;
  sliderMobileImg.setAttribute("src", galleryImages[sliderMobileIndex]);
});
