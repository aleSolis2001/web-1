const instagram = document.getElementById("instagram")
instagram.addEventListener("click", function() {
    if(confirm("Serás redirigido a nuestro perfil de Instagram")){
        window.open("https://www.instagram.com/alesolis20_01/", "_blank")
    }
});
const laptops = [
    {
        id: "4325",
        name: "Notebook HP CI3 15-FD0002LA 1.8 8GB 256SD 15.6 FHD Dorado Mochila Travel", 
        price: "2.974.000 PYG ",
        img: "https://f.fcdn.app/imgs/debc20/www.bristol.com.py/brispy/9014/webp/catalogo/BS13182_BS13182_1/480x480/notebook-hp-ci3-15-fd0002la-1-8-8gb-256sd-15-6-fhd-dorado-mochila-travel-notebook-hp-ci3-15-fd0002la-1-8-8gb-256sd-15-6-fhd-dorado-mochila-travel.jpg"
    },
    {
     id: "8529",
     name: "Notebook Win I5 Gris I5-8279U 15.6 FHD 16GB 256GB SSD/W11P",
     price: "4.244.000 PYG",
     img:"https://f.fcdn.app/imgs/c4e54d/www.bristol.com.py/brispy/f88e/webp/catalogo/BS12029_BS12029_1/480x480/notebook-win-i5-gris-i5-8279u-15-6-fhd-16gb-256gb-ssd-w11p-notebook-win-i5-gris-i5-8279u-15-6-fhd-16gb-256gb-ssd-w11p.jpg"   
    },
    {
        id: "7891",
        name: "Notebook HP Caleron 1,1 4GB 125SSd 14",
        price: "2.000.000 PYG",
        img: "https://f.fcdn.app/imgs/6db3e2/www.bristol.com.py/brispy/8d1b/webp/catalogo/BS12664_BS12664_1/2000-2000/notebook-hp-celeron-1-1-4gb-128ssd-14-notebook-hp-celeron-1-1-4gb-128ssd-14.jpg"
    },
    // {   id: "1294",
    //     name: "All in One HP 205 G4 AMD R5",
    //     price: "7.684.000 PYG",
    //     img:"https://f.fcdn.app/imgs/50567f/www.bristol.com.py/brispy/bfa9/webp/catalogo/BS7915_BS7915_1/480x480/all-in-one-hp-205-g4-amd-r5-all-in-one-hp-205-g4-amd-r5.jpg"   
    // }
]
const phones =   [
    {   id: "43521",
        name: "Xioami Note 13 pro 256GB - Negro",
        price: "2.044.000 PYG",
        img: "https://f.fcdn.app/imgs/fa5f82/www.bristol.com.py/brispy/458e/webp/catalogo/123000_BS13577_1/1920-1200/celular-xiaomi-note-13-pro-256gb-negro.jpg"
    },
    {   id: "90134",
        name: "Oppo A38 128GB - Negro",
        price: "1.094.000 PYG",
        img: "https://f.fcdn.app/imgs/945d92/www.bristol.com.py/brispy/ce6f/webp/catalogo/PB1356263_BS13562_1/1920-1200/celular-oppo-a38-128gb-negro.jpg"
    },
    {   id: "41842",
        name: "Samsung S24 128GB 6,2 - Gris",
        price: "6.990.000 PYG",
        img: "https://f.fcdn.app/imgs/401d2e/www.bristol.com.py/brispy/a197/webp/catalogo/PB135888990_BS13588_1/1920-1200/celular-samsung-s24-128gb-6-2-negro.jpg"  
    }
]



const notebooksContainer = document.getElementById("notebooks")
for (item of laptops){
    let divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    divProducto.id = item.id

    let img = document.createElement("img");
    img.classList.add("producto-img")

    let precio = document.createElement("p");
    precio.classList.add("producto-precio");

    let nombre = document.createElement("p");
    nombre.classList.add("producto-nombre")
    
    nombre.innerHTML = item.name;
    img.src = item.img;
    img.alt = "Producto";
    precio.innerHTML = item.price;

    divProducto.appendChild(img);
    divProducto.appendChild(nombre);
    divProducto.appendChild(precio);
    
    notebooksContainer.appendChild(divProducto)

}
const phonesContainer = document.getElementById("phones")
for (item of phones){
    let divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    divProducto.id = item.id

    let img = document.createElement("img");
    img.classList.add("producto-img")

    let precio = document.createElement("p");
    precio.classList.add("producto-precio");

    let nombre = document.createElement("p");
    nombre.classList.add("producto-nombre")
    
    nombre.innerHTML = item.name;
    img.src = item.img;
    img.alt = "Producto";
    precio.innerHTML = item.price;

    divProducto.appendChild(img);
    divProducto.appendChild(nombre);
    divProducto.appendChild(precio);
    
    phonesContainer.appendChild(divProducto)
}
document.getElementById('home').addEventListener('click', function() {
    document.getElementById('logo-container').scrollIntoView({ behavior: 'smooth' });
});