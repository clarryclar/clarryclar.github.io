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
  
  function myFunction(x) {
    x.classList.toggle("change");
  }

  
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("burger").style.display = "none"; // Hide menu icon

  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("burger").style.display = "block"; // Show menu icon again

  }
 


  loadComponent('header', 'header.html');
  loadComponent('hero', 'hero.html');
