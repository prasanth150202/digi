const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

        fetch('test.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('slider-container').innerHTML = data;

                // Initialize your slider or animations after loading content
                // For example, initialize a slider or call a function here
            })
            .catch(error => console.error('Error loading slider:', error));
