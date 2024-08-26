document.addEventListener("DOMContentLoaded", function () {
  const elementsToObserve = document.querySelectorAll(".first-board, .second-board");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.1 // Ajuste o threshold conforme necessário (0.5 significa 50% do elemento visível)
  });

  elementsToObserve.forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelectorAll(".first-arrow");
  const arrow2 = document.querySelectorAll(".second-arrow");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showBottom');
        observer.unobserve(entry.target); // Para observar o elemento apenas uma vez
      }
    });
  });

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showBottom');
        observer.unobserve(entry.target); // Para observar o elemento apenas uma vez
      }
    });
  });  

  arrow.forEach(arrow => {
    observer.observe(arrow);
  });

  arrow2.forEach(arrow => {
    observer2.observe(arrow);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const zoomElements = document.querySelectorAll('.zoom-text');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('zoomed-in')) {
        entry.target.classList.add('zoomed-in');
        observer.unobserve(entry.target); // Para de observar após o zoom
      }
    });
  }, {
    threshold: 1.0 // 100% do elemento deve estar visível para a animação ocorrer
  });

  zoomElements.forEach(el => {
    observer.observe(el);
  });
});
