const tabsBtn = document.querySelectorAll(".li-step");
const tabsItem = document.querySelectorAll(".work-box");

tabsBtn.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        console.log(tabId)
        tabsBtn.forEach(function(item){
            item.classList.remove('tab-active')
        })

        tabsItem.forEach(function(itemm){
                itemm.classList.remove('tab-active')    
        })
        currentBtn.classList.add('tab-active')
        currentTab.classList.add('tab-active')
    });
});


