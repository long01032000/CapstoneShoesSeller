let prodList = [];
const productList = () => {
    let promise = axios({
        url : "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
    });

    promise.then((res) => {
        prodList = res.data.content;
        console.log(prodList)
       renderProd()
       renderSlide()
    })
    promise.catch((err) => {}); 
};

const renderSlide = () => {
  let html = "";
  for (let prod of prodList) {
   html= `
    <div class="carousel-item active} d-flex">
                  <img src=${prod.image} alt="...">
                  <div class="productItem">
                  <div class="productItem-content">
                    <h1>${prod.name}</h1>
                    <p>${prod.description}</p>
                    <a href="./detail.html?productid=${prod.id}" class="btn bg-warning text-white">Buy now</a>
                  </div>
                  </div>
                </div>
    `
  }
  document.getElementById("carousel").innerHTML = html;
}

const renderProd = () => {
    let html = "";
    for (let prod of prodList){
        html+= ` <div class="col-4">
        <div class="card text-left">
          <img class="card-img-top" src=${prod.image} alt="">
          <div class="card-body">
            <h4 class="card-title mb-2">${prod.name}</h4>
            <span class="card-text mb-2">${prod.description}</span>
          </div>
          <div class="card-footer">
          <a href="./detail.html?productid=${prod.id}" class="btn bg-warning text-white">Buy now</a>
            <a class="btn text-dark" style="background: "#DEDDDC"">${prod.price}$</a>
          </div>
        </div>
    </div>`
    }
    document.getElementById("product").innerHTML=html;
}


productList();


