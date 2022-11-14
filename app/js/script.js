console.log("hello");
var articleTypeSelection;
$("#articleTypeInjury").click(function() {
    articleTypeSelection='injury';
    window.location.href = 'players.html';
  });

  $("#articleTypeSuspension").click(function() {
    articleTypeSelection='suspension';
    window.location.href = 'players.html';
  });

  $("#articleTypeTrade").click(function() {
    articleTypeSelection='trade';
    window.location.href = 'players.html';
  });

  $("#articleTypeRetirement").click(function() {
    articleTypeSelection='retirement';
    window.location.href = 'players.html';
  });

  $("#articleTypeCustom").click(function() {
    articleTypeSelection='custom';
    window.location.href = 'players.html';
  });