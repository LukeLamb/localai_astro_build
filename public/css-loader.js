// CSS Loader for deployment compatibility
document.addEventListener('DOMContentLoaded', function() {
  // Check if critical CSS loaded properly
  const testElement = document.createElement('div');
  testElement.className = 'test-css-loading';
  testElement.style.position = 'absolute';
  testElement.style.left = '-9999px';
  testElement.style.visibility = 'hidden';
  document.body.appendChild(testElement);
  
  // Apply a critical class to test
  testElement.classList.add('btn-primary');
  
  const computedStyle = window.getComputedStyle(testElement);
  const hasBackground = computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' && computedStyle.backgroundColor !== 'transparent';
  
  // Remove test element
  document.body.removeChild(testElement);
  
  // If CSS didn't load properly, try to load the Tailwind CSS file
  if (!hasBackground) {
    console.log('Critical CSS not fully loaded, attempting to load Tailwind CSS...');
    
    // Try to load the generated CSS file
    const cssFiles = ['/_astro/index.BbFdf_VI.css'];
    
    cssFiles.forEach(cssFile => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssFile;
      link.onload = function() {
        console.log('Successfully loaded CSS:', cssFile);
      };
      link.onerror = function() {
        console.log('Failed to load CSS:', cssFile);
      };
      document.head.appendChild(link);
    });
  } else {
    console.log('Critical CSS loaded successfully');
  }
});