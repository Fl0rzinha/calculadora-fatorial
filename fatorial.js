function fatorial(m, imprimir) {
    let n = Number(document.getElementById(m).value)
    let resultado = document.getElementById(imprimir)

    if (n < 0) {
        resultado.innerHTML = "Número negativo, sem fatorial.";
    } else if (n == 0 || n == 1) {
        resultado.innerHTML = 1;
    } else {
        // contador começa em 2 pq um fatorial não pode começar em 1
        let contador = 2;
        let fatorial = 1;
        
        // contador começa em 2, e vai sendo adicionado 1 unidade a cada loop do while, até chegar no valor de "n" que ele vai interromper o loop
        while (contador <= n) {
            // fatorial começa em 1, multiplica por contador(2), e fica nesse looping até terminar o while
            fatorial = fatorial * contador;

            // ex "n=4" -> conta usando fatorial e contador: 1 = 1x2(da 2) -> 2 = 2x3(da 6) -> 6 = 6x4(da 24) e assim sugestivamente até chegar no valor de n, resultando no fatorial.
            contador++;
        }

        resultado.innerHTML = fatorial;
    }
}