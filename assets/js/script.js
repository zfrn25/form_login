function showHide(){
    const inputan = document.getElementById("PasswordKu");
    if (inputan.type === "password") {
        inputan.type = "text";
    } else {
        inputan.type = "password";
    }
}