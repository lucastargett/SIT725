const cardList = [
  {
    title: "Grommets",
    image: "images/groms.png",
    link: "Grom Division",
    description: "Description for Grom Division"
  },
  {
    title: "Women",
    image: "images/womens.png",
    link: "Womens Division",
    description: "Description for Womens Division"
  },
  {
    title: "Mens",
    image: "images/mens.png",
    link: "Mens Division",
    description: "Description for Mens Division"
  },
  {
    title: "Adaptive",
    image: "images/adaptive.png",
    link: "Adaptive Division",
    description: "Description for Adaptive Division"
  },
];

const addCards = (items) => {
  items.forEach(item => {
    const cardHTML = `
      <div class="col s12 m6 center-align">
        <div class="card">
          <div class="card-image">
            <img src="${item.image}">
            <span class="card-title grey-text text-darken-4">${item.title}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="card-content">
            <p>${item.link}</p>
          </div>
        </div>
      </div>`;
    document.getElementById("card-section").innerHTML += cardHTML;
  });
};

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Materialize modal functionality
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  // Add the cards into the DOM
  addCards(cardList);
});

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Materialize select
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('#formSubmit').click(() => {
    submitForm();
  })
  getProjects();
  $('.modal').modal();
});

const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  })
};