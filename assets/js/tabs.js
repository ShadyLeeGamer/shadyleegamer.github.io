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
                currentTab.classList.add('spin');
            }

            if(target != currentTabContent)
            {
                currentTabContent = target;
                currentTabContent.classList.add('active');

                currentTab = tab;
                currentTab.classList.remove('spin');
            }
            else
            {
                currentTabContent = null;
                currentTab = null;
            }
        });

        tab.addEventListener("mouseenter", () => {
            tab.classList.remove('spin');
        });

        tab.addEventListener("mouseleave", () => {
            if (tab != currentTab)
                tab.classList.add('spin');
        });
    })
