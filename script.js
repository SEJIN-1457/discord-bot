// 공지사항을 디스코드 봇으로 전송하는 함수
function postNotice() {
    const title = document.getElementById("notice-title").value.trim();
    const body = document.getElementById("notice-body").value.trim();
    if (!title || !body) return alert("제목과 내용을 모두 입력해주세요.");
  
    // HTML 형식으로 공지사항 작성
    const formattedBody = `
      <h3>${title}</h3>
      <p>${body}</p>
      <p><small>${new Date().toISOString().split('T')[0]}</small></p>
    `;
  
    // 공지사항 웹에 등록 (HTML 형식으로 표시)
    const list = document.getElementById("notice-list");
    const date = new Date().toISOString().split('T')[0];
    const li = document.createElement("li");
    li.innerHTML = `<h3>${title} <small>${date}</small></h3><p>${body}</p>`;
    list.insertBefore(li, list.firstChild);
  
    // 디스코드 봇으로 HTML 형식의 공지 전송
    sendNoticeToDiscord(title, formattedBody);
  
    // 입력 값 초기화
    document.getElementById("notice-title").value = '';
    document.getElementById("notice-body").value = '';
  }
  
  // 디스코드 봇에 HTML 형식 공지사항을 보내는 함수
  function sendNoticeToDiscord(title, formattedBody) {
    fetch('/api/discord/notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: formattedBody,  // HTML 형식으로 전송
        date: new Date().toISOString().split('T')[0],
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('공지 전송 성공:', data);
    })
    .catch((error) => {
      console.error('공지 전송 오류:', error);
    });
  }
  