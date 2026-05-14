function sendEmail(){
    const templateParams = {
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        contactnumber:document.querySelector("#contact").value,
        message:document.querySelector("#msg").value,

    }
    console.log(templateParams);
    
    emailjs.send(
        "service_czbx0l6",
        "template_1jxqgib",
        templateParams
    )

    .then(() => {
        alert("Email sent !!");
    })

    .catch((err) => {
        alert("Email not sent !!");
        console.log(err);
        
    });
}


