const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

let currentTab;
let currentTabContent;
tabs.forEach(tab =>
    {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);

            if(currentTabContent != null)
            {
                currentTabContent.classList.remove('active');
                // currentTab.classList.add('spin');
                currentTab.firstElementChild.classList.add('spinner');
            }

            if(target != currentTabContent)
            {
                currentTabContent = target;
                currentTabContent.classList.add('active');

                currentTab = tab;
                // currentTab.classList.remove('spin');
                currentTabContent.firstElementChild.classList.remove('spinner');
            }
            else
            {
                currentTabContent = null;
                currentTab = null;
            }
        });

        tab.addEventListener("mouseenter", () => {
            // tab.classList.remove('spin');
            tab.firstElementChild.classList.remove('spinner');
        });

        tab.addEventListener("mouseleave", () => {
            if (tab != currentTab)
            {
                tab.firstElementChild.classList.add('spinner');
                // tab.classList.add('spin');
            }
        });
    })
