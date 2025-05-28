let isAdmin = false;

function verifyAdmin() {
  const pass = document.getElementById("admin-pass").value;
  if (pass === "admin1234") {
    isAdmin = true;
    document.getElementById("admin-controls").style.display = "block";
    document.getElementById("admin-modal").style.display = "none";
    alert("관리자 모드가 활성화되었습니다.");
  } else {
    alert("비밀번호가 틀렸습니다.");
  }
}
