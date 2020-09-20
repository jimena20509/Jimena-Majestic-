


$(document).ready(function () {
    console.log('estoy listoo')

    $('#btnGato').click(gatoPrecionado);
    $('#btnloro').click(lorosPrecionado);
    $('#btnChi').click(chiguirosPrecionado);

    function gatoPrecionado() {
        $('.gatos').addClass('seleccionado');
        $('.loros').removeClass('seleccionado');
        $('.chiguiros').removeClass('seleccionado');
        $('#btnGato').hide('slow');
        $('#btnloro').show('slow');
        $('#btnChi').show('slow');

    }
    
    function lorosPrecionado() {
        $('.gatos').removeClass('seleccionado');
        $('.loros').addClass('seleccionado');
        $('.chiguiros').removeClass('seleccionado');
        $('#btnGato').show('slow');
        $('#btnloro').hide('slow');
        $('#btnChi').show('slow');
    }
    
    function chiguirosPrecionado() {
        $('.gatos').removeClass('seleccionado');
        $('.loros').removeClass('seleccionado');
        $('.chiguiros').addClass('seleccionado');
        $('#btnGato').show('slow');
        $('#btnloro').show('slow');
        $('#btnChi').hide('slow');
    }
    
})

