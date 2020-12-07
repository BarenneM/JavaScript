//EXERCICE 1

// const fibo = [0,1,2,3,5];

// //n = n-2 + n-1


//     let n = 0;
//     let n1 = 0;
//     let n2 = 1;

//     for (let i = 3; i< 50; i++) {

//         n1 = fibo[i];
//         n2 = fibo[i+1];
//         n = n1 + n2 ;
//         //n1 = n2;
//         //n2 = n ;

//         fibo.push(n);

//         //console.log(n);
        
//     }

//     console.log(fibo);

//EXERCICE 2

function puissance (nb, P) {

    if (P === 0) return  1;
    else if (P === 1) return nb;

    else {
        let produit = nb;
        for (let i=1; i<Math.abs(P); i++) {
           produit = produit * nb;
        }
        if (P>0) return produit;
        else if (P<0) return 1/produit;
    }
}

console.log(puissance(2, 0));
console.log(puissance(2, 1));
console.log(puissance(2, 4));
console.log(puissance(2, -4));


