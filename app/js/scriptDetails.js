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
        heading.textContent = 'Injury';
        const injuries = new Map(JSON.parse(localStorage.injuryMap));
        detailValues = Array.from(injuries.keys());
    }else if(articleSelection == 'suspension'){
        heading.textContent = 'Suspended For';
        const suspensions = new Map(JSON.parse(localStorage.suspensionMap));
        detailValues = Array.from(suspensions.keys());
    }else if(articleSelection == 'trade'){
        heading.textContent = 'Traded For';
        const trades = JSON.parse(localStorage.getItem('tradeSet'));
        detailValues = Array.from(trades);
    }else{
        //retirement
        heading.textContent = 'Retired Due To';
        const retirement = JSON.parse(localStorage.getItem('retirementSet'));
        detailValues = Array.from(retirement);
    }
    
    detailData = detailValues.map(detail=>{
        const card = detailTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        header.textContent = detail;
        detailContainer.append(card); 
    });
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
        szDetail = detailSelection;
        localStorage.setItem("szDetail", szDetail);   //send to local storage to persist through pages
        localStorage.setItem("szTradedTo", szTradedTo);   //send to local storage to persist through pages
        localStorage.setItem("szCustomHeadline", szCustomHeadline); //send to local storage -> will always be blank until custom inputs are implemented
        localStorage.setItem("szAppVersion", szAppVersion);
        localStorage.setItem("szLeague", szLeague);
        localStorage.setItem("szLength", szLength); //will update on next page if applicable
        if(articleSelection == 'retirement'){
             //go to article generation page
             window.location.href = 'share.html';  //change screen share page
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