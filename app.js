 let ops = document.querySelectorAll(".op");


const calculatrice = new Mincalcclassique("", "+");

 let bgcolor = calculatrice.getBgColor();
 let init_op = calculatrice.getOp();
selected_op.innerHTML = init_op;
bloc.style.backgroundColor = bgcolor;
ops.forEach(op => {
    op.addEventListener('click', function(){
        selected_op.textContent = op.textContent;
        calculatrice.setOp(op.textContent);
    })
});

function calcul()
{
    let nb1 = Number(first_nb.value);
    let nb2 = Number(second_nb.value);

    let resultat = calculatrice.calculer(nb1, nb2);
    result.textContent = resultat;
    
    console.log(resultat);
}

