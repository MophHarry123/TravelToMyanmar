// 1. Create the "Observer" (The Security Camera)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check if the element has scrolled into the browser window
        if (entry.isIntersecting) {
            // Flip the switch: Add the CSS class that makes it visible!
            entry.target.classList.add('show-el');
        } else {
            // OPTIONAL: Remove the class if you want it to fade back out 
            // when the user scrolls back up. Delete this line if you only want it to happen once.
            entry.target.classList.remove('show-el');
        }
    });
});

// 2. Tell the camera what elements to watch
const hiddenElements = document.querySelectorAll('.hidden-el');
hiddenElements.forEach((el) => observer.observe(el));