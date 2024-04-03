function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ramgpal912@gmail.com",
        Password : "FFCAA469E9D1DA79F7CE954FB5D93250179F",
        To : 'ramgpal912@gmail.com',
        From : "ramgpal912@gmail.com",
        Subject : document.getElementById('Subject'),
        Body : "Name: " + document.getElementById('Name') + "Email: " + document.getElementById('Email') + "Message: " + document.getElementById('Message')
    }).then(
      message => {
        if(message == "OK")
        {
        alert(message) } 
    else console.log(message);}
    );
}