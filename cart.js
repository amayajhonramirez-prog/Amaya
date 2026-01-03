let cart=[];
function addToCart(id){
 const p=products.find(x=>x.id===id);
 cart.push(p);
 updateCart();
}
function updateCart(){
 document.getElementById("cartCount").innerText=cart.length;
 let total=0;
 const div=document.getElementById("cartItems");
 div.innerHTML="";
 cart.forEach(p=>{total+=p.price;div.innerHTML+=`<p>${p.name}</p>`});
 document.getElementById("total").innerText=total.toLocaleString();
}
function finalizarCompra(){
 alert("Pedido recibido. Te contactaremos por WhatsApp.");
}