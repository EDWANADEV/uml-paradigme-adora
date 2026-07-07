class product{
    constructor(name, quantify,pu){
        this.name=name
        this.quantify=quantify
        this.pu=pu
    }
    total_price(){
        return this.quantify*this.pu
    }
}

class cart{
    constructor(){
        this.products=[]
    }
    add_product(){
        this.products.push(this.products)
    }
    aply_discount(){
        const reduce=(this.total_price()*10)/100
    }
    get_total(){
        var total=this.total_price()
        if (total>50000){
            total-=this.aply_discount()
        }
    }
}
alert("🎇"+ total)