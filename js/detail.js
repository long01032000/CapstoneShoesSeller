window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);

  //call api load lên giao diện
};

let detailList = [];
const detail = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
    method: "GET",
  });

  promise.then((res) => {
    detailList = res.data.content;
    console.log(detailList);
    renderDetail();
  });
  promise.catch((err) => {});
};

const renderDetail = () => {
  let html = "";
  html += `  <div class="col-6">
          <img src=${detailList.image} alt="..."  style="width: 70%;
          margin-left: 65px;"" />
      </div>
      <div class="col-6">
          <h3>${detailList.name}</h3>
          <p>${detailList.description}</p>
          <h4 style ="font-weight: 500;
          font-size: 24px;
          line-height: 29px;
          
          color: #1ED90E;">Available Size</h4>
          <button class="btn text-dark me-2" style= "background-color: #6c757d21;
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 29px;
          /* identical to box height */
          
          
          color: #1E1D1D;
          "
          >
          ${detailList.size[0]}
          </button>
          <button class="btn text-dark me-2" style= "background-color: #6c757d21;
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 29px;">
          ${detailList.size[1]}
          </button>
          <button class="btn text-dark me-2" style= "background-color: #6c757d21;     font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;">
          ${detailList.size[2]}
          </button>
          <button class="btn text-dark me-2" style= "background-color: #6c757d21;     font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;">
          ${detailList.size[3]}
          </button>
          <button class="btn text-dark me-2" style= "background-color: #6c757d21;     font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;">
          ${detailList.size[4]}
          </button>
          <button class="btn text-dark me-2" style= "background-color: #6c757d21;     font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;">
          ${detailList.size[5]}
          </button>
          <button class="btn text-dark me-2" style= "background-color: #6c757d21;     font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;">
          ${detailList.size[6]}
          </button>
          <p class="text-danger mt-2" style="font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 36px;
          margin-bottom:0">${detailList.price}$</p>
          <button class="btn me-2" style="background: linear-gradient(180deg, #6181F3 0%, #7C97F5 99.48%);">+</button>
          1
          <button class="btn ms-2" style="background: linear-gradient(180deg, #6181F3 0%, #7C97F5 99.48%);">--</button>
          </br>
          
          <button class="btn text-white mt-2" style="background: linear-gradient(270deg, rgba(62, 32, 248, 0.9) 5.14%, #D017EE 89.71%);">Add to cart</button>
      </div>`;
  document.getElementById("detailProduct").innerHTML = html;
};

detail();
