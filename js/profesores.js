
$(document).ready(function () {

    $('#conte-crear').hide();  
    $('#conte-Edit').hide();  

    
    $('#btnCrear').click(function () {
        $('#conte-crear').show('fast');
        $('#btnCrear').hide(); 
    })  
    
    $('#btnCancelarCrear').click(function () {
        $('#conte-crear').hide('fast');
        $('#btnCrear').show(); 
    })

    var codigoFila  = 0;

    
    $( 'table').on('click','.editRow',function () {
        $('#conte-Edit').show('fast');

        f =  $(this).parent().parent();
        codigoFila = f.find('th').html();

        var a =f.find('.nombre').text();
        $('#staticEmailEdit').val(a);

        var b =f.find('.sexo').text();
        $('#inputSexoEdit').val(b);
    })

    
    $('#frmCrear').submit(function () {
        a = $("#staticEmail").val();
        b = $("#inputSexo").val();
        
        $('table tbody').append(
        `
            <tr>
                <th>4</th>
                <td>${a}</td>
                <td>${b}</td>
                <td>
                    <a href="#" class="eliminarRow">Eliminar</a>
                    <a href="#" class="editRow">Edit</a>
                </td>
            </tr>
        `
        );

        $("#respuesta").html('Tu email es ' + a + ' Y tu password es '+ b);

        event.preventDefault();
    })
    $('#frmEdit').submit(function () {
        a = $("#staticEmailEdit").val();
        b = $("#inputSexoEdit").val();

        fila = ($('#fila-' + codigoFila));
        fila.find('.nombre').html(a)
        fila.find('.sexo').html(b)
        event.preventDefault();
    })
    
    
    $('table').on('click','.eliminarRow',function () {

        const resp = confirm('Estas seguro de eliminar?')

        if (resp) {
            $(this).parent().parent().remove();

        }
    })



})