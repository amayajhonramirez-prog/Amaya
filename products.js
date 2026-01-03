const products=[
{id:1,name:"PlayStation 5 Slim",price:2130999},
{id:2,name:"Xbox Series X",price:3250999},
{id:3,name:"Nintendo Switch OLED",price:1599999},
{id:4,name:"iPhone 15 Black",price:3405999},
{id:5,name:"GTA VI Xbox",price:300000}
];

const catalogo=document.getElementById("catalogo");
products.forEach(p=>{
 const d=document.createElement("div");
 d.className="card";
 d.innerHTML=`<h3>${p.name}</h3><p>$${p.price.toLocaleString()} COP</p>
 <button onclick="addToCart(${p.id})">Agregar</button>`;
 catalogo.appendChild(d);
});