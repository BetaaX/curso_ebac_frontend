document.getElementById('numericFields').addEventListener('submit', function(e) {
    const B = document.getElementById('B').value;
    const A = document.getElementById('A').value;

    if (parseInt(A) > parseInt(B)){
        alert("A validação foi interrompida, pois o número B necesita ser maior que o A.")
        e.preventDefault
    } else {
        alert("Tudo certo.")
    }
})