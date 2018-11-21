// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

//--- TAB ---//
$(document).ready(function(){
    $(".tab_content").hide(); //Hide all content
    $(".tab1").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content
    //On Click Event
    $(".tabs div").click(function() {
        $(".tabs div").removeClass("active"); //Remove any "active" class
        $(".tab_content").hide();
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".active .tab_content").show(); //Show tab content of active tab
    });
});


//--- DROPDOWN ---//
$(document).ready(function() {

  $("#tab-1").addClass("current")
  $(".tab-1").show()

  $("#dropdown").on("click", function(){
    $("#dropdown-div").show()
  })


//--- MODAL ---// 
  $( document ).on( "click", function( event ){
  	if ( !$( event.target ).closest( "#dropdown" ).length ){
  	  $( "#dropdown-div" ).hide(200);
  	}
  });

  $("#login").on("click", function(){
    $("#modal").show()
    $("#login-tab").addClass("current")
    $("#signup-tab").removeClass("current")
    $(".login-div").show()
    $(".signup-div").hide()
    $(".login-div").load("/users/sign_in .container-fluid")
  })
  $("#signup").on("click", function(){
    $("#modal").show()
    $("#signup-tab").addClass("current")
    $("#login-tab").removeClass("current")
    $(".login-div").hide()
    $(".signup-div").show()
    $(".signup-div").load("/users/sign_up .container-fluid")
  })

  $("#signup-tab").on("click", function(){
    $("#signup-tab").addClass("current")
    $("#login-tab").removeClass("current")
    $(".login-div").hide()
    $(".signup-div").show()
    $(".signup-div").load("/users/sign_up .container-fluid")
  })
  $("#login-tab").on("click", function(){
    $("#login-tab").addClass("current")
    $("#signup-tab").removeClass("current")
    $(".login-div").show()
    $(".signup-div").hide()
    $(".login-div").load("/users/sign_in .container-fluid")
  })

  $(document).on("click", function(event){
    if (event.target === $("#modal")[0]) {
      $("#modal").hide()
    }
  })
})


$(document).ready(function(){
    
  var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
      $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
      indexImg = $img.length - 1, // on définit l'index du dernier élément
      i = 0, // on initialise un compteur
      $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
  
  $img.css('display', 'none'); // on cache les images
  $currentImg.css('display', 'block'); // on affiche seulement l'image courante
  
  $carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');
  
  $('.next').click(function(){ // image suivante
  
      i++; // on incrémente le compteur
  
      if( i <= indexImg ){
          $img.css('display', 'none'); // on cache les images
          $currentImg = $img.eq(i); // on définit la nouvelle image
          $currentImg.css('display', 'block'); // puis on l'affiche
      }
      else{
          i = indexImg;
      }
  
  });
  
  $('.prev').click(function(){ // image précédente
  
      i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
  
      if( i >= 0 ){
          $img.css('display', 'none');
          $currentImg = $img.eq(i);
          $currentImg.css('display', 'block');
      }
      else{
          i = 0;
      }
  
  });
  
  function slideImg(){
      setTimeout(function(){ // on utilise une fonction anonyme
              
          if(i < indexImg){ // si le compteur est inférieur au dernier index
        i++; // on l'incrémente
    }
    else{ // sinon, on le remet à 0 (première image)
        i = 0;
    }
  
    $img.css('display', 'none');
  
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');
  
    slideImg(); // on oublie pas de relancer la fonction à la fin
  
      }, 5000); // on définit l'intervalle à 7000 millisecondes (7s)
  }
  
  slideImg(); // enfin, on lance la fonction une première fois
  
  });
  