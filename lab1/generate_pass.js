function generatePassword() {
    let password_len = document.getElementById('password_len').value;
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';
    for (let i = 0; i < password_len; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('password').innerHTML = password;

}