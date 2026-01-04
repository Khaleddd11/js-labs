
function day2Lab() {
    // 1. Name validation 
    var name;
    do {
        name = prompt("Enter your Name:");
    } while (!name || !isNaN(name));

    // 2. Phone number validation (number and length = 8)
    var phone;
    var phoneReg = /^[0-9]{8}$/;
    do {
        phone = prompt("Enter your Phone Number (8 digits):");
    } while (!phoneReg.test(phone));

    // 3. Mobile number validation (11 digits, starts with 010, 011, or 012)
    var mobile;
    var mobileReg = /^(010|011|012)[0-9]{8}$/;
    do {
        mobile = prompt("Enter Mobile Number (11 digits starting with 010|011|012):");
    } while (!mobileReg.test(mobile));

    // 4. Email validation 
    var email;
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    do {
        email = prompt("Enter your Email (e.g., abc@123.com):");
    } while (!emailReg.test(email));

    document.write("<h1>Welcome, " + name + "!</h1>");
    document.write("<u><b>Name:</b></u> " + name + "<br>");
    document.write("<u><b>Phone Number:</b></u> " + phone + "<br>");
    document.write("<u><b>Mobile Number:</b></u> " + mobile + "<br>");
    document.write("<u><b>Email:</b></u> " + email + "<br>");
}


day2Lab();