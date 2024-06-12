function loadHTML(filename){
    var iframe = document.getElementById('page');
    iframe.src = filename;
};

function setActiveMenu(clickedElement) {
    // 모든 메뉴 아이템을 가져옵니다.
    var menuItems = document.querySelectorAll("#sidebar-nav ul li");

    // 모든 메뉴 아이템에서 'active' 클래스를 제거합니다.
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // 클릭한 메뉴 아이템에만 'active' 클래스를 추가합니다.
    clickedElement.parentElement.classList.add('active');
};


function setActive(element) {
    // 이전에 활성화된 요소 찾기
    var previousActive = document.querySelector('.active');

    // 이전에 활성화된 요소의 클래스명을 제거
    if (previousActive) {
        previousActive.classList.remove('active');
    }

    // 현재 클릭된 요소에 'active' 클래스 추가
    element.classList.add('active');
}