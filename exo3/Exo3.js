let a = prompt ('entrer la taille de votre tableau');

let tab = [];
let moy = 1;
let som =0 ;
for(let i=0;  i< a; i++ ){

    tab[i] = parseInt(prompt (`entrer tab${[ i]}`))
}
console.table(tab);

for(i = 1; i < tab.length ; i++)
    {
       som =som + tab[i];
    }
     moy = som / tab.length;
console.log('la moyenne est : ' + moy );

for(i = 1; i < a; i++)
    {
       if(tab[0] < tab[i])
           tab[0] = tab[i];
    }
console.log('le max est : ' + tab[0] );

for(i = 1; i < a; i++)
    {
       if(tab[0] > tab[i])
           tab[0] = tab[i];
    }
console.log('le min est : ' + tab[0] );