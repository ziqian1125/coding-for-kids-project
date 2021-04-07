// Get the container element
var sidebar = document.getElementById("sidebar");

// Get all buttons with class="btn" inside the container
var items = sidebar.getElementsByClassName("list-group-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function () {
        var current = sidebar.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}