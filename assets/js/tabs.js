const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

let currentTab;
tabs.forEach(tab =>
    {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);

            if(currentTab != null)
                currentTab.classList.remove('active');

            if(target != currentTab)
            {
                target.classList.add('active');
                currentTab = target;
            }
            else
                currentTab = null;
        })
    })
