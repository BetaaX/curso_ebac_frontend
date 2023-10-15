$(document).ready(function () {
    $('#formTask').on('submit', function (e) {
        e.preventDefault(); //Previne que a página não seja recarregada após o submit.
    })

    $('#phoneNumber').mask('(00) 00000-0000');

    $('#cpfNumber').mask('000.000.000-0');

    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            name: {
                required: true,
            }, 
            email: {
                required: true,
            }, 
            phoneNumber: {
                required: true,
            },
            cpfNumber: {
                required: true,
            },
            cep: {
                required: true,
            },
            address: {
                required: true,
            }
        }
    })
})