// Handle Newsletter Form submission
document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletter-form");
  
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      
      const submitButton = newsletterForm.querySelector('button[type="submit"]');
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      // Show loading state
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = "Subscribing...";
      }
      
      const formData = new FormData(newsletterForm);
      
      // Convert FormData to JSON
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: json,
        });
        
        const data = await response.json();
        
        if (data.success) {
          // Show success message
          if (submitButton) {
            submitButton.innerHTML = "✓ Subscribed!";
            submitButton.classList.remove("bg-white", "text-primary-600", "hover:bg-gray-100");
            submitButton.classList.add("bg-green-500", "text-white");
          }
          
          // Clear email input
          if (emailInput) {
            emailInput.value = "";
          }
          
          // Reset button after 4 seconds
          setTimeout(() => {
            if (submitButton) {
              submitButton.disabled = false;
              submitButton.innerHTML = "Subscribe";
              submitButton.classList.remove("bg-green-500", "text-white");
              submitButton.classList.add("bg-white", "text-primary-600", "hover:bg-gray-100");
            }
          }, 4000);
        } else {
          throw new Error("Subscription failed");
        }
      } catch (error) {
        console.error("Newsletter error:", error);
        if (submitButton) {
          submitButton.innerHTML = "Error - Try Again";
          submitButton.disabled = false;
          setTimeout(() => {
            submitButton.innerHTML = "Subscribe";
          }, 3000);
        }
      }
    });
  }
});
