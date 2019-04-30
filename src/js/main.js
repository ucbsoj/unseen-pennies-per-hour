import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS


$(document).scroll(function() {

  var scroll = $(document).scrollTop();


  if (scroll > $("#start-scroll").offset().top){
    $(".img-scroller").addClass("fixed");
  } else{
    $(".img-scroller").removeClass("fixed");
  }

  // this code, like the one below
  // switches to the next image and if scrolled up it switches to the previous image
  if (scroll > $('#scroll-img-two').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/2.jpg")
  }else if(scroll < $('#scroll-img-two').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/1.jpg")
  }

  if (scroll > $('#scroll-img-three').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/3.jpg")
  }else if(scroll < $('#scroll-img-three').offset().top && scroll >$('#scroll-img-two').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/2.jpg")
  }

  if (scroll > $('#scroll-img-four').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/4.jpg")
  }else if(scroll < $('#scroll-img-four').offset().top && scroll >$('#scroll-img-three').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/3.jpg")
  }

  if (scroll > $('#scroll-img-five').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/5.jpg")
  }else if(scroll < $('#scroll-img-five').offset().top && scroll >$('#scroll-img-four').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/4.jpg")
  }

  if (scroll > $('#scroll-img-six').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/6.jpg")
  }else if(scroll < $('#scroll-img-six').offset().top && scroll >$('#scroll-img-five').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/5.jpg")
  }

  if (scroll > $('#scroll-img-seven').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/7.jpg")
  }else if(scroll < $('#scroll-img-seven').offset().top && scroll >$('#scroll-img-six').offset().top){
    $(".img-scroller img").attr("src","./assets/archival/6.jpg")
  }

  // when the top of the #end-scroll div reaches the top of the page
  // it removes the image scroll
  if(scroll > $('#end-scroll').offset().top){
    $(".img-scroller").removeClass("fixed");
  }


});

