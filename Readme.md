
                            RegisterMaker Library - Gemaakt door: Kevin Frambach
                                Fontys Hogeschool - FHICT Media Design
                                        laatste update: 09-06-2018
                                                versie: 1.3

# UPDATE LOG

Versie 1.3: Gefixt dat vragen naar elkaar linken en de juiste vraag wordt getoond.

Versie 1.2: Functie toegevoegd zodat vervolgvraag getoond kan worden + code in library vorm gezet.

Versie 1.1: Ervoor gezorgd dat niet alle vragen gelijk worden geshowt.

Versie 1.0: Code samengevoegd met Alexander Koselka zijn code, 4 forms worden gemaakt en uitgelezen.

# LIBRARY INFO

Het doel van de library is het interactiever maken van het registratie proces, omdat tegenwoordig
mensen niet snel registratie formulieren vertrouwen en niet snel hun informatie willen achterlaten
heb ik een library gemaakt die interactie kan hebben met de gebruiker. Het is nog ver van af maar 
het begin staat er al.

# HOW TO USE

RegisterMaker.js werkt en hier hoeft NIETS in aangepast te worden. Alleen het CSS, JSON en je eigen HTML bestand moeten aangepast worden naar eigen gebruik. 

## Het toevoegen van jQuery

Omdat mijn library gebruik maakt van jQuery moet je dit ook oproepen in je html bestand, dit doe je door de volgende code toe te voegen in je header:

		<script src="http://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" crossorigin="anonymous"></script>

## Het linken naar het JSON en Javascript bestand
Om er voor te zorgen dat je html ook echt het formulier gaat genereren en de javascript code ziet, moet je in je html code een referentie maken naar deze twee bestanden. Dit doe je door het volgende toe te voegen voor het eindje van je body:

	<script src=" (jouw directory waarin de waardes staan) /values.json"></script>
	<script src=" (jouw directory waar het javascript staat) /registermaker.js"></script>

## Het aanroepen en maken van een formulier

Om er voor te zorgen dat wanneer je op de registreer knop drukt het formulier wordt gemaakt moet je een kleine button plaatsen met hierin een referentie naar de library functie die uitgevoerd moet worden. Een voorbeeld van een registreer button kan zo zijn:

	<button id="registerbutton" onclick="LIBRARY.generateForm(vragen, registerbutton)">Register now</button>

Je kan natuurlijk ook je eigen button maken maar vergeet niet om het onclick event toe te voegen met hierin de referentie naar het uit te voeren stuk code van de library én de button dezelfde ID naam te geven. Je hoeft verder niets aan de parameters aan te passen.

## Het aanpassen van het JSON bestand
bij het aanpassen van het JSON bestand moeten de namen blijven staan, alleen de waardes van de namen kunnen aangepast worden. Wil je iets toevoegen? lees dan goed de structuur hier onder, het JSON bestand is gemaakt op de manier waarop het uitgelezen wordt als een array, hou er rekening mee dat als je je array afsluit de laatste vraag geen , bevat na de blokhaken []
        
## Gebruikte waardes JSON:
        
        id = "0",
        
   Dit is het vraag id, je begint bij 0 en naar maten je meer vragen maakt ga je gewoon verder met tellen.
        je MOET je begin vraag met id=0 beginnen anders ziet de library niet welke vraag hij als eerste moet
        pakken. 
        
        vraag: "hoe oud ben je?", 
        
  Dit is de inhoud van de vraag die je wilt stellen, je kunt hier je eigen tekst in plaatsen.
        
        antwoordenmogelijk: ["20-30","30-40"], 
        
   Dit zijn de antwoord mogelijkheden, je kan er hier zoveel antwoordmogelijkheden inzetten als je zelf
        wilt maar vergeet niet tussen de "" een , te zetten wanneer er meer opties zijn.
        
        vervolgvraag: ["2", "2"], 
        
   Het aantal strings in de vervolgvraag MOET gelijk zijn aan het aantal antwoordmogelijkheden, de eerste
        string die je bij antwoordenmogelijk hebt gezet zal de eerste waarde pakken van de vervolgvraag.
        

## Het aanpassen van het CSS bestand
Bij het aanpassen van de stijl van de forms zit geen grens, het enige waar je op moet letten is dat je de display functie niet gebruikt, dit wordt automatisch gedaan door het javascript bestand. Stijl, lettertype etc. kunnen gewoon aangepast/toegevoegd worden.


# FAQ

Q:	Ik heb het JSON bestand aangepast maar krijg de foutmelding dat ik de vragen niet kan uitlezen.
A:		Je moet je laatste JSON vragen set afsluiten zonder komma. 

Q:	Ik heb het CSS bestand aangepast maar er komt nu geen form?
A:		Zet je display waardes uit in je CSS bestand.


