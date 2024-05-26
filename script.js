document.addEventListener('DOMContentLoaded', () => {
  // Form Validation for Registration
  const signUpForm = document.querySelector('#registerForm');
  if (signUpForm) {
    signUpForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(signUpForm);
      const values = Object.fromEntries(formData.entries());
      if (values.password !== values.confirm_password) {
        alert('Passwords do not match!');
      } else {
        alert('Registration successful!');
      }
    });
  }

  // Form Validation for Sign In
  const signInForm = document.querySelector('#signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(signInForm);
      const values = Object.fromEntries(formData.entries());
      if (values.email && values.password) {
        // Simulate a successful login
        alert('Sign in successful!');
        localStorage.setItem('isLoggedIn', 'true');
       
      }
    });
  }

  // Check Login Status and Handle Buy Now Button
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const buyButtons = document.querySelectorAll('.buy-button');
  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (isLoggedIn) {
        alert('Order successful!');
      } else {
        alert('Order successful!');
      }
    });
  });
});
