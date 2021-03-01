const mainContent = document.querySelector(".content");

const createHeader = function (){
  const header = document.createElement('div');
  mainContent.appendChild(header)
    header.innerHTML = `
    <div class="container-fluid">
      <div class="row col-12 text-center">
        <h1>Jojo's To Do's</h1>
      </div>
    </div>`;
}

const createNav = function (){
  const nav = document.createElement('div');
  mainContent.appendChild(nav);
    nav.innerHTML = `
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active home" aria-current="Home" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link menu" href="#">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link contact" href="#">Contact</a>
      </li>
    </ul>`
}

const createMain = function (){
  const main = document.createElement('div');
  mainContent.appendChild(main)
    main.innerHTML = `
    <div class="container-fluid">
      <div class="row col-12">
      <div class='left column col-3 border'>
        <ul class="list-group notebooks">
        </ul></div>
        <div class='right column col-9 border'>
        <ul class="list-group todos">
        </ul></div>
    </div>`;
}

const createModal = function (btnText, section, modalID) {
  (function createNewModalButton () {
      const sectionToAppend = document.querySelector(`.${section}`)
      const button = document.createElement('li');
      button.classList.add('list-group-item')
      sectionToAppend.appendChild(button)
        button.innerHTML = `
          <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalID}">
          ${btnText}
        </button>`
  })();
  (function CreateNewModal () {
    const modal = document.createElement('div');
    mainContent.appendChild(modal)
      modal.innerHTML = `
      <div class="modal fade" id="${modalID}" tabindex="-1" aria-labelledby="${modalID}Label" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${modalID}Label">${btnText}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
  })();
}

// const navBarItemSelectors = function () {
//   const homeButton = document.querySelector('.home');
//   const menuButton = document.querySelector('.menu');
//   const contactButton = document.querySelector('.contact');
//   homeButton.addEventListener('click', drawTabs.drawHome)
//   menuButton.addEventListener('click', drawTabs.drawMenu)
//   contactButton.addEventListener('click', drawTabs.drawContact)

// }

// const drawTabs = {
//   drawHome() {
//       mainContent.innerHTML = '';
//       createHeader();
//       createNav();
//       navBarItemSelectors();
//       mainImage();
//       mainText()  
//     },
//   drawMenu() {
//       mainContent.innerHTML = '';
//       createHeader();
//       createNav();
//       navBarItemSelectors();
//       createMenu();
//   },
//   drawContact() {
//     mainContent.innerHTML = '';
//     createHeader();
//     createNav();
//     navBarItemSelectors();
//     createContact();
//   }
// }

export {createHeader, mainContent, createNav, createMain, createModal}
