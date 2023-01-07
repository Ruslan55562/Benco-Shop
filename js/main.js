$(function () {

  $('.product__slider').slick(
    {
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 1800,
    }
  );
});

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
  }
}, 1000);


$('.star-btn').hover(function () {
  var productItem = $(this).closest('[class^="product__slider-item"]');
  console.log(productItem);
  var btn = document.querySelectorAll(`.slick-active .${productItem[0].className} .star-btn`);
   Array.from(btn).forEach((e,index)=>{
   e.addEventListener("click",()=>{
    for(let j =0;j<btn.length;j++)
    {
      btn[j].style.color = "black";
    }
    for(let i = 0; i<=index;i++){
      btn[i].style.color ="#ffc83d";
      btn[i].setAttribute('class','star-btn');
    }
})}
)});
