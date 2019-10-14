document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("NAME").onclick = function() {
      this.style.color = 'orange'
    }
  })

$( document ).ready(function() {
  $( "#fade" ).click(function() {
    $( "#fade" ).fadeOut( "slow", function() {
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button").onclick = function() {
    $( "#main" ).fadeOut( "slow", function() {
    });
  }
})

$( document ).ready(function() {
  $( "#IMG" ).click(function() {
    $( "#IMG" ).fadeOut( "slow", function() {
    });
  });
});