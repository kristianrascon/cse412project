  //global vars
  var articleTypeSelection;

  //article Selection and screen change
  $("#articleTypeInjury").click(function() {
    articleTypeSelection='injury';
    localStorage.setItem("articleTypeSelection", articleTypeSelection);
    window.location.href = 'players.html';
  });

  $("#articleTypeSuspension").click(function() {
    articleTypeSelection='suspension';
    window.location.href = 'players.html';
    localStorage.setItem("articleTypeSelection", articleTypeSelection);
  });

  $("#articleTypeTrade").click(function() {
    articleTypeSelection='trade';
    window.location.href = 'players.html';
    localStorage.setItem("articleTypeSelection", articleTypeSelection);
  });

  $("#articleTypeRetirement").click(function() {
    articleTypeSelection='retirement';
    window.location.href = 'players.html';
    localStorage.setItem("articleTypeSelection", articleTypeSelection);
  });

  $("#articleTypeCustom").click(function() {
    articleTypeSelection='custom';
    window.location.href = 'players.html';
    localStorage.setItem("articleTypeSelection", articleTypeSelection);
  });
  //homelogo
  $("#logo").click(function() {
    window.location.href = 'index.html';
  });
  //Back Button
  $("#back").click(function() {
    history.back();
  });
  

  


