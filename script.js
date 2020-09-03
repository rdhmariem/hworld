document.write("<H1>Salut !!! Dérige-toi vers la console, une surprise t'attend</H1>");
var rep = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.write("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
if (rep>25) 
	console.log("SORRY");
else
{
	var esp = rep-1;
	var eto = 1;
	console.log(esp);
	var espace = "";
	var etoile = "";
	var ch = "";
	for (var i = 0; i < rep; i++)
	{
		for (var j = 0; j<esp; j++)
			espace = espace+" ";
		for (var k  = 0; k<eto; k++)
			etoile = etoile +"#";
		ch = espace+etoile;
		console.log(ch);
		ch="";
		espace = "";
		etoile = "";
		esp = esp - 1;
		eto = eto+2;
	}
}