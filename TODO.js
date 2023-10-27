function legg_til() {
    const input = document.getElementById("skriv_inn");
    console.log(input.value);
    const node = document.createElement("li");
    const textnode = document.createTextNode(input.value);
    node.appendChild(textnode);
    
    const liste = document.getElementById("liste").appendChild(node);



}