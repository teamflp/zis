/*******************************  MENU BARS *****************************************/

$(document).ready(function() {
    $('#navbars').click(function() {
        $('#menu').slideToggle(600);
        $('#menu').addClass('flash');
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
        if (location.hostname == this.hostname && this.pathname.replace(/^\//, "")) {
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

// ON DESACTIVE L'AUTOCOMPLETION DU FORMULAIRE

$(document).ready(function () {
    $('form').attr('autocomplete', 'off');
});


$(document).ready(function() {
    $('#user').click(function() {
        $('#cadrelogin').slideDown(1000);
    });
});
/************************************************************************************************************
 *                FIN SECTION AFFICHER ET CACHER LE FORMULAIRE DE CONNEXION                                 *   
 ************************************************************************************************************/

$(document).ready(function() {
    $("#aide").click(function() {
        $("#instructions").toggle(800);
    });
});


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip()
});
// FIN TOOLTIP

$(document).ready(function() {
    $('.carousel').carousel({
        interval: 4000
    });
});

// FIN CAROUSEL

// ON CONTROLLE LE FORMULAIRE DE CONNEXION ET D'ENREGISTREMENT


function isEmail(email) {
    // LA FONCTION isEmail SERT UNIQUEMENT A VERIFIER SI UNE  
    // ELECTRONIQUE EST VALIDE. SI ELLE EST BONNE LA FONCTION RETURNE VRAI
    // DANS LE CAS CONTRAIRE ELLE RETURN FAUX.
    let VerifyEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    return VerifyEmail.test(email);
}

function isPassword(passe) {
    // LA FONCTION isPassword SERT UNIQUEMENT A VERIFIER  
    // UN MOT DE PASSE. LE MOT DE PASSE DOIT CONTENIR AU MINIMUM 
    // 7 CARACTERES UNE LETTRE MAJUSCULE, MINUSCULE, UN CHIFFRE
    // ET UN CARACTERE SPECIAL !, @, #, $, %,^, & ou *
    //  SI ELLE EST BONNE LA FONCTION RETURNE VRAI
    // DANS LE CAS CONTRAIRE ELLE RETURN FAUX.
    VerifyPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return VerifyPassword.test(passe);
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

function isLogin(login) {
    VerifyLogin = /^[a-zA-Z0-9]{7,15}$/;
    return VerifyLogin.test(login);
}

// LA FONCTION VerifyLogin VERIFIE SI TOUS LES CHAMPS SONT VALIDES
const VerifyLogin = () => {
let email = document.getElementById('email');
let passe = document.getElementByid('passe');

// On déclare les variables pour afficher les erreurs
let loginError = document.getElementById('loginError');
let passeError = document.getElementById('passeError');

    if (yourlogin.value === "") {
        event.preventDefault();
        loginError.textContent = "* Le champ login est requis";
        loginError.style.color = "red";
        yourlogin.style.backgroundColor = "rgba(255, 000, 000, 0.1)";
        yourlogin.focus();
        return false;
    } else if (isLogin(yourlogin)) {
        event.preventDefault();
        loginError.textContent = "* Le login saisi est invalide. 1 Lettre miniscule et majuscule, 7 caractères mini.";
        loginError.style.color = "red";
        yourlogin.style.backgroundColor = "rgba(255, 000, 000, 0.1)";
        yourlogin.focus();
        return false;
    }
    loginError.textContent = "";
    loginError.style.color = "";
    yourlogin.style.backgroundColor = "rgba(000, 777, 000,0.1)";

    if (passe.validity.valueMissing) {
        event.preventDefault();
        passeError.textContent.fade("slow") = "* Le champ mot de passe est requis";
        passeError.style.color = "red";
        passe.style.backgroundColor = "rgba(255, 000, 000, 0.1)";
        passe.focus();
        return false;
    } else if (passe.value.length < 7) {
        event.preventDefault();
        passeError.textContent = "* Le mot de passe saisi est incorrect";
        passeError.style.color = "red";
        passe.style.backgroundColor = "rgba(255, 000, 000, 0.1)";
        passe.focus();
        return false;
    }
    passeError.textContent = "";
    passeError.style.color = "";
    passe.style.backgroundColor = "rgba(000, 777, 000,0.1)";
}


// yourlogin
// loginError

$(document).ready(function() {
    $("#yourlogin").keyup(function(e) {
        if ($("#yourlogin").val == "") {
            e.preventDefault();
            $("#yourlogin").next("#loginError").show().text("Veuillez entrer un login valide.");
            $("#yourlogin").css({ "background-color": "rgba(255, 000 000, 0.1)" });
            $("#yourlogin").next("#loginError").css({ "color": "red" });

            return false;
        } else {
            $("#yourlogin").next("#loginError").hide().text();
            $("#yourlogin").show().css({ "background-color": "rgba(000,777,000, 0.1)" });
        }
    });
});


// function VillageGreenSidebar_open() {
//     document.getElementById("sidebar").style.display = "block";
// }
// function VillageGreenSidebar_close() {
//     document.getElementById("sidebar").style.display = "none";
// }