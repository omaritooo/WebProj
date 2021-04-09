var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('THE FUTURE IS <span class="text-pink-900 font-semibold">HERE</span>')
  .pauseFor(1000)
  .deleteChars(4)
  .pauseFor(1000)
  .typeString('<span class="text-pink-900 font-semibold">NOW</span>')
  .deleteChars(3)
  .pauseFor(1000)
  .typeString('<span class="text-pink-900 font-semibold">READY</span>')
  .pauseFor(1000)
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



