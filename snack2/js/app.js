const serieA =[
    {nome : "ROMA", gol : 0, falliSubiti :0 },
    {nome : "Lazie", gol : 0, falliSubiti :0 },
    {nome : "Inter", gol : 0, falliSubiti :0 },
    {nome : "Milan", gol : 0, falliSubiti :0 },
    {nome : "Juventus", gol : 0, falliSubiti :0 },
    {nome : "Atalanta", gol : 0, falliSubiti :0 },
];
console.log(serieA);

// nuovo array che conterra i nuovi oggett
let newSerieA =  [];
for(let i = 0; i < serieA.length; i++){
    // creo numeri random per gol e falli
    let randomGol = Math.floor(Math.random() * 5);
    let randomFouls = Math.floor(Math.random() * 9);
    
    // assegno gol e falli a ciascuna squadra nell'array serieA
    serieA[i].gol = randomGol;
    serieA[i].falliSubiti = randomFouls;
    
    // creo un nuovo oggetto per ogni squadra con solo nome e falliSubiti
    const squadraModificata ={
        nome : serieA[i].nome,
        falliSubiti: serieA[i].falliSubiti
    }
    // aggiungo il nuovo oggetto alla lista newSerieA
    newSerieA.push(squadraModificata);


}
// stampo la nuova serie A
console.log(newSerieA);
