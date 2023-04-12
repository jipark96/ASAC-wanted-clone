const signupButton = document.getElementById("signup_button");
const signupModal = document.getElementById("signup_modal");
const closeBtn = document.getElementsByClassName("close")[0];

signupButton.onclick = () => {
  signupModal.style.display = "block"; // 모달 열기
};

closeBtn.onclick =  () => {
  signupModal.style.display = "none"; // 모달 닫기
};