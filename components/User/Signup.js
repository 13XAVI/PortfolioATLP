import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCnWZq-1rRiWWk4AmJJVWG4mUhDB53OBao",
  authDomain: "portfolio-project-e4be2.firebaseapp.com",
  projectId: "portfolio-project-e4be2",
  storageBucket: "portfolio-project-e4be2.appspot.com",
  messagingSenderId: "683194154846",
  appId: "1:683194154846:web:536db38dd7be6407b819cf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
auth.languageCode = 'en'
const provider = new GoogleAuthProvider()

const btnGoogle = document.getElementById("btn-google");
btnGoogle.addEventListener("click", () => {



  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      window.location.href = "index.html"
      console.log("User", user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });
})


const Github = document.getElementById("btn-github");
Github.addEventListener("click", () => {

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      window.location.href = "index.html"

    }).catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
    });
})

const Myform = document.getElementById("Signup-form");
const UnameErr=document.getElementById("username-error")
const emailErr = document.getElementById("email-error")
const passErr = document.getElementById("password-error")
const confirmErr = document.getElementById("confirm-password-error")
 

