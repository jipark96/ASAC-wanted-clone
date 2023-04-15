const signupButton = document.getElementById("signup_button");
const signupModal = document.getElementById("signup_modal");
const closeBtn = document.getElementById("close");

const goModal2 = document.getElementById("go_modal2");
const signupModal2 = document.getElementById("signup_modal2");
const closeBtn2 = document.getElementById("close2");

signupButton.onclick = () => {
  signupModal.style.display = "block"; // 모달 열기
};

closeBtn.onclick = () => {
  signupModal.style.display = "none"; // 모달 닫기
};

goModal2.onclick = () => {
  signupModal.style.display = "none"; // 첫번째 모달 닫기
  signupModal2.style.display = "block"; // 두번째 모달 열기
};

closeBtn2.onclick = () => {
  signupModal2.style.display = "none"; // 두번째 모달 닫기
  signupModal.style.display = "block"; // 첫번째 모달 열기
};

//[이메일 형식이 올바르지 않을 경우 경고 표시하기]
const emailInput = document.getElementById("email_input");
const emailError = document.getElementById("email_error");
const emailBtn = document.querySelector(".modal_button");

emailInput.oninput = () => {
  const email = emailInput.value;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (emailValid) {
    emailInput.style.border = "1px solid #36f";
    emailError.style.display = "none";
    emailBtn.classList.add("active");
    emailBtn.disabled = false;
  } else {
    emailInput.style.border = "1px solid red";
    emailError.style.display = "block";
    emailBtn.classList.remove("active");
    emailBtn.disabled = true;
  }
};

//[체크박스, 전체 동의할 경우 다 체크하기]
const modal2_chk_all = document.getElementById("modal2_chk_all");
const modal2_chk = document.querySelectorAll(".modal2_checkbox");

modal2_chk_all.onchange = () => {
  modal2_chk.forEach((checkbox) => {
    checkbox.checked = modal2_chk_all.checked;
  });
};

//이메일, 앱 푸시, 문자 메시지 클릭시 색 바꿔주기
const modal2Chk = document.getElementById("modal2_chk");
// const modal2Chk2 = document.getElementById("modal2_chk2");
// const modal2Chk3 = document.getElementById("modal2_chk3");
const modal2Icon1 = document.getElementById("modal2_icon1");
// const modal2Icon2 = document.getElementById("modal2_icon2");
// const modal2Icon3 = document.getElementById("modal2_icon3");

let chkCounter1 = 1;
// let chkCounter2 = 1;
// let chkCounter3 = 1;
//홀수번 버튼 체크 파란색, 짝수번 회색
modal2Chk.onclick = () => {
  if (chkCounter1 % 2 === 0) {
    modal2Icon1.style.color = "#888888";
  } else {
    modal2Icon1.style.color = "#36f";
  }
  chkCounter1++;
};
// modal2Chk2.onclick = () => {
//   if (chkCounter2 % 2 === 0) {
//     modal2Icon2.style.color = "#888888";
//   } else {
//     modal2Icon2.style.color = "#36f";
//   }
//   chkCounter2++;
// };
// modal2Chk3.onclick = () => {
//   if (chkCounter3 % 2 === 0) {
//     modal2Icon3.style.color = "#888888";
//   } else {
//     modal2Icon3.style.color = "#36f";
//   }
//   chkCounter3++;
// };
//[메인페이지 사진 슬라이드]
// 이전 이벤트 버튼과 다음 이벤트 버튼을 클래스를 이용해 선택
const prevEventBtn = document.querySelector(".section1_div1");
const nextEventBtn = document.querySelector(".section1_div2");

// 슬라이드 리스트 컨테이너와 각각의 슬라이드 요소들을 클래스를 이용해 선택
const slideList = document.querySelector(".section1_container");
const slideItem = document.querySelectorAll(".section1_wrap");

// 현재 슬라이드 인덱스를 저장할 변수와, 슬라이드 한 개의 가로 크기를 저장할 변수를 초기화
let eventCounter = 0; // 현재 보이는 슬라이드의 인덱스
const eventSize = slideItem[0].clientWidth; // 슬라이드의 너비

//첫 번째 슬라이드를 복제하고 리스트의 맨 앞에 추가하여, 순환하는 슬라이드를 만듬
const cloneEventElement = () => {
  slideList.prepend(slideItem[0].cloneNode(true));
};
cloneEventElement(); // 초기화 함수 실행

// 슬라이드 리스트의 초기 위치를 이벤트 카운터와 이벤트 크기를 이용해 설정
slideList.style.transform = "translateX(" + eventSize * eventCounter + "px)"; // 슬라이드 리스트의 위치를 초기화

// 다음 버튼에 이벤트 리스너를 추가하여 슬라이드를 이동
nextEventBtn.onclick = () => {
  // 카운터가 슬라이드의 끝에 도달했는지 확인
  if (eventCounter >= slideItem.length) {
    // 만약 그렇다면, 트랜지션 효과를 추가하고, 카운터를 1로 재설정한 후 슬라이드를 이동
    slideList.style.transition = "transform 0.3s ease-in-out"; // 트랜지션 효과를 추가
    eventCounter = 1; // 첫번째 슬라이드로 이동
    slideList.style.transform =
      "translateX(" + -eventSize * eventCounter + "px)"; // 슬라이드를 이동
  } else {
    // 그렇지 않다면, 트랜지션 효과를 추가하고, 카운터를 증가시킨 후 슬라이드를 이동
    slideList.style.transition = "transform 0.3s ease-in-out";
    eventCounter++; // 다음 슬라이드로 이동
    slideList.style.transform =
      "translateX(" + -eventSize * eventCounter + "px)";
  }
};

//이전 버튼에 이벤트 리스너를 추가하여 슬라이드를 이동
prevEventBtn.onclick = () => {
  // 카운터가 슬라이드의 시작에 도달했는지 확인
  if (eventCounter <= 0) {
    // 만약 그렇다면, 트랜지션 효과를 추가하고, 카운터를 슬라이드 개수에서 2를 뺀 값으로 재설정한 후 슬라이드를 이동
    slideList.style.transition = "transform 0.3s ease-in-out";
    eventCounter = slideItem.length - 2; // 마지막에서 두번째 슬라이드로 이동 ,
    slideList.style.transform =
      "translateX(" + -eventSize * eventCounter + "px)";
  } else {
    // 그렇지 않으면, 트랜지션 효과를 추가하고 카운터를 1 감소시킨 후 슬라이드를 이동
    slideList.style.transition = "transform 0.3s ease-in-out";
    eventCounter--; // 이전 슬라이드로 이동합니다.
    slideList.style.transform =
      "translateX(" + -eventSize * eventCounter + "px)";
  }
};
