function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function createDaysOfTheMonth() {

    let monthDaysList = document.querySelector('#days')

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let monthDays = dezDaysList[i];
        let monthDaysListItem = document.createElement('li');


        if (monthDays === 24 | monthDays === 25 | monthDays === 31) {
            monthDaysListItem.className = 'day friday';
            monthDaysListItem.innerHTML = monthDays;
            monthDaysList.appendChild(monthDaysListItem);
        } else if (monthDays === 4 | monthDays === 11 | monthDays === 18) {
            monthDaysListItem.className = 'day holiday';
            monthDaysListItem.innerHTML = monthDays;
            monthDaysList.appendChild(monthDaysListItem)
        } else if (monthDays === 25) {
            monthDaysListItem.className = 'day holiday friday';
            monthDaysListItem.innerHTML = monthDays;
            monthDaysList.appendChild(monthDaysListItem)
        } else {
            monthDaysListItem.innerHTML = monthDays;
            monthDaysListItem.className = 'day';
            monthDaysList.appendChild(monthDaysListItem);
        }

    };

};
createDaysOfTheMonth();

function createHolidayButton(param) {
    let buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let buttonId = 'btn-holiday';

    button.innerHTML = param;
    button.id = buttonId;
    buttonContainer.appendChild(button);
};

createHolidayButton('Feriados');

function changeColor() {
    let holidayButton = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let color = 'rgb(238,238,238)';
    let color2 = 'red';

    holidayButton.addEventListener('click', function () {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.backgroundColor === color2) {
                holidays[i].style.backgroundColor = color;
            } else {
                holidays[i].style.backgroundColor = color2;
            }
        }
    })
};
changeColor();

function createFridayButton (name) {
    let buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    let buttonId = 'btn-friday';

    button.innerHTML = name;
    button.id = buttonId;
    buttonContainer.appendChild(button);
}
createFridayButton('Sexta-Feira');

function changeText(array) {
    let fridayButton = document.querySelector('#btn-friday');
    let fridays = document.querySelectorAll('.friday');
    let newText = 'Dia de maldade!!!'

    fridayButton.addEventListener('click', function() {
        for (let i = 0; i < fridays.length; i+=1) {
            if (fridays[i].innerHTML !== newText) {
                fridays[i].innerHTML = newText
            } else {
                fridays[i].innerHTML = array[i];
            }
        }
    })
};
changeText([4, 11, 18, 25]);


function dayMouseOver () {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '35px';
        event.target.style.fontWeight = '600';
    })
};
