class ElementHTML {
    constructor(category, date, techList) {
        this.category = category;
        this.date = date;
        this.techList = techList;
    }
}

let elementsHTML = new Map();

elementsHTML.set('okainos',
new ElementHTML(
    `Multiplayer Card Game`,
    `Aug 2021 — Oct 2021`,
    `<li>Rest API</li>
    <li>Git</li>
    <li>Firebase</li>
    <li>JSON</li>
    <li>JavaScript</li>
    <li>HTML</li>
    <li>C#</li>
    <li>Unity</li>
    <li>Trello</li>`));

elementsHTML.set('edge-runner',
new ElementHTML(
    `High-Speed Anime Platformer`,
    `June 2020 — Present`,
    `<li>C#</li>
    <li>Unity</li>
    <li>Git</li>
    <li>Sprite Shape API</li>
    <li>Notion</li>
    <li>Cinemachine</li>`));

elementsHTML.set('game-jams',
new ElementHTML(
    ``,
    `Sept 2020 — May 2022`,
    `<li>C#</li>
    <li>Unity</li>
    <li>Unity Teams</li>
    <li>GitHub</li>`));

elementsHTML.set('survival-2020',
new ElementHTML(
    `Endless Survival`,
    `Apr 2020 — Aug 2021`,
    `<li>Git</li>
    <li>C#</li>
    <li>Unity</li>
    <li>Shadergraph</li>
    <li>Photoshop</li>`));

elementsHTML.set('tap-fever',
new ElementHTML(
    `Arcade`,
    `Sept 2016 — Jul 2017`,
    `<li>C#</li>
    <li>Unity</li>
    <li>Gimp</li>`));

const categories = document.querySelectorAll('.project-category');
categories.forEach((category) => {
    category.innerHTML = elementsHTML.get(category.id).category;
});

const dates = document.querySelectorAll('.project-date');
dates.forEach((date) => {
    date.innerHTML = elementsHTML.get(date.id).date;
});

const techLists = document.querySelectorAll('ul.project-tech-list');

techLists.forEach((list) => {
    // Initialise
    list.innerHTML = elementsHTML.get(list.id).techList;

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