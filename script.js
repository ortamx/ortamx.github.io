const sendBtn = document.getElementById('send-btn');
const msgInput = document.getElementById('msg-input');
const messages = document.getElementById('messages');

sendBtn.onclick = () => {
    if(msgInput.value !== "") {
        const div = document.createElement('div');
        div.innerText = "Siz: " + msgInput.value;
        div.style.padding = "10px";
        div.style.borderBottom = "1px solid #333";
        messages.appendChild(div);
        msgInput.value = "";
    }
};
