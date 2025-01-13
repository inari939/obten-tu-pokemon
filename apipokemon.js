$(document).ready(function(){
        $('#btnGetPokemon').click(function(){
            const numeroAgregado = Math.floor(Math.random() *130) + 1;
            
            $.ajax({
                url: 'https://pokeapi.co/api/v2/pokemon/1' + numeroAgregado,
                type:'GET',
                dataType: 'json',
                success: function(data){ //el data puede ser cualquier nombre
                    $('#pokemonInfo').html('<h2>' + data.name + '</h2>' +
                                           '<img src= "' + data.sprites.front_default +'" >' +
                                           '<p> Height: ' + data.height + '</p>' 
                                           + '<p> Weight: '+data.weight + '</p>');
                    //console.log(data.name); 
                },
                error: function(error){
                    console.log('algo salió mal', error);
                }
            }) //así se llama al ajax, estructura básica
        });


});


//trabajamos on jquery arriba

