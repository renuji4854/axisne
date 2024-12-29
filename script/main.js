document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
  
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        // Reset all buttons and contents
        buttons.forEach((btn) => {
          btn.classList.remove("active");
          btn.style.backgroundColor = "white"; // Default background color
          btn.style.color = "black"; // Default text color
        });
        contents.forEach((content) => content.classList.add("hidden"));
  
        // Activate clicked button and show corresponding content
        button.classList.add("active");
        button.style.backgroundColor = "#861F41"; // Active background color
        button.style.color = "white"; // Active text color
        contents[index].classList.remove("hidden");
      });
    });
  });
  