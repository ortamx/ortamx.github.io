import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCred.user.uid), {
      username,
      phone,
      email,
      createdAt: serverTimestamp()
    });

    alert("Kayıt başarılı");
    window.location.href = "login.html";

  } catch (err) {
    alert(err.message);
  }
});
