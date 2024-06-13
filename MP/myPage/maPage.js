document.getElementById('modify').addEventListener('click', function() {
    if (confirm('정말로 수정하시겠습니까?')) {
      modify(); // 수정 함수 호출
    }
  });
  
  function modify() {
    // 서버로 수정 요청 보내기 (예: AJAX 요청)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/modify', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 응답 받은 경우
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          alert('회원정보가 수정되었습니다.');
          // 여기서 추가적인 동작을 수행할 수 있습니다. 예를 들어, 홈페이지로 리다이렉트하거나 로그아웃을 수행할 수 있습니다.
        } else {
          alert('회원정보가 수정되지 않았습니다.');
        }
      }
    };
    xhr.send();
  }



  // document.getElementById('updateForm').addEventListener('submit', function(event) {
  //   event.preventDefault(); // 기본 제출 동작 방지
  
  //   // 폼에서 입력된 값 가져오기
  //   let userId = document.getElementById('userId').value;
  //   let newName = document.getElementById('newName').value;
  
  //   // 서버로 전송할 데이터 생성
  //   let data = {
  //     userId: userId,
  //     userNewPw: userNewPw
  //   };
  
  //   // 서버로 POST 요청 보내기 (예: AJAX 요청)
  //   let xhr = new XMLHttpRequest();
  //   xhr.open('POST', '/updateUser', true);
  //   xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       // 응답 받은 경우
  //       var response = JSON.parse(xhr.responseText);
  //       if (response.success) {
  //         alert('회원 정보가 성공적으로 수정되었습니다.');
  //       } else {
  //         alert('회원 정보 수정에 실패했습니다.');
  //       }
  //     }
  //   };
  //   xhr.send(JSON.stringify(data));
  // });



  document.getElementById('withdrawButton').addEventListener('click', function() {
    if (confirm('정말로 탈퇴하시겠습니까?')) {
      withdraw(); // 탈퇴 함수 호출
    }
  });
  
  function withdraw() {
    // 서버로 탈퇴 요청 보내기 (예: AJAX 요청)
    var xhr1 = new XMLHttpRequest();
    xhr1.open('POST', '/withdraw', true);
    xhr1.setRequestHeader('Content-Type', 'application/json');
    xhr1.onreadystatechange = function() {
      if (xhr1.readyState === 4 && xhr1.status === 200) {
        // 응답 받은 경우
        var response = JSON.parse(xhr1.responseText);
        if (response.success) {
          alert('탈퇴가 완료되었습니다.');
          // 여기서 추가적인 동작을 수행할 수 있습니다. 예를 들어, 홈페이지로 리다이렉트하거나 로그아웃을 수행할 수 있습니다.
        } else {
          alert('탈퇴에 실패했습니다.');
        }
      }
    };
    xhr1.send();
  }