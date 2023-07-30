const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

let currentTab;
let currentTabContents = [];
tabs.forEach(tab =>
    {
        tab.addEventListener('click', () => {
            OnTabClick(tab);
        });

        tab.addEventListener("mouseenter", () => {
            tab.firstElementChild.classList.remove('spinner');
        });
        tab.addEventListener("mouseleave", () => {
            if (tab != currentTab)
            {
                tab.firstElementChild.classList.add('spinner');
            }
        });
    });

function OnTabClick(tab)
{
    for (let i = 0; i < currentTabContents.length; i++)
    {
        currentTabContents[i].classList.remove('active');
    }

    const tabContents = document.querySelectorAll(tab.dataset.tabTarget);
    if(currentTab != tab)
    {
        if (currentTab != null)
        {
            currentTab.firstElementChild.classList.add('spinner');
        }
        currentTab = tab;
        currentTab.firstElementChild.classList.remove('spinner');

        currentTabContents = tabContents;
    }
    else
    {
        currentTabContents = [];
        currentTab = null;
    }
    
    for (let i = 0; i < currentTabContents.length; i++)
    {
        currentTabContents[i].classList.add('active');
    }
}