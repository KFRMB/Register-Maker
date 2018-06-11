var output = '';
var v = 0;
var huidigevraag ==0;

if (huidigevraag == 0){
    
    output += '<div class="vraag" id="vraag' + huidigevraag + '" style = "display:block";>';
    
    
    for (aantalantwoorden = 0; aantalantwoorden < vragen[huidigevraag].antwoordenmogelijk.length;i++){

        output += '<input type="radio" name ="antwoord" value="'+aantalantwoorden+'">'+vragen[huidigevraag].antwoordenmogelijk[aantalantwoorden]+'</input>';

    }
    
    huidigevraag == vragen.vervolgvraag[];
    
    output += '</div>';
}
}
if (huidigevraag == 1){
    vragen.vraag[0]
}
if (huidigevraag == 2){
    vragen.vraag[0]
}

document.getElementById('people').innerHTML= output;





//var output = '';
//var v = 0;
//var huidigevraag = 0;
//
////hier loopen we door de vragen heen en zetten we ze neer
//for(v = 0; v < vragen.length; v++){
//
//output += '<div class="vraag" id="vraag' + v + '" style = "display:block";>';
////output += '<input type="hidden" name="vraag" value="' + v + '"></input>';
//    
////hier maken we de radio buttons van de antwoord mogelijkheden    
//for (i = 0; i < vragen[v].antwoordenmogelijk.length;i++){
//
//output += '<input type="radio" name ="antwoord" value="'+i+'">'+vragen[v].antwoordenmogelijk[i]+'</input>';
//
//}
//
//output += '</div>';
//
//}
//
//
//document.getElementById('people').innerHTML= output;
//
//vragen.indexOf(vragen.vervolgvraag());
