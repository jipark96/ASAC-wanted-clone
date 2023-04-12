const signupButton = document.getElementById("signup_button");
const signupModal = document.getElementById("signup_modal");
const closeBtn = document.getElementsByClassName("close")[0];

signupButton.onclick = () => {
  signupModal.style.display = "block"; // 모달 열기
};

closeBtn.onclick = () => {
  signupModal.style.display = "none"; // 모달 닫기
};

const goModal2 = document.getElementById("go_modal2");
const signupModal2 = document.getElementById("signup_modal2");
const closeBtn2 = document.getElementsByClassName("close2")[0];

goModal2.onclick = () => {
  signupModal.style.display = "none"; // 첫번째 모달 닫기
  signupModal2.style.display = "block"; // 두번째 모달 열기
};

closeBtn2.onclick = () => {
  signupModal2.style.display = "none"; // 두번째 모달 닫기
  signupModal.style.display = "block"; // 첫번째 모달 열기
};

const modal2_chk_all = document.getElementById("modal2_chk_all");
const modal2_chk = document.querySelectorAll(".modal2_checkbox");

modal2_chk_all.addEventListener("change", () => {
  modal2_chk.forEach((checkbox) => {
    checkbox.checked = modal2_chk_all.checked;
  });
});
