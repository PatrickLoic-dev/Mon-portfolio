let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let messageEmail = document.getElementById('message');

let outs = document.getElementsByClassName("name_content");
let outsMail= document.getElementsByClassName("mail_content");
let outsmessage= document.getElementsByClassName("message_content");

inputName.onkeyup = function() {
  for(var i = 0; i < outs.length; i++){
    outs.item(i).innerHTML = inputName.value;
  }
}

inputEmail.onkeyup = function() {
    for(var i = 0; i < outsMail.length; i++){
        outsMail.item(i).innerHTML = inputEmail.value;
    }
  }


  messageEmail.onkeyup = function() {
    for(var i = 0; i < outsmessage.length; i++){
        outsmessage.item(i).innerHTML = messageEmail.value;
    }
  }

    // Récupérer la date actuelle
    var today = new Date();

    // Options pour formater la date
    var options = { weekday: 'long', day: 'numeric', month: 'long' };

    // Formater la date en utilisant les options
    var formattedDate = today.toLocaleDateString('en-US', options);

    // Afficher la date dans le span avec l'ID "dateDisplay"
    document.getElementById('dateDisplay').innerHTML = formattedDate;






    //Email sender
    (function() {
      // https://dashboard.emailjs.com/admin/account
      emailjs.init('rQ05_4g_j_PzCAVHL');
  })();

  //Email function
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('31fdbmu', 'vccnnof', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
 
  
