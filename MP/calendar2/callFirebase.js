const firebaseConfig = {
    apiKey: "AIzaSyCce5qxVzEgxE0-vFstb33ZtRsHS-c9T0c",
    authDomain: "poroject-sm.firebaseapp.com",
    databaseURL: "https://poroject-sm-default-rtdb.firebaseio.com",
    projectId: "poroject-sm",
    storageBucket: "poroject-sm.appspot.com",
    messagingSenderId: "26224697760",
    appId: "1:26224697760:web:61f91e2e1d589f7f2544c5",
    measurementId: "G-ZQWZRMTZ3H"
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

function joinUserData(toDayDate, ck) {
    database.ref("calTodo/"+toDayDate).set({
        ck : ck
    });
}

// async function readUserData (){
//     await database.ref("calTodo/").on('value',(snapshot)=>{
//         // 실시간 데이터베이스 값 접근
//         const data = snapshot.val();
//         const keys = Object.keys(data);
//         const val = document.querySelector(".fc-scrollgrid-sync-table > tbody").childNodes;
//         // 3번이 첫번째줄
//         for(let i = 0; i < val.length; i++){
//             var n = val[i].querySelectorAll("td");
//             for(let j = 0; j < n.length; j++){
//                 if(keys.includes(n[j].dataset.date)){
                    
//                 }
//             }
//         }
        
//     })
// }
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