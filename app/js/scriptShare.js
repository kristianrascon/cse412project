//homelogo
$("#logo").click(function() {
    window.location.href = 'index.html';
  });
  //Back Button
  $("#back").click(function() {
    history.back();
  });

  //generate article based on selections
  function getArticleURLDetails(){
    //assign all selection variables from local storage
    const playerSelection = localStorage.getItem('playerSelection');
    const szDetail = localStorage.getItem('szDetail');
    const szLength = localStorage.getItem('szLength');
    const szAppVersion = localStorage.getItem('szAppVersion');
    const szLeague = localStorage.getItem('szLeague');
    const szArticleType = localStorage.getItem('articleTypeSelection');
    const szTradedTo = localStorage.getItem('szTradedTo');
    const szCustomHeadline = localStorage.getItem('szCustomHeadline');

    


    //TESTING 
    console.log(playerSelection);
    console.log(szDetail);
    console.log(szLength);
    console.log(szAppVersion);
    console.log(szLeague);
    console.log(szArticleType);
    console.log(szTradedTo);
    console.log(szCustomHeadline);
  }

  window.onload = function(){
    getArticleURLDetails();
};