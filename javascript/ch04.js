onload = function() {
    
    const button = document.querySelector(".package-green-button");

    button.onclick = function(event) {
        const newP = document.createElement("p");
        newP.innerText = "From $399.99";
        newP.classList.add("package-ticket-price");

        // event.target.after(newP);
        // or
        this.after(newP);

        // event.target.remove();
        // or
        this.remove();
    };

}