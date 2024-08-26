document.addEventListener("DOMContentLoaded", function () {
    var elementsToObserve = document.querySelectorAll(".first-board, .second-board");
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Ajuste o threshold conforme necessário (0.5 significa 50% do elemento visível)
    });
    elementsToObserve.forEach(function (el) {
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var arrow = document.querySelectorAll(".first-arrow");
    var arrow2 = document.querySelectorAll(".second-arrow");
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('showBottom');
                observer.unobserve(entry.target); // Para observar o elemento apenas uma vez
            }
        });
    });
    var observer2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('showBottom');
                observer.unobserve(entry.target); // Para observar o elemento apenas uma vez
            }
        });
    });
    arrow.forEach(function (arrow) {
        observer.observe(arrow);
    });
    arrow2.forEach(function (arrow) {
        observer2.observe(arrow);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var zoomElements = document.querySelectorAll('.zoom-text');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !entry.target.classList.contains('zoomed-in')) {
                entry.target.classList.add('zoomed-in');
                observer.unobserve(entry.target); // Para de observar após o zoom
            }
        });
    }, {
        threshold: 1.0 // 100% do elemento deve estar visível para a animação ocorrer
    });
    zoomElements.forEach(function (el) {
        observer.observe(el);
    });
});
