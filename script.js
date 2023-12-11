function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  document.body.style.overflow = "visible";
}


document.querySelector("body").addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
var theme_switch = true;

function theme() {
  const root = document.documentElement;
  if (theme_switch) {
      root.style.setProperty('--secondary-color', '#d8d4c2');
      root.style.setProperty('--primary-color', '#0d0d0d');
      theme_switch = false;
  } else {
      root.style.setProperty('--primary-color', '#ececec');
      root.style.setProperty('--secondary-color', '#0d0d0d');
      theme_switch = true;
  }
}

window.addEventListener("load", function () {
  // Menghapus elemen loading setelah jeda waktu tertentu
  var loaderimg = document.querySelector("#intro");
  var loader = document.querySelector(".intro");

  
  loader.addEventListener("animationend", function () {
      setTimeout(function(){
          loader.style.opacity = "0";
          setTimeout(() => {
            loader.style.display = "none";
          }, 1000);
      }, 8000)
  });
});
