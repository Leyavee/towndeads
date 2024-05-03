document.addEventListener("DOMContentLoaded", function() {
    // Модальное окно
    var images = document.querySelectorAll(".image-gallery img");
    var modal = document.querySelector(".modal");
    var modalContent = document.querySelector(".modal-content");
    var closeButton = document.querySelector(".close");

    images.forEach(function(image) {
        image.addEventListener("click", function(event) {
            modalContent.src = this.src;
            modal.classList.add("open");
            document.body.style.overflow = "hidden"; // Запретить прокрутку фона при открытом модальном окне
        });
    });

    function closeModal() {
        modal.classList.remove("open");
        document.body.style.overflow = ""; // Разрешить прокрутку фона после закрытия модального окна
    }

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Плавная прокрутка
    var scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = scrollLink.getAttribute("href");
            var targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Прокрутка к верху целевого элемента
        });
    });
});
