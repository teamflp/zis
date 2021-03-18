"use strict";

/*******************************  MENU BARS *****************************************/
$(document).ready(function () {
  $('#navbars').click(function () {
    $('#menu').toggle(600);
    $('#menu').addClass('flash');
  });
});
/************************************************************************************************************
 *                            SECTION BOUTON HAUT DE PAGE                                                   *   
 ************************************************************************************************************/

$(document).ready(function () {
  // On crée le bouton haut de page
  $('body').append('<div id="btnscrolltop"><a href="index.html#top" title="Haut de page" ><i class="fas fa-chevron-circle-up fa-2x"></i></a></div>');
  $(window).scroll(function () {
    // déclaration de la variable poScroll ( position du bouton retour en haut de page)
    posScroll = $(document).scrollTop();
    /* Condition ternaire.
     * Lorsque le défilement va en dessous de 250px le bouton haut de page apparait.
     * dans le cas contraire le bouton devient invisible.
     * cette animation s'effectue avec une durée de 600ms
     * ce qui donne une certaine fluidité qaund on click sur le bouton.
     */

    posScroll > 100 ? $('#btnscrolltop').fadeIn(600) : $('#btnscrolltop').fadeOut(600);
    $('#btnscrolltop').click(function () {
      /* Bouton haut de page visible
       * Une fois qu'on effectue un click sur le bouton, l'animation vers le haut de page
       * se fait avec une durée de 1000ms. Ce qui rend le défilement fluide.
       * On fait une animation fluide sur le défilement de la page vers le haut */
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
    $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
      /* on arrete l'animation quand on click sur la souris, sur le roller de la souris,
       * sur le clavier ou sur n'importe quel zone de l'écran. */
      $('html, body').stop();
    });
  });
});
/************************************************************************************************************
 *                            FIN SECTION BOUTON HAUT DE PAGE                                               *   
 ************************************************************************************************************/
// défilement fluide sur les liens HTML vers les ancres avec une durée de 1500 ms

$(function () {
  $("a[href*='#']:not([href='#'])").click(function () {
    if (location.hostname == this.hostname && this.pathname.replace(/^\//, "")) {
      var anchor = $(this.hash);
      anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");

      if (anchor.length) {
        $('html, body').animate({
          scrollTop: anchor.offset().top
        }, 1500);
      }
    }
  });
});
/************************************************************************************************************
 *                                          FIN SECTION ANCRE                                               *   
 ************************************************************************************************************/
// $(document).ready(function() {
//     $(body).append($(''));
//     $(window).scroll(function() {
//         // déclaration de la variable poScroll)
//         header = $(document).scrollTop();
//         /* Lorsque le défilement va en dessous de 50px le header apparaait.
//          * dans le cas contraire il devient invisible.
//          */
//         // header > 50 ? $('#header').fadeIn(1000) : $('#header').fadeOut(1000);
//         if (header > 50) {
//             $('#header').fadeOut(600);
//             $('#header').css({
//                 "display": "block"
//             });
//         } else {
//             $('#header').fadeIn(600);
//             $('#header').css({
//                 "top": "0",
//                 "left": "0",
//                 "rigth": "0",
//                 "width": "100%",
//                 "display": "block",
//                 "position": "fixed",
//                 "border-top-left-radius": "none",
//                 "border-top-right-radius": "none",
//                 "background-color": "#000000"
//             });
//         }
//     });
// });
// $(document).ready(function() {
//     $(window).on('scroll', function() {
//         let elmt = $('.from-left, .from-right');
//         let topImg = $('.from-left, .from-right').offset().top;
//         let scroll = $(window).scrollTop();
//         $(elmt).each(function() {
//             let topimg = $(this).offset().top - 300;
//             if (topImg < scroll) {
//                 // $(this).fadeIn('slow');
//                 $(this).css("transform", "translate(0, 0)");
//                 $(this).css("opacity", "1");
//             }
//         })
//     });
// });

$(document).ready(function () {
  $('#user').click(function () {
    $('#cadrelogin').fadeToggle('slow');
  });
});
/************************************************************************************************************
 *                FIN SECTION AFFICHER ET CACHER LE FORMULAIRE DE CONNEXION                                 *   
 ************************************************************************************************************/

$(document).ready(function () {
  $("#aide").click(function () {
    $("#instructions").toggle(800);
  });
});
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
}); // FIN TOOLTIP

$(document).ready(function () {
  $('.carousel').carousel({
    interval: 4000
  });
}); // FIN CAROUSEL