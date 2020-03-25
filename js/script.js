window.addEventListener('DOMContentLoaded', function(){
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


/*
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.classList.contains('hide')){
            tabContent[b].classList.classList.remove('hide');
            tabContent[b].classList.classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i =0; i < tab.length; i++) {
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    
                }
            }
        }

    });

}); */

//Удаляем при наличии класс hide и устанавливаем при отсутствии класс show 
function onShow(element) {
    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
    }
    if (!element.classList.contains('show')) {
        element.classList.add('show');
    }
}

//Удаляем при наличии класс show и устанавливаем при отсутствии класс hide 
function onHide(element) {
    if (element.classList.contains('show')) {
        element.classList.remove('show');
    }
    if (!element.classList.contains('hide')) {
        element.classList.add('hide');
    }
} 

function hideFunc() {
    for (let i = 1; i < tabContent.length; i++) {
        onHide(tabContent[i]);    
    }
    onShow(tabContent[0]);
}

hideFunc();

info.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target && target.classList.contains('info-header-tab')) {
        const activTabContent = document.querySelector('.info-tabcontent.show');
        for (let i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                if (activTabContent !== tabContent[i]) { 
                    onHide(activTabContent);
                    onShow(tabContent[i]);
                }
                  break;                 
            } 
        }
    }
});
});