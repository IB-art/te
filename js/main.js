$(function(){

  $('.product-one__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });


  $(function(){
    $('.menu__btn').on('click', function(){
      $('.menu__item').toggleClass('menu__item--active');
    });
   });



  const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

  smothScrollElems.forEach(link => {
    link.addEventListener('click', (event) => {
    
     event.preventDefault()
     const id = link.getAttribute('href').substring(1)

     document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
     });
  
    })
  })

  

});