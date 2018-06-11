    var v = 0; // Dit is de varabelle die steeds optelt tot elke vraag er staat
    var x = 0; // Dit is de variabelle die elke vraag in het form zet
    var i = 0; // Dit is de variabelle die elke radio button maakt 
    
    my.generateForm = function(vragen, buttonname){
    
    var output = ''; // output is de gehele html regel die ik terug stuur

        //maak juiste aantal forms aan
        for(v = 0; v < vragen.length; v++){
        if(v==0){            
            output += '<div class="vraag" style="display: inline-block;" id="vraag' + v + '" ;>';
                    console.log(vragen[v].id);
            
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

            }
        }
        
        

        
        
    // hier verander ik de gehele output div
    $("#people").html(output);
             
    console.log("het form is gemaakt");
    }