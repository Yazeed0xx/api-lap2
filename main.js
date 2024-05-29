 async function pord(){
    const response = await fetch('https://fakestoreapi.com/products');
    
    


    
    const products = await response.json();
    console.log(products);

    products.forEach(elm=>{
        let price = document.createElement("p")
        let title = document.createElement("p")
        let img =   document.createElement("img")
        img.src = elm.image
        document.body.append(img)



    })
 }

 pord()

 
  



 
