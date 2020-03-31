window.addEventListener('DOMContentLoaded', function(){
    //Табы
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


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
    //timer
    let deadline = '2020-11-20';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60 ) % 24));
            days = Math.floor((t/(1000*60*60*24)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
            'days' : days
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    }
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }
    setClock('timer', deadline);

    //modal window
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {

        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //tabs windows

/*     let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'); */
    let descBtnCure = document.querySelectorAll('.description-btn')[0],
        descBtnRelax = document.querySelectorAll('.description-btn')[1],
        descBtnNature = document.querySelectorAll('.description-btn')[2],
        descBtnYoga = document.querySelectorAll('.description-btn')[3];

       //Cure
    descBtnCure.addEventListener('click', function() {

        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        descBtnCure.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    //relax
    descBtnRelax.addEventListener('click', function() {

        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        descBtnRelax.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    //nature
    descBtnNature.addEventListener('click', function() {

        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        descBtnNature.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    //yoga
    descBtnYoga.addEventListener('click', function() {

        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        descBtnYoga.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});