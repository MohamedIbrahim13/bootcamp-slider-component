const tanya = document.querySelectorAll("#tanya");
const john = document.querySelectorAll("#john");
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', (e) => {
    tanya.forEach(node => {
        node.style.display = "none";

    });
    john.forEach(node => {
        node.style.display = "block";
    });
});

prevButton.addEventListener('click', (e) => {
    john.forEach(node => {
        node.style.display = "none";
    });
    tanya.forEach(node => {
        node.style.display = "block";

    });

})
