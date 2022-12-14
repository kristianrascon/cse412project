//homelogo
$("#logo").click(function() {
    window.location.href = 'index.html';
  });
  //Back Button
  $("#back").click(function() {
    history.back();
  });

//heading generation
const heading = document.getElementById('headingDetail');

 //Article detail selection generation
 var articleSelection;
 var detailSelection;
 const detailTemplate = document.querySelector("[data-detail-template]");
 const detailContainer =  document.querySelector("[data-detail-container]");
 let detailData = [];

  function detailGeneration(){
    articleSelection = localStorage.getItem("articleTypeSelection");
    if(articleSelection == 'injury'){
        heading.textContent = 'Injury Length';
        const injuries = new Map(JSON.parse(localStorage.injuryMap));
        detailValues = Array.from(injuries.values());
    }else if(articleSelection == 'suspension'){
        heading.textContent = 'Suspension Length (Games)';
        const suspensions = new Map(JSON.parse(localStorage.suspensionMap));
        detailValues = Array.from(suspensions.values());
    }else {
        //trades
        heading.textContent = 'Traded To';
        const teams = new Map(JSON.parse(localStorage.teamMap));
        detailValues = Array.from(teams.values()); //to capture team objects

    }
    //Note: retirement option is impossible on this screen
    if(articleSelection == 'trade'){
        detailData = detailValues.map(detail=>{
        const card = detailTemplate.content.cloneNode(true).children[0];
        const profile = card.querySelector("[data-profile");
        const header = card.querySelector("[data-header]");
        var img = new Image();
        img.src= detail.teams_photourl;
        img.style.maxWidth = '50px';
        img.style.maxWidth = '50px';
        profile.appendChild(img);
        header.textContent = detail.teams_city + ' ' + detail.teams_name;
        detailContainer.append(card);
    });
    }
    else{
        detailData = detailValues.map(detail=>{
            if(detail.length > 0){
                const card = detailTemplate.content.cloneNode(true).children[0];
                const header = card.querySelector("[data-header]");
                header.textContent = detail;
                detailContainer.append(card);
            }
    });
    }
  }

    //global vars to send to local storage upon selection
    var szLength = '';
    var szTradedTo = '';

    //detailSelection
  $('.player-cards').click(function(event) {
    detailSelection = $(event.target)[0].outerText;
    if((articleSelection == 'suspension' && detailSelection.length <5) ||  ( articleSelection != 'suspension' && detailSelection.length < 40)){    //to prevent when users click in between cards to select all data
        if(articleSelection=='trade'){
            const teams = new Map(JSON.parse(localStorage.teamMap));
            detailSelection = detailSelection.replace(/\s/g, ''); //remove whitespace
            console.log(detailSelection);
            szTradedTo = teams.get(detailSelection);
            szTradedTo = szTradedTo.teams;

        }
        else{
            szLength = detailSelection;
        }
        localStorage.setItem("szTradedTo", szTradedTo);   //send to local storage to persist through pages
        localStorage.setItem("szLength", szLength); //will update on next page if applicable
        //go to share page
        window.location.href = 'share.html';  //change screen to detail selection
    }
});

  
  
window.onload = function(){
    detailGeneration();
};