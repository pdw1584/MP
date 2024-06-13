var firebaseEmailAuth; //파이어베이스 email 인증 모듈 전역변수
var firebaseDatabase; //파이어베이스 db 모듈 전역변수
var userInfo; //가입한 유저의 정보. object 타입
//파이어 베이스 초기화 코드
var config = {
    apiKey: "AIzaSyDY_rShHJYXanLrhjgpyee5jzfyrctIwok",
    authDomain: "mini-project-ce8f4.firebaseapp.com",
    databaseURL: "https://mini-project-ce8f4-default-rtdb.firebaseio.com",
    projectId: "mini-project-ce8f4",
    storageBucket: "mini-project-ce8f4.appspot.com",
    messagingSenderId: "267780174541",
    appId: "1:267780174541:web:9bce134f9caa99db636f84",
    measurementId: "G-FXC0X6HCRP"
};

firebase.initializeApp(config);

firebaseEmailAuth = firebase.auth(); //파이어베이스 인증 객체
firebaseDatabase = firebase.database(); //파이어베이스 데이터베이스 객체

// 로그인 함수
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // 로그인 성공 시
            const user = userCredential.user;
            showMainPage(user);
        })
        .catch((error) => {
            // 로그인 실패 시
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

// 로그아웃 함수
function logout() {
    auth.signOut()
        .then(() => {
            // 로그아웃 성공 시
            showLoginPage();
        })
        .catch((error) => {
            // 로그아웃 실패 시
            alert(error.message);
        });
}

// 메인 페이지 표시 함수
function showMainPage(user) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('username').innerText = user.email;
}

// 로그인 페이지 표시 함수
function showLoginPage() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('mainPage').style.display = 'none';
}
