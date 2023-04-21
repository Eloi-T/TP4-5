$(document).ready(function() {
    // Lorsque le formulaire est soumis
    $('#login-form').submit(function(event) {
        // Empêche l'envoi du formulaire
        event.preventDefault();
        // Récupère les champs du formulaire
        var username = $('#username').val();
        var password = $('#password').val();
        // Envoie une requête ajax en POST avec les deux champs soumis vers l'URL du formulaire
        $.ajax({
            url: $(this).attr('action'),
            type: 'post',
            dataType: 'json',
            data: {
                username: username,
                password: password
            },
            success: function(data) {
                // En cas de succès, on remplace le formulaire par le message de succès en vert
                if (data.success) {
                    $('#login-form').replaceWith('<p class="success">' + data.message + '</p>');
                } else {
                    // En cas d'erreur, on affiche le message en rouge au-dessus du formulaire
                    $('#message').html('<p class="error">' + data.message + '</p>');
                }
            },
            error: function() {
                // En cas d'erreur de communication avec le serveur, on affiche un message générique
                $('#message').html('<p class="error">Une erreur est survenue lors de la communication avec le serveur.</p>');
            }
        });
    });

    // Rajoute un évènement à la saisie sur chaque champ
    $('#username, #password').on('input', function() {
        var value = $(this).val();
        var length = value.length;
        // Enlève la couleur rouge des bords du champ si au moins une lettre est saisie et la remet si le champ est vide à nouveau
        if (length > 0) {
            $(this).removeClass('has-error');
        } else {
            $(this).addClass('has-error');
        }
        // Met les bords en rouge si le nombre de caractères saisis est > à 255
        if (length > 255) {
            $(this).addClass('has-error');
        }
    });
});
