
function HideOrder_display(){
    let show=document.getElementById("order_all")
    show.style.display="none"
    document.getElementById("order_table").reset()
}
function ShowOrder_display(){
    let show=document.getElementById("order_all")
    show.style.display="block"
}
function HideLoading(){
    let loading=document.getElementById("loading_all")
    loading.style.display="none"
}
function ShowLoading(k){
    let loading=document.getElementById("loading_all")
    loading.style.display="block"
    setTimeout(HideLoading,3000)
    if(k==1){
        document.getElementsByClassName("title1")[0].innerHTML="Burger Siêu nhân phô mai (cỡ vừa)"
        document.getElementsByClassName("title1")[1].innerHTML="Burger Siêu nhân phô mai (cỡ vừa)"
        document.getElementById("img_order").src='img/img burger/sieu_nhan_pho_mai_co_vua_1.jpg'
        document.getElementById("price").innerHTML=ChangeMoney(49000)
    }
    if(k==2){
        document.getElementsByClassName("title1")[0].innerHTML="Burger Siêu nhân phô mai bò Deluxe (cỡ vừa)"
        document.getElementsByClassName("title1")[1].innerHTML="Burger Siêu nhân phô mai bò Deluxe (cỡ vừa)"
        document.getElementById("img_order").src='img/img burger/cheese_ring_deluxe_1.jpg'
        document.getElementById("price").innerHTML=ChangeMoney(79000)
    }
    if(k==3){
        document.getElementsByClassName("title1")[0].innerHTML="Burger Whopper Bò Siêu nhân phô mai (cỡ lớn)"
        document.getElementsByClassName("title1")[1].innerHTML="Burger Whopper Bò Siêu nhân phô mai (cỡ lớn)"
        document.getElementById("img_order").src='img/img burger/cheese_ring_whopper_1.jpg'
        document.getElementById("price").innerHTML=ChangeMoney(132000)
    }
    setTimeout(ShowOrder_display,3100)
}
function SetPrice(Name){
    let price
    if(Name=="Burger Siêu nhân phô mai (cỡ vừa)"){
        price=49000
    }
    if(Name=="Burger Siêu nhân phô mai bò Deluxe (cỡ vừa)"){
        price=79000
    }
    if(Name=="Burger Whopper Bò Siêu nhân phô mai (cỡ lớn)"){
        price=132000
    }
    return price
}
function Sub(){
    let soluong=document.getElementById("quatily")
    let Name=document.getElementsByClassName("title1")[1].innerHTML
    let price=SetPrice(Name)
    if(soluong.value=="1"){
        return
    }else{
        document.getElementById("quatily").value=String(parseInt(soluong.value)-1)
        let opition=document.getElementById("order_select")
        let pricenew
        if(opition.value=="opition1"){
            pricenew=price
        }
        if(opition.value=="opition2"){
            pricenew=price+33000
        }
        if(opition.value=="opition3"){
            pricenew=price+5000
        }
        if(opition.value=="opition4"){
            pricenew=price+46000
        }
        if(opition.value=="opition5"){
            pricenew=price+23000
        }
        if(opition.value=="opition6"){
            pricenew=price+15000
        }
        if(opition.value=="opition7"){
            pricenew=price+40000
        }
        if(opition.value=="opition8"){
            pricenew=price+40000
        }
        if(opition.value=="opition9"){
            pricenew=price+22000
        }
        if(opition.value=="opition10"){
            pricenew=price+10000
        }
        document.getElementById("price").innerHTML=ChangeMoney(parseInt(soluong.value)*pricenew)
    }
}
function Plus(){
    let soluong=document.getElementById("quatily")
        document.getElementById("quatily").value=String(parseInt(soluong.value)+1)
        let opition=document.getElementById("order_select")
        let Name=document.getElementsByClassName("title1")[1].innerHTML
        let price=SetPrice(Name)
        let pricenew
        if(opition.value=="opition1"){
            pricenew=price
        }
        if(opition.value=="opition2"){
            pricenew=price+33000
        }
        if(opition.value=="opition3"){
            pricenew=price+5000
        }
        if(opition.value=="opition4"){
            pricenew=price+46000
        }
        if(opition.value=="opition5"){
            pricenew=price+23000
        }
        if(opition.value=="opition6"){
            pricenew=price+15000
        }
        if(opition.value=="opition7"){
            pricenew=price+40000
        }
        if(opition.value=="opition8"){
            pricenew=price+40000
        }
        if(opition.value=="opition9"){
            pricenew=price+22000
        }
        if(opition.value=="opition10"){
            pricenew=price+10000
        }
        document.getElementById("price").innerHTML=ChangeMoney(parseInt(soluong.value)*pricenew)
    }
function ChangeMoney(money){
    let moneyChange=money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
return moneyChange
}

function Opition_Type(){
    let opition=document.getElementById("order_select")
    let Name=document.getElementsByClassName("title1")[1].innerHTML
    let price=SetPrice(Name)
    if(opition.value=="opition1"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney(price*parseInt(soluong))
    }
    if(opition.value=="opition2"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+33000)*parseInt(soluong))
    }
    if(opition.value=="opition3"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+5000)*parseInt(soluong))
    }
    if(opition.value=="opition4"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+46000)*parseInt(soluong))
    }
    if(opition.value=="opition5"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+23000)*parseInt(soluong))
    }
    if(opition.value=="opition6"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+15000)*parseInt(soluong))
    }
    if(opition.value=="opition7"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+40000)*parseInt(soluong))
    }
    if(opition.value=="opition8"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+40000)*parseInt(soluong))
    }
    if(opition.value=="opition9"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+22000)*parseInt(soluong))
    }
    if(opition.value=="opition10"){
        soluong=document.getElementById("quatily").value
        document.getElementById("price").innerHTML=ChangeMoney((price+10000)*parseInt(soluong))
    }
}