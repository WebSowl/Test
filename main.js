// Получите модальное окно
var modal = document.getElementById("myModal");

// Получите кнопку, которая открывает модальное окно
var img = document.querySelector("img");

// Получите элемент <span> для закрытия модального окна
var span = document.getElementsByClassName("close")[0];

// Откройте модальное окно при нажатии на изображение
img.onclick = function () {
  modal.style.display = "block";
};

// Закройте модальное окно при нажатии на спан (x)
span.onclick = function () {
  modal.style.display = "none";
};

// Закройте модальное окно, если щелкнуть вне его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
	
	function openModal() {
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.body.style.overflow = 'auto';
}
	
};