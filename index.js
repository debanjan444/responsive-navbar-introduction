document.querySelector(".first-dropdown").addEventListener("click",function(){
var img_src = document.getElementById("my-img");

console.log(img_src);
if(document.getElementById("my-img").classList.contains('first')){
  console.log("entering");
  document.getElementById("my-img").classList.remove("first");
  document.getElementById("my-img").src = "images/icon-arrow-up.svg";
}
else{
  document.getElementById("my-img").src = "images/icon-arrow-down.svg";
  document.getElementById("my-img").classList.add("first");
}
});
document.querySelector(".second-dropdown").addEventListener("click",function(){

if(document.getElementById("my-img1").classList.contains('second')){
  document.getElementById("my-img1").classList.remove("second");
  document.getElementById("my-img1").src = "images/icon-arrow-up.svg";
}
else{
  document.getElementById("my-img1").src = "images/icon-arrow-down.svg";
    document.getElementById("my-img1").classList.add("second");
}
});

document.getElementById("menu-icon").addEventListener("click",function(){

  if(document.getElementById("menu-icon").classList.contains("hasham")){
     document.getElementById("menu-icon").classList.remove("hasham");
       document.getElementById("menu-icon").src = "images/icon-close-menu.svg";
  }else{
    console.log("entering");
   document.getElementById("menu-icon").src = "images/icon-menu.svg";
     document.getElementById("menu-icon").classList.add("hasham");
  }
});
