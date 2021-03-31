/*******************************  MENU BARS *****************************************/

$(document).ready(function() {
    $('#navbars').click(function() {
        $(`#menu`).toggle(600);
    });
});


/************************************************************************************************************
 *                            SECTION BOUTON HAUT DE PAGE                                                   *   
 ************************************************************************************************************/
$(document).ready(function() {
    // On crée le bouton haut de page
    $('body').append('<div id="btnscrolltop"><a href="index.html#top" title="Haut de page" ><i class="fas fa-chevron-circle-up fa-2x"></i></a></div>');

    $(window).scroll(function() {
        // déclaration de la variable poScroll ( position du bouton retour en haut de page)
        posScroll = $(document).scrollTop();

        /* Condition ternaire.
         * Lorsque le défilement va en dessous de Xpx le bouton haut de page apparait.
         * dans le cas contraire le bouton devient invisible.
         * cette animation s'effectue avec une durée de Xms
         * ce qui donne une certaine fluidité qaund on click sur le bouton.
         */
        posScroll > 100 ? $('#btnscrolltop').fadeIn(600) : $('#btnscrolltop').fadeOut(600);

        $('#btnscrolltop').click(function() {
            /* Bouton haut de page visible
             * Une fois qu'on effectue un click sur le bouton, l'animation vers le haut de page
             * se fait avec une durée de 1000ms. Ce qui rend le défilement fluide.
             * On fait une animation fluide sur le défilement de la page vers le haut */
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

        $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
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
$(function() {
    $("a[href*='#']:not([href='#'])").click(function() {
        if (location.hostname === this.hostname && this.pathname.replace(/^\//, "")) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");

            if (anchor.length) {
                $('html, body').animate({ scrollTop: anchor.offset().top }, 1500);
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
//         /* Lorsque le défilement va en dessous de 50px le header apparait.
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
//         const elmt = $('.from-left, .from-right');
//         const topImg = $('.from-left, .from-right').offset().top;
//         const scroll = $(window).scrollTop();

//         $(elmt).each(function() {
//             const topimg = $(this).offset().top - 300;

//             if (topImg < scroll) {
//                 // $(this).fadeIn('slow');
//                 $(this).css("transform", "translate(0, 0)");
//                 $(this).css("opacity", "1");
//             }
//         })
//     });
// });

// ON DESACTIVE L'AUTOCOMPLETION DU FORMULAIRE

$(document).ready(function() {
    $('form').attr('autocompconste', 'off');
});

// Apparition du cadre login
$(document).ready(function() {
    $('#user').click(function() {
        $('#cadrelogin').fadeToggle('slow');
    });
});
/************************************************************************************************************
 *                FIN SECTION AFFICHER ET CACHER LE FORMULAIRE DE CONNEXION                                 *   
 ************************************************************************************************************/

$(document).ready(function() {
    $("#aide").click(function() {
        $("#instructions").toggle();
    });
});

// Apparition des tooltip
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

// Carousel
$(document).ready(function() {
    $('.carousel').carousel({
        interval: 4000
    });
});

// CONTROLLE DU FORMULAIRE DE CONNEXION ET D'ENREGISTREMENT


function isEmail(email) {
    // LA FONCTION isEmail SERT UNIQUEMENT A VERIFIER SI UNE  
    // ELECTRONIQUE EST VALIDE. SI ELLE EST BONNE LA FONCTION RETURNE VRAI
    // DANS LE CAS CONTRAIRE ELLE RETURN FAUX.
    const VerifyEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    return VerifyEmail.test(email);
}

function ismypwd(passe) {
    // LA FONCTION ismypwd SERT UNIQUEMENT A VERIFIER  
    // UN MOT DE PASSE. LE MOT DE PASSE DOIT CONTENIR AU MINIMUM 
    // 7 CARACTERES UNE constTRE MAJUSCULE, MINUSCULE, UN CHIFFRE
    // ET UN CARACTERE SPECIAL !, @, #, $, %,^, & ou *
    //  SI ELLE EST BONNE LA FONCTION RETURNE VRAI
    // DANS LE CAS CONTRAIRE ELLE RETURN FAUX.
    Verifymypwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return Verifymypwd.test(passe);
}

function isPhone(phone) {
    // LA FONCTION isPhone SERT UNIQUEMENT A VERIFIER  
    // UN NUMERO DE TELEPHONE. LE NUMERO DE TELEPHONE DOIT ETRE 
    // FORMAT: ## ## ## ## ## OU AVEC L'INDICATIF DU PAYS ## ## ## ## ## ##
    //  SI ELLE EST BONNE LA FONCTION RETURNE VRAI
    // DANS LE CAS CONTRAIRE ELLE RETURN FAUX.
    VerifyPhone = /(?:\d{2}|\+\d{2}[ ]\d)([- ])\d{2}\1\d{2}\1\d{2}\1\d{2}/;
    return VerifyPhone.test(phone);
}

// function isLogin(login) {
//     VerifyLogin = /^[a-zA-Z0-9]{7,15}$/;
//     return VerifyLogin.test(login);
// }

// Déclaration des variables

const btnlogin = document.getElementById('btnlogin');
const yourlogin = document.getElementById('yourlogin');
const loginError = document.getElementById('loginError');
const mypwd = document.getElementById('mypwd ');
const passeError = document.getElementById('passeError');

if (btnlogin) {
    btnlogin.addEventListener('click', Connexion, false);
}

function Connexion(event) {
    if (yourlogin.validity.valueMissing) {
        event.preventDefault();
        loginError.textContent = '* est requis';
        loginError.style.color = 'red';
        yourlogin.style.border = "2px solid rgba(255, 000, 000, 0.5)";
        yourlogin.focus();
        return false;
    } else if (yourlogin.value.length < 2) {
        event.preventDefault();
        loginError.textContent = '* doit comporter au minimum 2 caractères.';
        loginError.style.color = 'red';
        yourlogin.style.border = '2px solid rgba(255, 000, 000, 0.5)';
        yourlogin.focus();
        return false;
    }
    loginError.textContent = '';
    yourlogin.style.border = '';


    if (mypwd.validity.valueMissing) {
        event.preventDefault();
        passeError.textContent = "* est requis";
        passeError.style.color = "red";
        mypwd.style.border = "2px solid rgba(255, 000, 000, 0.5)";
        mypwd.focus();
        return false;
    } else if (passe.value.length < 6) {
        event.preventDefault();
        passeError.textContent = "* doit comporter au minimum 6 caractères";
        passeError.style.color = "red";
        mypwd.style.border = "2px solid rgba(255, 000, 000, 0.5)";
        mypwd.focus();
        return false;
    }
    passeError.textContent = '';
    mypwd.style.border = '';
}


//yourlogin
// loginError

// $(document).ready(function() {
//     $("#yourlogin").keyup(function(e) {
//         if ($("#yourlogin").val == "") {
//             e.preventDefault();
//             $("#yourlogin").next("#loginError").show().text("Veuillez entrer un login valide.");
//             $("#yourlogin").css({ "background-color": "rgba(255, 000 000, 0.1)" });
//             $("#yourlogin").next("#loginError").css({ "color": "red" });

//             return false;
//         } else {
//             $("#yourlogin").next("#loginError").hide().text();
//             $("#yourlogin").show().css({ "background-color": "rgba(000,777,000, 0.1)" });
//         }
//     });
// });


// function VillageGreenSidebar_open() {
//     document.getElementById("sidebar").style.display = "block";
// }
// function VillageGreenSidebar_close() {
//     document.getElementById("sidebar").style.display = "none";
// }unction VillageGreenSidebar_close() {
//     document.getElementById("sidebar").style.display = "none";
// }