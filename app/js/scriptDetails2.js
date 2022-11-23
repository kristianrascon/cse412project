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
    var szAppVersion = 'web1.0';
    var szLeague = 'NFL';
    var szCustomHeadline = '';
    var szDetail = '';
    var szLength = '';
    var szTradedTo = '';

    //detailSelection
  $('.player-cards').click(function(event) {
    detailSelection = $(event.target)[0].outerText;
    //detailSelection = detailSelection.replace(',', ''); //get into same format as key for the detail map
    //detailSelection = detailSelection.replace(/\s/g, '');
    if(detailSelection.length < 40){    //to prevent when users click in between cards to select all data
        if(articleSelection=='trade'){
            szTradedTo = detailSelection;
        }
        else{
            szDetail = detailSelection;
        }
        console.log(detailSelection); //TESTING
        localStorage.setItem("szDetail", szDetail);   //send to local storage to persist through pages
        localStorage.setItem("szTradedTo", szTradedTo);   //send to local storage to persist through pages
        localStorage.setItem("szCustomHeadline", szCustomHeadline); //send to local storage -> will always be blank until custom inputs are implemented
        localStorage.setItem("szAppVersion", szAppVersion);
        localStorage.setItem("szLeague", szLeague);
        localStorage.setItem("szLength", szLength); //will update on next page if applicable
        if(articleSelection == 'retirement'){
             //go to article generation page
        }
        else{
           //go to second detail page
           window.location.href = 'details2.html';  //change screen to detail selection
        }
        
    }
});

  
  
window.onload = function(){
    detailGeneration();
};