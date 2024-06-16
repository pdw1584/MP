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


// 값 조회
const read = () => {
  return new Promise((resolve, reject) => {
    database.ref("users/" + "asdf123").on('value', (snapshot) => {
      let data = snapshot.val();
      if (data) {
        resolve(data);
      } else {
        reject(data);
      }
    })
  })
}


// =====================개인정보 업데이트 코드======================
// 인풋태그에서 바꾸면 안되는 value는 입력하지 못하게 바꿔주기
const upBtn = document.getElementById('upBtn');
upBtn.addEventListener('click', () => {
  const userId = document.frm.userId.value;
  const userPW = document.frm.userPW.value;
  const userNewPW = document.frm.userNewPW.value;
  const userHeight = document.frm.userHeight.value;
  const userWeight = document.frm.userWeight.value;
  if (userPW === userNewPW) {
    database.ref('users/' + userId).update({
      // 매개변수 넣기
      userPW: userPW,
      userHeight: userHeight,
      userWeight: userWeight
    })
  }else{
    alert("비밀번호를 확인하세요")
  }
});

// =================개인정보 업데이트 코드===================

// =====================회원 탈퇴 코드======================
const delBtn = document.getElementById("delBtn");
delBtn.addEventListener('click', () => {
  const userId = document.frm.userId.value;
  database.ref('users/' + userId).remove();
})
// =====================회원 탈퇴 코드======================

// 개인정보 불러오기

read()
  .then((data) => {
    console.log('Data:', data);
    const keys = Object.keys(data);
    const userId = document.frm.userId;
    const userPW = document.frm.userPW;
    const userGender = document.frm.userGender;
    const userHeight = document.frm.userHeight;
    const userWeight = document.frm.userWeight;
    const userBirth = document.frm.userBirth;


    userId.value = "apdl987";
    userPW.value = data[keys[3]];
    userGender.value = data[keys[1]];
    userHeight.value = data[keys[2]];
    userWeight.value = data[keys[4]];
    userBirth.value = data[keys[0]];

  })
  .catch((error) => {
    console.log("데이터가 없습니다.");
  });

