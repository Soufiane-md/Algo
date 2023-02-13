let a = prompt ('Entrez un nombre');

function facto(n) 
{
    let f =1, i=1;

    for (i=1 ; i <= n ; i++){
    f *= i;
        }
    return f;
}

console.log(`${a}!=`  +facto(a));