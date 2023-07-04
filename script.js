const btnmenu = document.querySelector('#btnmenu');
const menu = document.querySelector('#menu');

btnmenu.addEventListener('click', () => {
    console.log('me diste click')
    menu.classList.toggle('hidden')
});

$(Window).scroll(function(){
    if ($("#navbar").offset().top > 65) {
        $("#navbar").addClass("bg-verdeazul");
    } else {
      $("#navbar").removeClass("bg-verdeazul");
    }
  });