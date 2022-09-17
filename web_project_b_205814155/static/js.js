function Greeting() {
    var time = new Date().getHours();
    let greeting;
    if (time < 12) {
        greeting = "Good morning to you! Here your results";
    }
    else if (time < 19) {
        greeting = "Good Day to you! Here your results";
    }
    else {
        greeting = "Good evening to you! Here your results";
    }
    document.getElementById("greet").innerHTML = greeting;
    document.getElementById("Report").style.display = "none";
}

function ShowHideReport() {
    var r = document.getElementById("Report");
    var rb = document.getElementById("ReportButton");
    if (r.style.display === "none") {
        rb.innerHTML = "Hide Report";
        r.style.display = "table";
        r.style.position = "center";
    }
    else {
        rb.innerHTML = "Show Report";
        r.style.display = "none";
    }
}

function validation() {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var u = document.getElementById("newUsername").value;
    var p = document.getElementById("newPassword").value;
    var massage = document.getElementById("massage");
    if (!fName.match(/^[a-zA-Z]*$/)) {
        massage.innerHTML = "*Invalid first name, please type again in English only";
        return false;
    }
    if (!lName.match(/^[a-zA-Z]*$/) && !lName.match(/^[a-zA-Z]+ [a-zA-Z]+$/) && !lName.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)) {
        massage.innerHTML = "*Invalid last name, please type again in English only";
        return false;
    }
    if (fName.length < 2) {
        massage.innerHTML = "*First name too short";
        return false;
    }
    if (fName.length > 15) {
        massage.innerHTML = "*First name too long";
        return false;
    }
    if (lName.length < 2) {
        massage.innerHTML = "*Last name too short";
        return false;
    }
    if (!City.match(/^[a-zA-Z]*$/) && !City.match(/^[a-zA-Z]+ [a-zA-Z]+$/) && !City.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)) {
        massage.innerHTML = "*Invalid city, please type again in English only";
        return false;
    }

    if (u.length < 4) {
        massage.innerHTML = "*Username must contain minimum 4 characters";
        return false;
    }
    if (p.length < 8) {
        massage.innerHTML = "*car number must contain 8 characters";
        return false;
    }
    if (!p.match(/(?=.*\d)/g)) {
        massage.innerHTML = "*car number must contain numbers";
        return false;
    }
    if (!p.match(/(?=.*[a-z])(?=.*[A-Z])/g)) {
        massage.innerHTML = "*car number must contain upper and lower case letters";
        return false;
    }
    if (!p.match(/^[a-zA-Z0-9]*$/)) {
        massage.innerHTML = "*car number must contain only digits & English letters";
        return false;
    }
    return true;
}