import $ from "jquery"; // importing jQuery, you can delete if not needed
import Flickity from "flickity";
import s from 'skrollr';

var flky = new Flickity('.carousel', {});

s.init({
  forceHeight: false
});

// $(document).ready(function(){
//   s.refresh();
// });

$(document).ready(function() {
  $(document).scroll(function() {

    var scroll = $(document).scrollTop();


    if (scroll > $("#start-scroll").offset().top) {
      $(".img-scroller").addClass("fixed");
    } else {
      $(".img-scroller").removeClass("fixed");
    }

    // this code, like the one below
    // switches to the next image and if scrolled up it switches to the previous image
    if (scroll > $('#scroll-img-two').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/2.jpg");
      $('.img-scroller .caption').html('The sewing area at California Institution of Women, 1953. Photo courtesy of CDCR.')
    } else if (scroll < $('#scroll-img-two').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/1.jpg")
      $('.img-scroller .caption').html('San Quentin dining hall, undated. (Photo courtesy of CDCR)')
    }

    if (scroll > $('#scroll-img-three').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/3.jpg")
      $('.img-scroller .caption').html('Kitchen in California Medical Facility, 1981. Photo courtesy of CDCR.')
    } else if (scroll < $('#scroll-img-three').offset().top && scroll > $('#scroll-img-two').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/2.jpg")
      $('.img-scroller .caption').html('The sewing area at California Institution of Women, 1953. (Photo courtesy of CDCR)')
    }

    if (scroll > $('#scroll-img-four').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/4.jpg")
      $('.img-scroller .caption').html('A tobacco factory was moved from San Quentin to California Men’s Colony West in 1958.')
    } else if (scroll < $('#scroll-img-four').offset().top && scroll > $('#scroll-img-three').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/3.jpg")
      $('.img-scroller .caption').html('Kitchen in California Medical Facility, 1981. (Photo courtesy of CDCR)')
    }

    if (scroll > $('#scroll-img-five').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/5.jpg")
      $('.img-scroller .caption').html('Fire camp inmates learn rescuing techniques. Photo estimated to be taken during the 1960s. (Photo courtesy of CDCR)')
    } else if (scroll < $('#scroll-img-five').offset().top && scroll > $('#scroll-img-four').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/4.jpg")
      $('.img-scroller .caption').html('A tobacco factory was moved from San Quentin to California Men’s Colony West in 1958. (Photo courtesy of CDCR)')
    }

    if (scroll > $('#scroll-img-six').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/6.jpg")
      $('.img-scroller .caption').html('Inmates process tobacco at a factory at California Men’s Colony West in 1966. (Photo courtesy of CDCR)')
    } else if (scroll < $('#scroll-img-six').offset().top && scroll > $('#scroll-img-five').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/5.jpg")
      $('.img-scroller .caption').html('Fire camp inmates learn rescuing techniques during the 1960s. (Photo courtesy of CDCR)')
    }

    if (scroll > $('#scroll-img-seven').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/7.jpg")
      $('.img-scroller .caption').html('California Men’s Colony kitchen, 1974.')
    } else if (scroll < $('#scroll-img-seven').offset().top && scroll > $('#scroll-img-six').offset().top) {
      $(".img-scroller img").attr("src", "./assets/archival/6.jpg")
      $('.img-scroller .caption').html('Inmates process tobacco at a factory at California Men’s Colony West in 1966. (Photo courtesy of CDCR)')
    }

    // when the top of the #end-scroll div reaches the top of the page
    // it removes the image scroll
    if (scroll > $('#end-scroll').offset().top) {
      $(".img-scroller").removeClass("fixed");
    }

  });

});


//fade in the main titles
// $("#title-main,#title-deck,#title-byline").css("opacity", 1);

$(document).ready(function() {

  $(".hamburger").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

  $(".menu ul").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

});
