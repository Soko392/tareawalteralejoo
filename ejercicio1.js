function calcular() {
    // Constantes de DOM
    const inputBase = document.getElementById('base');
    const inputAltura = document.getElementById('altura');
    const spanSup = document.getElementById('sup');

    // Variables de ingreso de datos
    let base = inputBase.value;
    let altura = inputAltura.value;

    // Calculo de la superficie
    sup = base * altura / 2;

    // Mostrar la superficie
    spanSup.innerHTML = sup;
}

function calcular2() {
    // Constantes de DOM
    const inputBase = document.getElementById('base2');
    const inputAltura = document.getElementById('altura2');
    const spanSup = document.getElementById('sup2');
    const spanPer = document.getElementById('per2')

    // Variables de ingreso de datos
    let base2 = parseFloat(inputBase.value);
    let altura2 = parseFloat(inputAltura.value);

    // Calculo de la superficie
    sup2 = base2 * altura2;

    // Calculo del Perimetro
    per2 = 2 * (base2 + altura2);

    // Mostrar la superficie
    spanSup.innerHTML = sup2;
    spanPer.innerHTML = per2;
}

function calcular3() {
    // Constantes de DOM
    const inputRadio = document.getElementById('radio3');
    const inputAltura = document.getElementById('altura3');
    const spanVol = document.getElementById('vol3');
    const spanArea = document.getElementById('area3')
    const PI = Math.PI

    // Variables de ingreso de datos
    let radio3 = parseFloat(inputRadio.value);
    let altura3 = parseFloat(inputAltura.value);

    // Calculo del volumen
    vol3 = PI * radio3 ^ 2 * altura3;

    // Calculo del area
    area3 = 2 * PI * radio3 * altura3;

    // Mostrar la superficie
    spanVol.innerHTML = vol3;
    spanArea.innerHTML = area3;
}

function calcular4() {
    // Constantes de DOM
    const inputPrecio = document.getElementById('precio4');
    const inputPago = document.getElementById('pago4');
    const spanVuelto = document.getElementById('vuelto4');

    // Variables de ingreso de datos
    let precio4 = parseFloat(inputPrecio.value);
    let pago4 = parseFloat(inputPago.value);

    // Calculo del vuelto
    vuelto4 = precio4 - pago4

    // Mostrar el vuelto
    spanVuelto.innerHTML = vuelto4;
}

function calcular5() {
    // Constantes de DOM
    const inputDias5 = document.getElementById('dias5');
    const spanSegs5 = document.getElementById('segs5');
    const spanDiasSeg5 = document.getElementById('diasseg5')

    // Variables de ingreso de datos
    let dias5 = parseFloat(inputDias5.value);

    // Calculo de los segundos
    segs5 = dias5 * 24 * 60 * 60;

    // Mostrar los segundos en un dia
    spanDiasSeg5.innerHTML = dias5;
    spanSegs5.innerHTML = segs5;
}

