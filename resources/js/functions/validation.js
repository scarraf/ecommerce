    $('.ui.form')
        .form({

        fields: {
        nome: {
        identifier: 'nome',
    rules: [
                        {
        type: 'empty',
    prompt: 'Digite seu nome'
}
]
},
                email: {
        identifier: 'email',
    rules: [
                        {
        type: 'email',
    prompt: 'Digite um e-mail Valido'
}
]
},
                phone: {
        identifier: 'phone',
    rules: [
                        {
        type: 'regExp[^\([1-9]{2}\) [2-9][0-9]{3, 4}\-?[0-9]{4}]',
    prompt: 'Digite um Telefone Valido (xx xxxxx-xxxx)'
}
]
},
                ass: {
        identifier: 'ass',
    rules: [
                        {
        type: 'empty',
    prompt: 'Digite um Assunto'
}
]
},
                msg: {
        identifier: 'msg',
    rules: [
                        {
        type: 'empty',
    prompt: 'Digite uma Mensagem'
}
]
},
                dropdowns: {
        identifier: 'dropdowns',
    rules: [
                        {
        type: 'empty',
    prompt: 'Please select a dropdown value'
}
]
},
                checkbox: {
        identifier: 'checkbox',
    rules: [
                        {
        type: 'checked',
    prompt: 'Please check the checkbox'
}
]
}
},


            onSuccess: function (event, fields) {

                var
        $form = $('.ui.form'),
        name = $form.form('get value', 'nome'),
        email = $form.form('get value', 'email'),
        phone = $form.form('get value', 'phone'),
        ass = $form.form('get value', 'ass'),
        msg = $form.form('get value', 'msg')


    sessionStorage.setItem("name", $('#nome').val());
    sessionStorage.setItem("email", $('#email').val());
    sessionStorage.setItem("phone", $('#phone').val());
    sessionStorage.setItem("ass", $('#ass').val());
    sessionStorage.setItem("msg", $('#msg').val());


    alert('Dados Salvos com Sucesso');

    $('.ui.form').form('reset')

    $("#nameexit").html("");
    $("#emailexit").html("");
    $("#phoneexit").html("");
    $("#assexit").html("");
    $("#msgexit").html("");

    console.log(fields)
    event.preventDefault();

},
})

    $("#nome").keyup(function () {

        $("#nameexit").html("<strong>Nome: </strong>" + $("#nome").val());

});

    $("#email").keyup(function () {

        $("#emailexit").html("<strong>E-mail: </strong>" + $("#email").val());

});

    $("#phone").keyup(function () {


        $("#phoneexit").html("<strong>Telefone: </strong>" + $("#phone").val());

});

    $("#phone").keydown(function (evt) {
        if ($("#phone").val().length == 2 && evt.keyCode != 8) {
        $("#phone").val($("#phone").val() + " ")
    }

    });


    $("#ass").keyup(function () {

        $("#assexit").html("<strong>Assunto: </strong>" + $("#ass").val());

});

    $("#msg").keyup(function () {

        $("#msgexit").html("<strong>Mensagem: </strong>" + $("#msg").val());

});


    $('#reload').click(function () {

        $('.ui.form')
            .form('set values', {
                nome: sessionStorage.getItem("name"),
                email: sessionStorage.getItem("email"),
                phone: sessionStorage.getItem("phone"),
                ass: sessionStorage.getItem("ass"),
                msg: sessionStorage.getItem("msg")
            })
            ;


        $("#nameexit").html("<strong>Nome: </strong>" + $("#nome").val());
        $("#emailexit").html("<strong>E-mail: </strong>" + $("#email").val());
        $("#phoneexit").html("<strong>Telefone: </strong>" + $("#phone").val());
        $("#assexit").html("<strong>Assunto: </strong>" + $("#ass").val());
        $("#msgexit").html("<strong>Mensagem: </strong>" + $("#msg").val());
});

    $('#clear').click(function () {

        $("#nameexit").html("");
    $("#emailexit").html("");
    $("#phoneexit").html("");
    $("#assexit").html("");
    $("#msgexit").html("");
})
