document.getElementById('cargarBtn').addEventListener('click', loadProducts);

const url = 'https://api.escuelajs.co/api/v1/products';

function getData(cat) {
    const options = {"method": "GET"};
    
    fetch(url + cat, options)
      .then((response) => {
        console.log(response);
        response.json().then((res) => {
            createCards(res);
            

        });
    })
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",
            `<div class="alert alert-danger" role="alert">
        ${err.message}
    </div>`);
    });
    }

    getData("");