let sideTitle = document.querySelector(".side-title");
const PROJECTS_HEADER_OFFSET_EM = -12.5;
const PROJECT_OFFSET_EM = 8;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    let offset = 0;
    switch(sideTitle.id){
        case "projects-header":
            offset = PROJECTS_HEADER_OFFSET_EM;
            break;
        case "project-name":
            offset = PROJECT_OFFSET_EM;
            break;
    }
    sideTitle.style.top = 'calc(' + offset + "em + " + (value * .7) + 'px)';
    // sideTitle.style.top = value * .5 + 'px';
});