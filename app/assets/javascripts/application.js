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
