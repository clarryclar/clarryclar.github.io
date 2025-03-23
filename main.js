function loadComponent(containerId, fileName) {
    const container = document.getElementById(containerId);
    if (container) {
      fetch(fileName)
        .then(res => res.text())
        .then(data => {
          container.innerHTML = data;
        })
        .catch(err => console.error(`Error loading ${fileName}:`, err));
    }
  }

  loadComponent('header', 'header.html');
  loadComponent('hero', 'hero.html');
