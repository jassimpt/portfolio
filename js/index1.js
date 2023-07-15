function sendMail() {
    // alert("clicked")
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_a9htojm"
    const templateID = "template_cyz49dt"

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = ""
                document.getElementById("email").value = ""
                document.getElementById("subject").value = ""
                document.getElementById("message").value = ""
                console.log(res);
                alert("your message submitted successfully")
            }
        )
        .catch((err) => console.log(err));
}

