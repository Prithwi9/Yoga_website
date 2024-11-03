// script.js

window.onload = function() {
    window.scrollTo(0, 0); // Scroll to top
};
// document.addEventListener('DOMContentLoaded', () => {
//     updateButtonVisibility();
// });

// function updateButtonVisibility() {
//     const userRegistered = localStorage.getItem('userRegistered');

//     const registerButtons = document.querySelectorAll('.register-btn');
//     const logoutButton = document.getElementById('logout-btn');

//     if (userRegistered) {
//         registerButtons.forEach(btn => {
//             btn.style.display = 'none'; // Hides the register buttons
//         });
//         logoutButton.style.display = 'block'; // Shows the logout button
//     } else {
//         registerButtons.forEach(btn => {
//             btn.style.display = 'block'; // Shows the register buttons
//         });
//         logoutButton.style.display = 'none'; // Hides the logout button
//     }
// }

// function logout() {
//     // Remove the user registration flag from local storage on logout
//     localStorage.removeItem('userRegistered');
//     alert('Thanks for visiting!');
//     updateButtonVisibility();
//     window.location.href = 'login.html'; // Change to your logout page URL
// }

// function handleContactFormSubmit(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Show alert thanking the user
//     alert('Thank you for contacting us!');

//     // Set a flag in local storage to indicate the user has registered
//     localStorage.setItem('userRegistered', 'true');

//     // Hide the register buttons and show the logout button
//     updateButtonVisibility();

//     // Simulate a redirect to the home page
//     setTimeout(() => {
//         window.location.href = 'home.html'; // Change to your home page URL
//     }, 1000); // Redirects after 1 second
// }

// function updateButtonVisibility() {
//     const userRegistered = localStorage.getItem('userRegistered');

//     const registerButtons = document.querySelectorAll('.register-btn');
//     const logoutButton = document.getElementById('logout-btn');

//     if (userRegistered) {
//         registerButtons.forEach(btn => {
//             btn.style.display = 'none'; // Hides the register buttons
//         });
//         logoutButton.style.display = 'block'; // Shows the logout button
//     } else {
//         registerButtons.forEach(btn => {
//             btn.style.display = 'block'; // Shows the register buttons
//         });
//         logoutButton.style.display = 'none'; // Hides the logout button
//     }
// }

// script.js

// Function to update button visibility based on user registration status
document.addEventListener('DOMContentLoaded', () => {
    updateButtonVisibility();
});

function updateButtonVisibility() {
    const userRegistered = localStorage.getItem('userRegistered');

    const registerButtons = document.querySelectorAll('.register-btn');
    const logoutButton = document.getElementById('logout-btn');

    if (userRegistered) {
        // Hide the register buttons
        registerButtons.forEach(btn => {
            btn.style.display = 'none';
        });
        // Show the logout button
        logoutButton.style.display = 'block';
    } else {
        // Show the register buttons
        registerButtons.forEach(btn => {
            btn.style.display = 'block';
        });
        // Hide the logout button
        logoutButton.style.display = 'none';
    }
}

// Logout function to clear registration status and update visibility
function logout() {
    localStorage.removeItem('userRegistered');
    alert('Thanks for visiting!');
    updateButtonVisibility();
    window.location.href = 'home.html'; // Change to your logout page URL
}

// Function to handle form submission with custom thank-you messages
function handleContactFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const formId = event.target.id; // Get the ID of the form that triggered the event

    if (formId === 'contact-page-form') {
        // Show specific message for the contact page form
        alert('Thank you for contacting us!');
    } else if (formId === 'registrations-form') {
        // Show specific message for the home page form with a motivational quote
        alert("Thank you for registering! Remember: 'The journey of a thousand miles begins with a single step.'");
    }

    // Set a flag in local storage to indicate the user has registered
    localStorage.setItem('userRegistered', 'true');

    // Update button visibility
    updateButtonVisibility();

    // Redirect to the home page
    setTimeout(() => {
        window.location.href = 'home.html'; // Change to your home page URL
    }, 1000); // Redirects after 1 second
}

// Adding event listener for the form submission on both forms
const contactForm = document.getElementById('registrations-form') || document.getElementById('contact-page-form');
if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
}


// 2. Carousel functionality in "Yoga Classes" section
// Carousel functionality in "Yoga Classes" section
const carouselItems = document.querySelectorAll('.classes-carousel-item');
let currentIndex = 0;
const intervalDuration = 3000; // 3 seconds

// Function to show the next carousel item
function showNextCarouselItem() {
    // Remove active class from the current item
    carouselItems[currentIndex].classList.remove('active');

    // Update the index to the next item, looping back to the start if necessary
    currentIndex = (currentIndex + 1) % carouselItems.length;

    // Add active class to the new item
    carouselItems[currentIndex].classList.add('active');
}

// Start the carousel with a set interval
setInterval(showNextCarouselItem, intervalDuration);
