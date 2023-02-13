let a = prompt ('Entrez un nombre');

function premier(n) 
{
    
    if (n<2) {
        return false;
       }
    for (let i = 2; i <= n; i++) {
        if(n==2) return true;
        else if (n % i == 0) return false;
        else 
        return true;
    }
}

console.log(premier(a));