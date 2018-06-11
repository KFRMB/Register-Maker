// wil je nieuwe vragen maken? maak deze dan in het json bestand.

var LIBRARY = (function(){
    var my = {};

    var v = 0; // Dit is de varabelle die steeds optelt tot elke vraag er staat
    var x = 0; // Dit is de variabelle die elke vraag in het form zet
    var i = 0; // Dit is de variabelle die elke radio button maakt 
    
    
    my.generateForm = function(vragen, buttonname){
        generateNEWForm(vragen, 0);

    }
    
//    pspsps
    
    function generateNEWForm(vragen, vraagId){
    var v = vraagId;
    var output = ''; // output is de gehele html regel die ik terug stuur

        //maak juiste aantal forms aan   
        
            output += '<div class="vraag" style="display: inline-block;" id="vraag' + v + '" ;>';
            
            //vul form met vraag  
            output += '<h1>'+vragen[v].vraag+'</h1>';    
            
            //vul form met knoppen en antwoorden         
            for (i = 0; i < vragen[v].antwoordenmogelijk.length;i++){
            
            //per antwoordmogelijkheid en knop wordt dit uitgevoerd. 
            output += '<input type="radio" name ="antwoord" value="'+i+'">'+vragen[v].antwoordenmogelijk[i]+'</input>';

            }
            
            output += '<button id="button" onclick="LIBRARY.nextPage(' + v + ')">volgende</button>';

            // sluit de Div af met </div>
            output += '</div>';

    // hier verander ik de gehele output div
    $("#people").html(output);
        
    }

//    HIERO
    my.nextPage = function(vraagId){
        // lees het antwoord van vraagId uit
        var vraagEl = document.getElementById('vraag' + vraagId);
        
        var radios = document.getElementsByName('antwoord');
        
        for(var q = 0, length = radios.length; q < length; q++){
            
            if (radios[q].checked){
                
                var volgendevraag = (vragen[vraagId].vervolgvraag[q]);
                
                vraagId = volgendevraag;
            }
        }
        
        $('.vraag').hide();
        
        $('#vraag' + vraagId + ' ').show();

        generateNEWForm(vragen, vraagId);
        }
        
    
    return my;
}());
