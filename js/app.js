

const container = document.querySelector("div")

const Resp = fetch ("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(data => data.forEach((item) => {
        const box  = document.createElement("div");
        const h1  = document.createElement("h1");
        const image = document.createElement("img");
        h1.classList.add("text-content")
        box.classList.add("border", "gap-4")
        image.classList.add("w-96", "h-52", "object-contain")
        image.src = item.image
        h1.innerText = item.title;
        box.appendChild(image)
        box.appendChild(h1)
        container.appendChild(box)
    }));

console.log(Resp);