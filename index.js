const signupButton = document.getElementById("signup_button");
const signupModal = document.getElementById("signup_modal");
const closeBtn = document.getElementById("close");

const goModal2 = document.getElementById("go_modal2");
const signupModal2 = document.getElementById("signup_modal2");
const closeBtn2 = document.getElementById("close2");

signupButton.onclick = () => {
  signupModal.style.display = "block"; // 모달 열기
};
goModal2.onclick = () => {
  signupModal.style.display = "none"; // 첫번째 모달 닫기
  signupModal2.style.display = "block"; // 두번째 모달 열기
};

closeBtn2.onclick = () => {
  signupModal2.style.display = "none"; // 두번째 모달 닫기
  signupModal.style.display = "block"; // 첫번째 모달 열기
};

closeBtn.onclick = () => {
  signupModal.style.display = "none"; // 모달 닫기
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
  } else {
    emailInput.style.border = "1px solid red";
    emailError.style.display = "block";
    emailBtn.classList.remove("active");
  }
};

//[체크박스, 전체 동의할 경우 다 체크하기]
const modal2_chk_all = document.getElementById("modal2_chk_all");
const modal2_chk = document.querySelectorAll(".modal2_checkbox");

modal2_chk_all.addEventListener("change", () => {
  modal2_chk.forEach((checkbox) => {
    checkbox.checked = modal2_chk_all.checked;
  });
});
