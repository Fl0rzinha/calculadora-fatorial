let resultado = document.getElementById("resultado")

function calc_permutacao(h) {
    // transforma a variável em um número para ser possível fazer a conta
    let n = Number(document.getElementById(h).value)
    
    if(n < 0) {
        resultado.innerHTML = '"n" não pode ser menor que 0'
    }
    else {
        let perm = math.factorial(n);

        resultado.innerHTML = perm;
    }
}

function calc_arranjo(h, j) {
    let n = Number(document.getElementById(h).value)
    let p = Number(document.getElementById(j).value)
    
    if(n < p) {
        resultado.innerHTML = '"n" não pode ser menor que "p"'
    }
    else {
        let final = math.factorial(n) / math.factorial(n - p);

        resultado.innerHTML = final;
    }  
}

function calc_combinacao(h, j) {
    let n = Number(document.getElementById(h).value)
    let p = Number(document.getElementById(j).value)
    
    let final = math.combinations(n, p);

    resultado.innerHTML = final;
}