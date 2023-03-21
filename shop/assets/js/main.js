var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: 'hover', //false
  keyboard:true,
  touch: true
})

// 
// var id;
// $("#modalForm").on("show.bs.modal", function (event) {
//   var button = $(event.relatedTarget); //Button that triggered the modal
//   const produs = button.data("name"); //need to find the button and get product
//   const pret = button.data("price"); //need to find the button and get price
//   const description = button.data("description");
//   $(".modal-header #titleModalLabel").html(produs);
//   $(".modal-body #price").html(pret);
//   $(".modal-body #description").html(description);
//   id = button.attr("id");
//   // var datainfo = document.getElementById(id);
// //   alert(JSON.stringify(button));
//   // alert(JSON.stringify(datainfo));
// });
// $("#modalForm").on("hidden.bs.modal", function (event) {
//   // alert('Modalul s-a inchis');
//   document.getElementById(id).classList.remove("btn-primary");
//   document.getElementById(id).classList.add("btn-info");
// });

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  includeHTML()
var id;
$("#modalForm").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); //Button that triggered the modal
  const produs = button.data("name"); //need to find the button and get product
  const pret = button.data("price"); //need to find the button and get price
  const description = button.data("description");
  $(".modal-header #titleModalLabel").html(produs);
  $(".modal-body #price").html(pret);
  $(".modal-body #description").html(description);
  id = button.attr("id");
  // var datainfo = document.getElementById(id);
//   alert(JSON.stringify(button));
  // alert(JSON.stringify(datainfo));
});
$("#modalForm").on("hidden.bs.modal", function (event) {
  // alert('Modalul s-a inchis');
  document.getElementById(id).classList.remove("btn-primary");
  document.getElementById(id).classList.add("btn-info");
});
  
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 240) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

// document.addEventListener("DOMContentLoaded", function(){
//     var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
//         target: "#myNavbar"
//     })
// });

$(document).ready(function () {
    $("body").scrollspy({
        target: "#myNavbar"
    })

});

(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()