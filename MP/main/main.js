// 세션에서 로그인 상태 확인
var isLogin = sessionStorage.getItem('isLogin');

function loadHTML(filename) {
    var iframe = document.getElementById('page');
    iframe.src = filename;
};

function loadMainPage() {
    loadHTML('../../main/template/main_body.html');
}

function checkLogin() {
    if (isLogin === 'true') {
        console.log('로그인 상태입니다.');
    } else {
        console.log('로그인 상태가 아닙니다.');
    }
}

function goToLoginPage() {
    // 로그인 페이지로 이동합니다.
    loadHTML('../../login/template/login.html');
}

function logout() {
    // 세션에서 로그인 상태를 false로 변경합니다.
    sessionStorage.setItem('isLogin', 'false');
    // 버튼 상태를 업데이트합니다.
    updateButtons();
    console.log('로그아웃되었습니다.');
}

function updateButtons() {
    if (isLogin === 'true') {
        // 로그인 상태일 때는 로그아웃, 내 정보 버튼 보이고 로그인, 회원가입 버튼 숨김
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('signinBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'block';
        document.getElementById('myInfoBtn').style.display = 'block';
    } else {
        // 로그아웃 상태일 때는 로그인, 회원가입 버튼 보이고 로그아웃, 내 정보 버튼 숨김
        document.getElementById('loginBtn').style.display = 'block';
        document.getElementById('signinBtn').style.display = 'block';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('myInfoBtn').style.display = 'none';
    }
}

// 페이지 로딩 시 버튼 상태 업데이트
updateButtons();

// 사용자가 로그인을 완료했을 때 호출되는 함수
function loginSuccess() {
    // 세션에 로그인 상태를 true로 설정합니다.
    sessionStorage.setItem('isLogin', 'true');
    // 버튼 상태를 업데이트합니다.
    updateButtons();
    console.log('로그인되었습니다.');
}