// Get the page name (file name) from the URL
const pageName = window.location.pathname.split('/').pop();

// Add a class to the body based on the page name
document.body.classList.add(pageName.replace('.html', ''));
