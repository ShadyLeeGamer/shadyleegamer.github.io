const projectTechLists = document.querySelectorAll('ul.project-tech-list');

projectTechLists.forEach((list) => {
const elements = list.querySelectorAll('li');

elements.forEach((element, index) => {
    let isAnimating = false;

    element.addEventListener('mouseenter', () => {
        if(!isAnimating)
        {
            if(!element.classList.contains('spin') && !isAnimating)
                {
                    element.classList.remove('spin-reverse');
                    element.classList.add('spin');
                    isAnimating = true;
                }

            if (element.classList.contains('spin') && !isAnimating)
            {
                element.classList.remove('spin');
                element.classList.add('spin-reverse');
                isAnimating = true;
            }
        }
    });

    element.addEventListener('animationend', () => {
        isAnimating = false;
    });
});
});