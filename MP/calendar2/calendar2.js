(function () {
    $(function () {
        // 현재 날짜 구하기
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
        const day = date.getDate() > 9 ? date.getDate() : "0" + (date.getDate());
        let currentDate = `${year}-${month}-${day}`
        // console.log('curr', currentDate) 현재날짜 console. 확인
        // calendar element 취득
        var calendarEl = $('#calendar')[0];
        // full-calendar 생성하기
        var calendar = new FullCalendar.Calendar(calendarEl, {
            height: '650px', // calendar 높이 설정
            expandRows: true, // 화면에 맞게 높이 재설정
            slotMinTime: '08:00', // Day 캘린더에서 시작 시간
            slotMaxTime: '20:00', // Day 캘린더에서 종료 시간
            // 해더에 표시할 툴바
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth'
            },
            initialView: 'dayGridMonth', // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)
            initialDate: currentDate, // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
            navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크
            editable: true, // 수정 가능?
            selectable: true, // 달력 일자 클릭, 드래그 설정가능
            dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
            locale: 'ko', // 한국어 설정
            eventAdd: function (obj) { // 이벤트가 추가되면 발생하는 이벤트
                console.log("obj", obj);
            },
            select: (arg) => {
                const startDay = arg.startStr;
                let ck;
                ckUserData(startDay)
                    .then((data) => {
                        updateTodoFalse(startDay);
                        ck = confirm("잔디뽑기");
                    }).catch((error) => {
                        ck = confirm("잔디심기");
                        joinUserData(startDay, ck);
                    })

                location.replace(location.href);
                calendar.unselect();
            }
        });

        // 캘린더 랜더링
        calendar.render();

        readUserData()
            .then((data) => {
                console.log('Data:', data);
                const keys = Object.keys(data);
                const val = document.querySelector(".fc-scrollgrid-sync-table > tbody").childNodes;
                console.log(val)
                for (let i = 0; i < val.length; i++) {
                    var n = val[i].querySelectorAll("td");
                    for (let j = 0; j < n.length; j++) {
                        if (keys.includes(n[j].dataset.date)) {
                            n[j].classList.toggle('todoCk');
                        }
                    }
                }
            })
            .catch((error) => {
                console.log("데이터가 없습니다.");
                // console.error('Error:', error);
            });
    });
})();