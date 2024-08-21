$(document).ready(function() {
    // Inicialização do carousel usando a biblioteca Slick
    $('#carousel-images').slick({
        autoplay: true
    });

    // Toggle do menu hambúrguer
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    // Colocando a máscara no campo telefone
    $('#telefone').mask('(00) 00000-0000'), {
        placeholder: '(12) 12345-1234'
    }

    // Validação do formulário
    
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlenght: 3
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages:{
            nome:{
                required:'Por favor, informe seu nome',
                minlenght: 'O nome deve ter pelo menos 3 caracteres'
            },
            email:{
                required:'É necessário informar um e-mail válido'
            },
            mensagem:{
                required: 'A mensagem não pode ficar em branco'
            }
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    // Scroll suave para a seção de contato
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo);

        // Corrigido de 'ofset' para 'offset'
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
