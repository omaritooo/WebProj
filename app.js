var app = document.getElementById('app');
var app2 = document.getElementById('app2');


var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('THE FUTURE IS <span class="text-pink-900 font-semibold">HERE</span>')

typewriter
  
  .deleteChars(4)
  .pauseFor(1000)
  .typeString('<span class="text-pink-900 font-semibold">NOW</span>')
  .pauseFor(1000)
  .deleteChars(3)
  .pauseFor(1000)
  .typeString('<span class="text-pink-900 font-semibold">READY</span>')
  .pauseFor(2000)
  .start();


  var typewriter = new Typewriter(app2, {
    loop: true,
    delay: 75,
  });
  
  typewriter
    .pauseFor(2500)
    .typeString('THE FUTURE IS <span class="text-pink-900 font-semibold">HERE</span>')
  
  typewriter
    
    .deleteChars(4)
    .pauseFor(1000)
    .typeString('<span class="text-pink-900 font-semibold">NOW</span>')
    .pauseFor(1000)
    .deleteChars(3)
    .pauseFor(1000)
    .typeString('<span class="text-pink-900 font-semibold">READY</span>')
    .pauseFor(2000)
    .start();


$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 100) {
            $(".naver").css('background-color', '#EF528F');
        } else {
            $(".naver").css('background-color', 'transparent');
        }
    });
});





function resizer()
{
  document.getElementById('barer').style.width = "90%";

}


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



