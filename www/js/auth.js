// Initialize Firebase (from firebase-config.js)
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

firebase.initializeApp(firebaseConfig);

// Register function
function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert('Registration successful!');
            // Optionally, you can redirect to another page after registration
             window.location.href = 'login.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert('Login successful!');
            // Optionally, you can redirect to another page after login
            window.location.href = 'home.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
