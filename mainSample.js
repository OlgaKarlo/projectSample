function completeAndRedirect(){
    var form = document.forms['contacts'];
    text.innerHTML="Personal Details: " +
        "<br> Salutation : "+ form.elements.salutation.value + "" +
        "<br> First name : " + form.elements.firstname.value + "" +
        "<br> Last name : "+ form.elements.lastname.value + "" +
        "<br> Gender : " + form.elements.gender.value + "" +
        "<br> Date of birth : "+ form.elements.date.value + "" +
        "<br> Phone : " + form.elements.phone.value + "" +
        "<br> E-mail : " + form.elements.email.value + "" +
        "<br> Address : " + form.elements.address.value;
}