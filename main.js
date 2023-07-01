$(document).ready(function(){


    $('#carrossel').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav .container').slideToggle(2000);
    })
    $('#telefone').mask('(00) 00000-0000 ');
    });
    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            veiculo:{
                required:false
            },
            mensagem:{
                required:true
            }
        },
        messages:{
            nome:'Por favor insira seu nome',
            telefone:'por favor insira o dd de sua região e seu numero corretamente',
            email:'insira seu email corretamente',
            mensagem:'insira sua mensagem '
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`existem ${camposIncorretos} campos incorretos`)
            }}});

            $('.lista-veiculos button').click(function(){
                const destino = $('#contatenos')
                const nomeVeiculo = $(this).parent().find('h3').text();

                $('#veiculo').val(nomeVeiculo);

                $('html').animate({
                    scrollTop: destino.offset().top
                },2000)
            })
    