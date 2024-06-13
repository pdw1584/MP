const firebaseConfig = {
    apiKey: "AIzaSyDY_rShHJYXanLrhjgpyee5jzfyrctIwok",
    authDomain: "mini-project-ce8f4.firebaseapp.com",
    databaseURL: "https://mini-project-ce8f4-default-rtdb.firebaseio.com",
    projectId: "mini-project-ce8f4",
    storageBucket: "mini-project-ce8f4.appspot.com",
    messagingSenderId: "267780174541",
    appId: "1:267780174541:web:9bce134f9caa99db636f84",
    measurementId: "G-FXC0X6HCRP"
};
firebase.initializeApp(firebaseConfig);


const form = document.getElementById('loginform');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Firebase 인증을 통한 로그인
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // 로그인 성공
            const user = userCredential.user;
            console.log('로그인 성공:', user);
            // 로그인 성공 후에 할 일 
            window.location.href = '../main/template/main.html';
        })
        .catch((error) => {
            // 로그인 실패
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('로그인 실패:', errorMessage);
            alert('로그인 실패: ' + errorMessage);
        });
});

document.querySelector('.member input[type="button"]').addEventListener('click', () => {
    // 회원가입 페이지로 이동
    window.location.href = '../login/template/register.html';
});
