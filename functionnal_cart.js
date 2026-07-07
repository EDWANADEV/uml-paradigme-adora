const cart=[]
for (let i = 0; i < n; i++) {
    const name=prompt("enter the name of product")
    const prix_uni=parseInt(prompt("entrer le prix unitaire"))
    const qt=parseInt(prompt("entrer la quantite de produit"))
    cart.push({name,prix_uni,qt})
    
}
function total(cart=[]){
    let total =0
    cart.map((product)=>(
        total+=(prix_uni*qt)
    ))
    return total
}
if(total>50000){
    total-=(total*0.1)
}
alert( "🎇"+ total)