$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 100) {
            $(".naver").css('background-color', '#4BA9F4');
        } else {
            $(".naver").css('background-color', 'transparent');
        }
    });
});



const likeButton = document.querySelector("#likeButton");
    const addToCartButton = document.querySelector("#addToCartButton");
    likeButton.addEventListener("click", ()=>{
        likeButton.classList.toggle("text-red-400")
    })
    addToCartButton.addEventListener("click", ()=>{
      const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Added to cart'
})
    })
