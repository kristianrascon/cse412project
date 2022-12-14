//Functions for All Pages
//homelogo
$("#logo").click(function() {
    window.location.href = 'index.html';
  });
  //Back Button
  $("#back").click(function() {
    history.back();
  });

//player definition
class Player{
    constructor(playerid, firstname, lastname, team, position, team_city, team_name, photourl, photourlcredit, photourlheadshot, photourlheadshotcredit){
      this.playerid = playerid;
      this.firstname = firstname;
      this.lastname = lastname;
      this.team = team;
      this.position = position;
      this.team_city = team_city;
      this.team_name = team_name;
      this.photourl = photourl;
      this.photourlcredit = photourlcredit;
      this.photourlheadshot = photourlheadshot;
      this.photourlheadshotcredit = photourlheadshotcredit;
    }
    //getters
    get getplayerid(){
      return this.playerid;
    }
    get getfirstname(){
      return this.firstname;
    }
    get getlastname(){
      return this.lastname;
    }
    get getteam(){
      return this.team;
    }
    get getposition(){
      return this.position;
    }
    get getteam_city(){
      return this.team_city;
    }
    get getteam_name(){
      return this.team_name;
    }
    get getphotourl(){
      return this.photourl;
    }
    get getphotourlcredit(){
      return this.photourlcredit;
    }
    get getphotourlheadshot(){
      return this.photourlheadshot;
    }
    get getphotourlheadshotcredit(){
      return this.photourlheadshotcredit;
    }
  
    //setters
    set setplayerid(playerid){
      this.playerid = playerid;
    }
    set setfirstname(firstname){
      this.firstname = firstname;
    }
    set setlastname(lastname){
      this.lastname = lastname;
    }
    set setteam(team){
      this.team = team;
    }
    set setposition(position){
      this.position = position;
    }
    set setteam_city(team_city){
      this.team_city = team_city;
    }
    set setteam_name(team_name){
      this.team_name = team_name;
    }
    set setphotourl(photourl){
      this.photourl = photourl;
    }
    set setphotourlcredit(photourlcredit){
      this.photourlcredit = photourlcredit;
    }
    set setphotourlheadshot(photourlheadshot){
      this.photourlheadshot = photourlheadshot;
    }
    set setphotourlheadshotcredit(photourlheadshotcredit){
      this.photourlheadshotcredit = photourlheadshotcredit;
    }
  }
  
  //team defintion
  class Team{
    constructor(teams, teams_city, teams_name, teams_photourl){
      this.teams = teams;
      this.teams_city = teams_city;
      this.teams_name = teams_name;
      this.teams_photourl = teams_photourl;
    }
  
    //getters
    get getteams(){
      return this.teams;
    }
    get getteams_city(){
      return this.teams_city;
    }
    get getteams_name(){
      return this.teams_name;
    }
    get getteams_photourl(){
      return this.teams_photourl;
    }
  
    //setters
    set setteams(teams){
      this.teams = teams;
    }
    set setteams_city(teams_city){
      this.teams_city = teams_city;
    }
    set setteams_name(teams_name){
      this.teams_name = teams_name;
    }
    set setteams_photourl(teams_photourl){
      this.teams_photourl = teams_photourl;
    }
  }

  var numberofplayers;
  var numberofteams;
  var numberoflengths;
  var numberofinjuries;
  var numberofretirement;
  var numberofsuspension;
  var numberofsuspensiongames;
  var numberoftrade;

  const playerMap = new Map();  //Key = firstname + lastname + team_name + team  + position, Value = playerData
  const injuryMap = new Map();  //Key = injury, Value = length
  const retirementSet = new Set(); 
  const suspensionMap = new Map();  //Key = suspension, Value = suspensiongames
  const tradeSet = new Set();
  const teamMap = new Map();  //Key = teams_city +teams_name, Value = teamData
  
  //Get JSON 
  $.getJSON('https://sportsreporterapp.com/cse412/app/initialize_1.php?league=NFL', function(playerData) {
    //console.log(JSON.stringify(playerData)); //TEST to show json successfully pulled in
    //console.log(playerData.initializedetaillist[0].playerid); //TEST to show format of how to call data from JSON

    //Populate global vars from first index of initializedetaillist
    numberofplayers = playerData.initializedetaillist[0].numberofplayers;
    numberofteams = playerData.initializedetaillist[0].numberofteams;
    numberoflengths = playerData.initializedetaillist[0].numberoflengths;
    numberofinjuries = playerData.initializedetaillist[0].numberofinjuries;
    numberofretirement = playerData.initializedetaillist[0].numberofretirement;
    numberofsuspension = playerData.initializedetaillist[0].numberofsuspension;
    numberofsuspensiongames = playerData.initializedetaillist[0].numberofsuspensiongames;
    numberoftrade = playerData.initializedetaillist[0].numberoftrade;
    
    //need to assign vars to parasedJSON or else stack overflow from too many function calls
    var playeridTemp;
    var firstnameTemp;
    var lastnameTemp;
    var teamTemp;
    var positionTemp;
    var team_cityTemp;
    var team_nameTemp;
    var photourlTemp;
    var photourlcreditTemp;
    var photourlheadshotTemp;
    var photourlheadshotcreditTemp;
    
    var injuryTemp;
    var injurylengthTemp;

    var retirementTemp;

    var suspensionTemp;
    var suspensiongamesTemp;

    var tradeTemp;
    
    var teamsTemp;
    var teams_cityTemp;
    var teams_nameTemp;
    var teams_photourlTemp;

    //iterate through each array index in inititalizeddetaillist and populate playerdata
    for (let i = 0; i < playerData.initializedetaillist.length; i++) {
        playeridTemp = playerData.initializedetaillist[i].playerid, 
        firstnameTemp = playerData.initializedetaillist[i].firstname, 
        lastnameTemp = playerData.initializedetaillist[i].lastname,
        teamTemp = playerData.initializedetaillist[i].team,
        positionTemp = playerData.initializedetaillist[i].position,
        team_cityTemp = playerData.initializedetaillist[i].team_city,
        team_nameTemp = playerData.initializedetaillist[i].team_name,
        photourlTemp = playerData.initializedetaillist[i].photourl,
        photourlcreditTemp = playerData.initializedetaillist[i].photourlcredit,
        photourlheadshotTemp = playerData.initializedetaillist[i].photourlheadshot,
        photourlheadshotcreditTemp = playerData.initializedetaillist[i].photourlheadshotcredit

        injuryTemp = playerData.initializedetaillist[i].injury;
        injurylengthTemp = playerData.initializedetaillist[i].length;

        retirementTemp = playerData.initializedetaillist[i].retirement;

        suspensionTemp = playerData.initializedetaillist[i].suspension;
        suspensiongamesTemp = playerData.initializedetaillist[i].suspensiongames;

        tradeTemp = playerData.initializedetaillist[i].trade;

        teamsTemp = playerData.initializedetaillist[i].teams;
        teams_cityTemp = playerData.initializedetaillist[i].teams_city;
        teams_nameTemp = playerData.initializedetaillist[i].teams_name;
        teams_photourlTemp = playerData.initializedetaillist[i].teams_photourl;
      
        //create new player object
        var newPlayer = new Player(
        playeridTemp,
        firstnameTemp,
        lastnameTemp,
        teamTemp,
        positionTemp,
        team_cityTemp,
        team_nameTemp,
        photourlTemp,
        photourlcreditTemp,
        photourlheadshotTemp,
        photourlheadshotcreditTemp
        );

        //create new team object
        var newTeam = new Team(
          teamsTemp,
          teams_cityTemp,
          teams_nameTemp,
          teams_photourlTemp
        );

        //set data into maps
        let playerKey = (newPlayer.firstname  + newPlayer.lastname + newPlayer.team_city  + newPlayer.team_name + newPlayer.position).replace(/\s/g, '');
        playerMap.set(playerKey, newPlayer); 
        //check for valid input
        if(injuryTemp.length>1){
          injuryMap.set(injuryTemp, injurylengthTemp);  
        }
        if(retirementTemp.length>1){
          retirementSet.add(retirementTemp);  
        }
        if(suspensionTemp.length>1){
          suspensionMap.set(suspensionTemp, suspensiongamesTemp); 
        }
        if(tradeTemp.length>1){
          tradeSet.add(tradeTemp); 
        }
        if(teamsTemp.length>1){
          teamMap.set(newTeam.teams_city+newTeam.teams_name, newTeam);
        }
       
    }
    //adding maps to local storage
    localStorage.injuryMap = JSON.stringify(Array.from(injuryMap.entries()));
    localStorage.teamMap = JSON.stringify(Array.from(teamMap.entries()));
    localStorage.suspensionMap = JSON.stringify(Array.from(suspensionMap.entries()));
    //adding sets to local storage
    const retirement = Array.from(retirementSet);
    localStorage.setItem('retirementSet', JSON.stringify(retirement));
    const trades = Array.from(tradeSet);
    localStorage.setItem('tradeSet', JSON.stringify(trades));
   playerGeneration();
  });

  
  //player card generation + search
  var playerselection;
  const playerCardTemplate = document.querySelector("[data-player-template]");
  const playerCardContainer =  document.querySelector("[data-player-cards-container]");
  const searchInput = document.querySelector("[data-search]");
  let cardData = [];

  searchInput.addEventListener("input",(e) => {
    const value = e.target.value.toLowerCase();
    cardData.forEach(player => {
        const isVisible = (player.firstname.toLowerCase() + ' ' + player.lastname.toLowerCase()).includes(value) || player.firstname.toLowerCase().includes(value) || player.lastname.toLowerCase().includes(value) || player.team_name.toLowerCase().includes(value) || player.team_city.toLowerCase().includes(value) || player.position.toLowerCase().includes(value);
        player.element.classList.toggle("hide", !isVisible);
    });
  });
 
  
  function playerGeneration(){
    const playerValues = Array.from(playerMap.values());
    cardData = playerValues.map(player=>{
        const card = playerCardTemplate.content.cloneNode(true).children[0];
        const profile = card.querySelector("[data-profile");
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        var img = new Image();
        img.src=player.photourlheadshot;
        img.style.maxWidth = '150px';
        img.style.maxWidth = '150px';
        profile.appendChild(img);
        header.textContent = player.firstname + ' ' + player.lastname;
        body.textContent = ' ' + player.team_city + ' ' + player.team_name + ', ' + player.position;
        playerCardContainer.append(card); 
        return {playerid: player.playerid, firstname: player.firstname, lastname: player.lastname, team_name: player.team_name, team_city: player.team_city, position: player.position, element: card}
    });
  }
  
  //Player Selection
  $('.player-cards').click(function(event) {
    playerSelection = $(event.target)[0].outerText;
    playerSelection = playerSelection.replace(',', ''); //get into same format as key for playerMap
    playerSelection = playerSelection.replace(/\s/g, '');
    if(playerMap.has(playerSelection)){
        playerSelection = playerMap.get(playerSelection);
        playerSelection = playerSelection.playerid;
        localStorage.setItem("playerSelection", playerSelection);   //send to local storage to persist through pages
        window.location.href = 'details.html';  //change screen to detail selection
    }
});
