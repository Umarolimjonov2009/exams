const select1=document.getElementById("select1");
const select2=document.getElementById("select2");
const input=document.getElementById("input");
const box = document.getElementById("box");
const boxota = document.getElementById("box-ota");
let mahsulot;

async function getData(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    ish(data);
    mahsulot=data
    
}

getData()

function ish(mahsulot){
    boxota.innerHTML="";
    mahsulot.map(o=>{
        const div=document.createElement("div");
        div.classList.add("box");
        div.innerHTML=`
        <img src="${o.image}" alt="">
        <h2>${o.title}</h2>
        <p class="p">${o.category}</p>
        <p>Narxi: ${o.price}</p>
        
        `
        boxota.appendChild(div)
    })
}

select2.addEventListener("change",()=>{
    if(select.value=="a"){
        const d= mahsulot.sort((o1,o2)=> o1.price-o2.price);
        ish(d);
    }else{
        const d= mahsulot.sort((o1,o2)=> o2.price-o1.price);
        ish(d);
    }
});
