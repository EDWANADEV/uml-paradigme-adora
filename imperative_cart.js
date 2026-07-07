alert(" 👋 veillez entrer les informations consernant la liste")
const n= parseInt(prompt("combien de produit compte votre liste?"))
var s=0
for (let i = 0; i < n; i++) {
    const name=prompt("enter the name of product")
    const prix_uni=parseInt(prompt("entrer le prix unitaire"))
    const qt=parseInt(prompt("entrer la quantite de produit"))
     var  prix_total=prix_uni*qt
     s+=prix_total

}
if (s>50000) {
    const reduction=(s*10)/100
    s-=reduction
}
alert("votre depense est de:"+ s)