//homelogo
$("#logo").click(function() {
    window.location.href = 'index.html';
  });
  //Back Button
  $("#back").click(function() {
    history.back();
  });

  
 //Article detail selection generation
 var articleSelection;
 var detailSelection;
 const detailTemplate = document.querySelector("[data-detail-template]");
 const detailContainer =  document.querySelector("[data-detail-container]");
 let detailData = [];

  function detailGeneration(){
    articleSelection = localStorage.getItem("articleTypeSelection");
    if(articleSelection == 'injury'){
        const injuries = new Map(JSON.parse(localStorage.injuryMap));
        detailValues = Array.from(injuries.values());
    }else if(articleSelection == 'suspension'){
        const suspensions = new Map(JSON.parse(localStorage.suspensionMap));
        detailValues = Array.from(suspensions.values());
    }else {
        //trades
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
        const card = detailTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        header.textContent = detail;
        detailContainer.append(card); 
    });
    }
  }

    //global vars to send to local storage upon selection
    var szLength = '';
    var szTradedTo = '';

    //detailSelection
  $('.player-cards').click(function(event) {
    detailSelection = $(event.target)[0].outerText;
    //detailSelection = detailSelection.replace(',', ''); //get into same format as key for the detail map
    //detailSelection = detailSelection.replace(/\s/g, '');
    if((articleSelection == 'suspension' && detailSelection.length <5) ||  ( articleSelection != 'suspension' && detailSelection.length < 40)){    //to prevent when users click in between cards to select all data
        if(articleSelection=='trade'){
            szTradedTo = detailSelection;
        }
        else{
            szLength = detailSelection;
        }
        console.log(detailSelection); //TESTING
        localStorage.setItem("szTradedTo", szTradedTo);   //send to local storage to persist through pages
        localStorage.setItem("szLength", szLength); //will update on next page if applicable
        //go to article generation page
        //window.location.href = 'details2.html';  //change screen to detail selection
    }
});

  
  
window.onload = function(){
    detailGeneration();
};