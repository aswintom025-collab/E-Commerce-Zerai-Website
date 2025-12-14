document.addEventListener('DOMContentLoaded', () => {
    console.log('E-Commerce App Initialized');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search Interaction
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-bar button');

    searchBtn.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });

    // Wishlist Buttons
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    const wishlistBadge = document.querySelector('.nav-item .fa-heart + .badge');
    let wishlistCount = 0;

    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent card click
            this.querySelector('i').classList.toggle('fas'); // Solid heart
            this.querySelector('i').classList.toggle('far'); // Outline heart
            this.style.color = this.querySelector('i').classList.contains('fas') ? 'var(--secondary)' : 'var(--text-muted)';

            if (this.querySelector('i').classList.contains('fas')) {
                wishlistCount++;
            } else {
                wishlistCount--;
            }
            wishlistBadge.textContent = wishlistCount;
        });
    });

    // Cart Interaction
    const cartBtns = document.querySelectorAll('.product-details .btn-primary, .quick-add .btn-primary');
    const cartBadge = document.querySelector('.fa-shopping-bag + .badge');

    cartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let count = parseInt(cartBadge.innerText);
            cartBadge.innerText = count + 1;

            const originalText = btn.innerText;
            btn.innerText = "Added!";
            btn.style.background = "var(--secondary)";

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "";
            }, 1500);
        });
    });

    // Login Page Logic
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignUp = document.getElementById('showSignUp');
    const showLogin = document.getElementById('showLogin');
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');

    if (showSignUp && showLogin) {
        showSignUp.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.add('hidden');
            signupForm.classList.remove('hidden');
        });

        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    }

    // Handle Sign In Submit
    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }

    // Handle Register Submit
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }

    // Fallback: Attach click listeners to buttons directly in case form submit is intercepted differently
    const loginBtn = document.querySelector('#signInForm button');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            // If the button triggers form submit, the above handler works. 
            // If not, this ensures redirect happens.
            // We check for valid form validity if needed, but we removed required attrs.
            setTimeout(() => {
                window.location.href = "index.html";
            }, 100);
        });
    }

    const regBtn = document.querySelector('#registerForm button');
    if (regBtn) {
        regBtn.addEventListener('click', (e) => {
            setTimeout(() => {
                window.location.href = "index.html";
            }, 100);
        });
    }

});

