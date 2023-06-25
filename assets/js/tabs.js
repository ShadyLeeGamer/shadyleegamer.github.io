const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

let currentTab;
let currentTabContents = [];
tabs.forEach(tab =>
    {
        tab.addEventListener('click', () => {
            const targets = document.querySelectorAll(tab.dataset.tabTarget);
            console.log(targets.length);
            // let count = targets.length > 0 ? targets.length : 1;
            for (let i = 0; i < targets.length; i++)
            {
                let target =  targets[i];

                if(currentTabContents[i] != null)
                {
                    currentTabContents[i].classList.remove('active');
                    
                    if (currentTab != null)
                        currentTab.firstElementChild.classList.add('spinner');
                }
    
                if(target != currentTabContents[i])
                {
                    currentTabContents[i] = target;
                    currentTabContents[i].classList.add('active');
    
                    currentTab = tab;
                    currentTab.firstElementChild.classList.remove('spinner');
                }
                else
                {
                    currentTabContents[i] = null;
                    currentTab = null;
                }
            }
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
    })


    // let currentTab;
    // let currentTabContent;
    // tabs.forEach(tab =>
    //     {
    //         tab.addEventListener('click', () => {
    //             const target = document.querySelector(tab.dataset.tabTarget);
    
    //             if(currentTabContent != null)
    //             {
    //                 currentTabContent.classList.remove('active');
    //                 currentTab.firstElementChild.classList.add('spinner');
    //             }
    
    //             if(target != currentTabContent)
    //             {
    //                 currentTabContent = target;
    //                 currentTabContent.classList.add('active');
    
    //                 currentTab = tab;
    //                 currentTabContent.firstElementChild.classList.remove('spinner');
    //             }
    //             else
    //             {
    //                 currentTabContent = null;
    //                 currentTab = null;
    //             }
    //         });
    
    //         tab.addEventListener("mouseenter", () => {
    //             tab.firstElementChild.classList.remove('spinner');
    //         });
    
    //         tab.addEventListener("mouseleave", () => {
    //             if (tab != currentTab)
    //             {
    //                 tab.firstElementChild.classList.add('spinner');
    //             }
    //         });
    //     })
    