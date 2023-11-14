function sendMail(contactForm) {
    emailjs.send("service_jthswbj", "alma", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("successful", response);
        },
        function(error) {
            console.log("failiure", error);
        }
    );
    return false;
}