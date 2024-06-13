document.addEventListener('DOMContentLoaded', function () {
    const yearMonthTitle = document.getElementById('year-month-title');
    const calendarBody = document.getElementById('calendar-body');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // 년 월 타이틀 설정
    yearMonthTitle.textContent = `${currentYear}년 ${currentMonth + 1}월`;

    function generateCalendar(year, month) {
        calendarBody.innerHTML = '';
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const prevLastDate = new Date(year, month, 0).getDate();
        let dateNum = 1;
        let nextMonthDateNum = 1;
        let createdRow = document.createElement('tr');

        // 이전 달 날짜 표시
        // 이전 달과 다음 달 날짜를 나타내는 td에 background-color 스타일을 입혀주고싶다...
        for (let i = 0; i < firstDay; i++) {
            const cell = document.createElement('td');
            cell.textContent = prevLastDate - firstDay + i + 1;
            cell.classList.add('lastNextMonth');
            createdRow.appendChild(cell);                    
        }

        // 현재 달 날짜 표시
        for (let i = firstDay; i < 7; i++) {
            const cell = document.createElement('td');
            cell.textContent = dateNum;
            cell.setAttribute('data-date', `${year}-${month + 1}-${dateNum < 10 ? '0' + dateNum : dateNum}`);
            createdRow.appendChild(cell);
            dateNum++;
        }
        calendarBody.appendChild(createdRow);

        // 나머지 주 날짜 표시
        while (dateNum <= lastDate) {
            createdRow = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                if (dateNum > lastDate) {
                    // 다음 달 날짜 표시
                    const cell = document.createElement('td');
                    cell.textContent = nextMonthDateNum;
                    createdRow.appendChild(cell);
                    cell.classList.add('lastNextMonth');
                    nextMonthDateNum++;
                } else {
                    const cell = document.createElement('td');
                    cell.textContent = dateNum;
                    cell.setAttribute('data-date', `${year}-${month + 1}-${dateNum < 10 ? '0' + dateNum : dateNum}`);
                    createdRow.appendChild(cell);
                    dateNum++;
                }
            }
            calendarBody.appendChild(createdRow);
            
        }
    }

    generateCalendar(currentYear, currentMonth);

    // 셀 클릭 이벤트 추가
    calendarBody.addEventListener('click', function (event) {
        const cell = event.target;
        const date = cell.getAttribute('data-date');
        if (!date) return;

        const didWorkout = confirm(`${date}일에 운동을 하셨나요?`);
        // 운동 여부를 물어보고 true일 때에 class 추가, false일 때에 class를 삭제한다.
        // 이미 부여된 class 삭제 가능 == 잘못 체크한 날짜 다시 설정 가능
        if (didWorkout) {
            cell.classList.add('todoCk');
                }
                // 이미 색칠된 날짜에 한 번 더 true값을 주었을 때 색상이 더 진해지게 만들고 싶다...
                // else if(cell.classList.contains('todoCk')){
                //     cell.classList.remove('todoCk');
                //     cell.classList.add('todoAgain');
                // }
        else{
                cell.classList.remove('todoCk');
            }
    });
});