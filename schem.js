document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('#theme-switcher');
    const doc = document.documentElement; // <html> element
  
    if (switcher) { // Check if the element exists
      switcher.addEventListener('change', e => {
        setTheme(e.target.value);
      });
    }
  
    const setTheme = theme => {
      doc.setAttribute('color-scheme', theme);
    };
  });
  