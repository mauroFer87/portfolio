
	  
 const serviceID = 'serviceID';
   const templateID = 'templateID';
   const clientID = 'clientID';

$(document).ready(function() {
    emailjs.init(clientID);

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();

        let btnEnviar = $('#submit-button');

        // Cambiar el texto del botón y deshabilitarlo
        btnEnviar.text('Enviando...').attr('disabled', true);

        emailjs.sendForm(serviceID, templateID, this)
            .then(function(response) {
                console.log('Éxito:', response);
                alert('¡Correo enviado exitosamente!');
                // Restaurar el texto del botón y habilitarlo de nuevo
                btnEnviar.text('Enviar Mensaje').attr('disabled', false);
            }, function(error) {
                console.error('Error:', error);
                alert('Error al enviar el correo.');
                // Restaurar el texto del botón y habilitarlo de nuevo
                btnEnviar.text('Enviar Mensaje').attr('disabled', false);
            });
    });
});
