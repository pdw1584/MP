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

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

function joinUserData(toDayDate, ck) {
    database.ref("calTodo/" + toDayDate).set({
        ck: ck
    });
}

function updateTodoFalse(todoDate) {
    database.ref("calTodo/" + todoDate).remove();
}

const ckUserData = (toDayDate) => {
    return new Promise((resolve, reject) => {
        database.ref("calTodo/" + toDayDate).on('value', (snapshot) => {
            let data = snapshot.val();
            if (data) {
                resolve(data);
            } else {
                reject(false);
            }
        })
    })

}

const readUserData = () => {
    // readUserData라는 이름의 함수를 정의
    return new Promise((resolve, reject) => {
        // 새로운 Promise 객체를 반환
        database.ref("calTodo/").on('value', (snapshot) => {
            // Firebase 데이터베이스에서 "calTodo/" 경로의 값을 읽습니다.
            // 'value' 이벤트는 데이터가 변경될 때마다 호출됩니다.
            let data = snapshot.val();
            // snapshot에서 실제 데이터를 가져옵니다.
            if (data) {
                // 데이터가 존재하면
                resolve(data);
                // Promise를 성공 상태로 설정하고 데이터를 반환합니다.
            } else {
                // 데이터가 존재하지 않으면
                reject(new Error('No data available'));
                // Promise를 실패 상태로 설정하고 에러 메시지를 반환합니다.
            }
        });
    });
}