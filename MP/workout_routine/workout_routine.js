// 사진 누르면 routineN.html 페이지로 이동
document.addEventListener("DOMContentLoaded", function () {
  const layouts = document.querySelectorAll(".layout");

  layouts.forEach((layout) => {
    layout.addEventListener("click", function () {
      const url = layout.getAttribute("data-url");
      window.location.href = url;
    });
  });
});

// 버튼에 마우스 올리면 민트색으로 변환
document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector(".back");

  backButton.addEventListener("mouseover", () => {
    backButton.style.backgroundColor = "#D2E6E5";
  });

  backButton.addEventListener("mouseout", () => {
    backButton.style.backgroundColor = "#fff";
  });
});
