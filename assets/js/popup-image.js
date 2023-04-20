document.querySelectorAll('.image-center img, .image-container img').forEach(image =>
    {
        
        image.addEventListener('click', () => {
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        });
    });

let a = document.querySelector('.popup-image');
a.addEventListener('click', () => {
    document.querySelector('.popup-image').style.display = 'none';
});