function completeAndRedirect(text = text) {
    let form = document.forms['myform'];
    text.innerHTML="Personal details: " +
        "<br> First name : "+ form.elements.fname.value +
        "<br> Gender : "+ form.elements.sex.value +
        "<br> Date of Birth : " + form.elements.date.value +
        "<br> Phone : "+ form.elements.tel.value +
        "<br> EMAIL : " + form.elements.email.value +
        "<br> Address : " + form.elements.message.value;
}