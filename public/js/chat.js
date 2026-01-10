const token = localStorage.getItem("token");

if (!token) {
  window.location = "login.html";
}

const chatId = 1; // test chat ID

const socket = io(BASE_URL, {
  auth: { token },
});

socket.on("connect", () => {
  socket.emit("join_chat", chatId);
});

socket.on("new_message", (msg) => {
  appendMessage(msg.content);
});

function sendMessage() {
  if (!message.value) return;

  socket.emit("send_message", {
    chatId,
    content: message.value,
  });

  message.value = "";
}

function appendMessage(text) {
  const div = document.createElement("div");
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function logout() {
  localStorage.removeItem("token");
  window.location = "login.html";
}
