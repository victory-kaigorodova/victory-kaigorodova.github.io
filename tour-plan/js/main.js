var menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", function() {
  console.log("decfvg");
  document.querySelector(".header-menu").classList.toggle("header-menu--visible");
});

$(document).ready(function () {
  var modalWindow = $(".modal");

  var modalButton = $('[data-toggle="modal"]');
  modalButton.on('click', openModal);
  
  var closeButton = $(".modal__close");
  closeButton.on('click', closeModal);


  function openModal() {
    modalWindow.addClass("modal--visible");
  }

  function closeModal() {
    modalWindow.removeClass("modal--visible");
  }
});