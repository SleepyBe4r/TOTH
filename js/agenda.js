document.addEventListener('DOMContentLoaded', () => {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    const monthYearLabel = document.getElementById('month-year');
    const calendarBody = document.getElementById('calendar-body');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    
    function abrir_Form(obj,e){
        div = document.createElement("div");
        div.style = "height: 100px";
        div.style = "width: 100px";
        div.style = "position: absolute;";
        div.style = "z-index: 100;";
        div.style = "top: "+e.pageY+";";
        div.style = "left: "+ e.pageX+";";
        div.innerHTML = "duahndfuao";
        document.body.appendChild(div);
    }

    function renderCalendar(month, year) {
        calendarBody.innerHTML = '';
        monthYearLabel.textContent = `${monthNames[month]} ${year}`;
        
        const firstDay = new Date(year, month).getDay();
        const numDays = daysInMonth(month, year);

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                cell.onclick = function() { abrir_Form(this, event) };
                if (i === 0 && j < firstDay) {
                    cell.innerHTML = '';
                } else if (date > numDays) {
                    break;
                } else {
                    cell.innerHTML = date;
                    date++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    prevButton.addEventListener('click', () => {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextButton.addEventListener('click', () => {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});
