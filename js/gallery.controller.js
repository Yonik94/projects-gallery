'use strict'
$(document).ready(initPage())
function initPage(){
    renderProjs();
}
function renderProjs() {
    var projs = getProjs();
    var $projsContHtml = $('.projs-container');
    var strHtmls = projs.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="onProjClick('${proj.name}')" href="#portfolioModal">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-github fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="${proj.img}" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${proj.title}</h4>
        <p class="text-muted">${proj.description}</p>
        </div>
        </div>`
    })
    var strHtml = strHtmls.join('');
    $projsContHtml.html(strHtml);
}
function onSendEmail(){
    //to get each input seprate selector
   var $contactInputs = $('input');
   var inputName = $contactInputs[0].value;
   var inputEmail = $contactInputs[1].value;
   var inputSubject = $contactInputs[2].value;
   var inputMsg = $contactInputs[3].value;
   var link = createEmailLink(inputName, inputEmail, inputSubject, inputMsg);
   window.location.assign(link, '_blank')
}
function createEmailLink(name, email, subject, body){
    var mailBody = `Email: ${email}\n${body}`
    var link = `https://mail.google.com/mail/?view=cm&fs=1&to=yehonatan121233@gmail.com&su=${subject}&body=${mailBody}`;
    return link;
}
function onProjClick(name){
    var proj = getProjById(name);
    renderModal(proj);
}
function renderModal(proj){
    var $modalBodyHtml = $('.modal-body');
    var strHtml = `<h2>${proj.title}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="${proj.img}" alt="">
                <p>${proj.description}</p>
                <ul class="list-inline">
                  <li>Published At: ${getDate(proj.publishedAt)}</li>
                </ul>
                <a href="${proj.url}"><button>Try project</button></a>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  $modalBodyHtml.html(strHtml)
}