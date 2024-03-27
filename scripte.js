


const form = document.getElementById("contact-form");

function validateForm() {
    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById("fullName");
    const fullNameError = fullName.nextElementSibling;
    if (fullName.value.trim() === "") {
        fullNameError.textContent = "Name is required*";
        isValid = false;
    } else {
        fullNameError.textContent = "";
    }

    // Validate Email
    const email = document.getElementById("email");
    const emailError = email.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required*";
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Phone Number
    const phone = document.getElementById("phone");
    const phoneError = phone.nextElementSibling;
    const phoneRegex = /^\d{10}$/;
    if (phone.value.trim() === "") {
        phoneError.textContent = "Phone number is required*";
        isValid = false;
    } else if (!phoneRegex.test(phone.value.trim())) {
        phoneError.textContent = "Enter a valid 10-digit phone number";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Validate Subject
    const subject = document.getElementById("subject");
    const subjectError = subject.nextElementSibling;
    if(subject.value.trim() === ""){
      subjectError.textContent = "Subject is required*"
    } else{
      subjectError.textContent = ""
    }
    // You can add validation for subject here

    // Validate Message
    const textMessage = document.getElementById("textMessage");
    const textMessageError = textMessage.nextElementSibling;
    if (textMessage.value.trim() === "") {
        textMessageError.textContent = "Message is required*";
        isValid = false;
    } else {
        textMessageError.textContent = "";
    }
    // You can add validation for message here

    return isValid;
}

function sendEmail() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const textMessage = document.getElementById("textMessage").value;

    const messageBody = `Full Name: ${fullName} <br> Email: ${email} <br> Phone: ${phone} <br> Subject: ${subject} <br> Text Message: ${textMessage}`;

    console.log("Sending email...", messageBody); // Log message body

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "danielcx532@gmail.com",
        Password: "7F225B4F50DA6780FB02BEEF8E72746F2F04",
        To: "danielcx532@gmail.com",
        From: "danielcx532@gmail.com",
        Subject: subject,
        Body: messageBody,
    }).then((message) => {
        console.log("Email sent response:", message); // Log email send response
        if (message === "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
            });
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
        console.log("Form validated successfully. Sending email...");
        sendEmail();
    } else {
        console.log("Form validation failed. Email not sent.");
    }
});


// 60C094C416E879E7764F762A2AC797568300