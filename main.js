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
  


//   function loadComponent(name) {
//     const container = document.getElementById(name);
//     if (container) {
//       fetch(`${name}.html`)
//         .then(res => res.text())
//         .then(data => {
//           container.innerHTML = data;
//         })
//         .catch(err => console.error(`Error loading ${name}.html:`, err));
//     }
//   }
  
//   // ✅ List of component names (matches both ID and file name)
//   const components = ['header', 'hero'];
  
//   // ✅ Loop through and load them
//   components.forEach(loadComponent);

// Component loader with image preloading from a specific folder
// function loadComponent(containerId, fileName, imageFolder = './img/') {
//     const container = document.getElementById(containerId);
    
//     if (container) {
//       fetch(fileName)
//         .then(res => res.text())
//         .then(data => {
//           // Insert the HTML content
//           container.innerHTML = data;
          
//           // Find all image references in the inserted HTML
//           const imgElements = container.querySelectorAll('img');
          
//           // Process each image to ensure proper loading
//           imgElements.forEach(img => {
//             const srcAttr = img.getAttribute('src');
            
//             // If the image source doesn't include a path, add the image folder path
//             if (srcAttr && !srcAttr.includes('/') && !srcAttr.includes('://')) {
//               img.setAttribute('src', `${imageFolder}${srcAttr}`);
//             }
            
//             // Ensure image is loaded properly by adding an event listener
//             img.addEventListener('error', () => {
//               console.error(`Failed to load image: ${img.getAttribute('src')}`);
//               // Optionally, set a fallback image
//               // img.setAttribute('src', `${imageFolder}fallback.jpg`);
//             });
//           });
          
//           // Also handle background images in style attributes
//           const elementsWithStyle = container.querySelectorAll('[style*="background-image"]');
//           elementsWithStyle.forEach(el => {
//             const style = el.getAttribute('style');
//             if (style) {
//               // Find URL pattern in style and replace relative paths
//               const newStyle = style.replace(/url\(['"]?([^\/'"]+)['"]?\)/g, `url('${imageFolder}$1')`);
//               el.setAttribute('style', newStyle);
//             }
//           });
//         })
//         .catch(err => console.error(`Error loading ${fileName}:`, err));
//     }
//   }
  
//   // Initialize components
//   document.addEventListener('DOMContentLoaded', function() {
//     // Specify the image folder for all components
//     const imageFolder = './img/';
    
//     // Load each component
//     loadComponent('header', 'header.html', imageFolder);
//     loadComponent('hero', 'hero.html', imageFolder);
//   });