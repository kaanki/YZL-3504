const colors = ["red", "yellow", "blue", "green", "pink", "aqua"];


for( let i = 0; i<10; i++){

    const rnd = Math.floor( Math.random() * colors.length );
   
    const boxEl = document.createElement("div");
    boxEl.style.width = "100px";
    boxEl.style.height = "100px";
    boxEl.style.color = "white";
    boxEl.style.backgroundColor = colors[rnd];
    boxEl.style.border = "1px solid white";
    boxEl.textContent = i + 1;

    document.body.append(boxEl);

}











