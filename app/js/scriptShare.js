//homelogo
$("#logo").click(function() {
    window.location.href = 'index.html';
  });
  //Back Button
  $("#back").click(function() {
    history.back();
  });

  
//share generation
const heading = document.getElementById('headline');
const image = document.getElementById('articleImage');
const shareLink = document.getElementById('shareLink');


  //generate article based on selections
  var url = new URL("https://sportsreporterapp.com/cse412/app/getarticleurl_3.php");
  var urlShare = new URL("https://sportsreporterapp.com/cse412/article.php");
  var articleid;
  var articleheadline;
  var teambackgroundimg_url;
  var szAlphaString = "";

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
    //append selections to url
    url.searchParams.append('playerid', playerSelection);
    url.searchParams.append('detail', szDetail);
    url.searchParams.append('length', szLength);
    url.searchParams.append('appversion', szAppVersion);
    url.searchParams.append('league', szLeague);
    url.searchParams.append('type', szArticleType);
    url.searchParams.append('tradedto', szTradedTo);
    url.searchParams.append('headline', szCustomHeadline);
    
    
   //GET response from url POST
  $.getJSON(url, function(json_data){
    //assign values from response
    articleid = json_data.articledetaillist[0].articleid;
    articleheadline = json_data.articledetaillist[0].articleheadline;
    teambackgroundimg_url = "https://sportsreporterapp.com/cse412/nfl/photos/"; //must convert image url to cipher
    //Must be here since response is slow
    //Generate decoded url 
    szAlphaString = numericToAlphaCipher(articleid);
    //append to urlShare
    urlShare.searchParams.append(1, szAlphaString);
    teambackgroundimg_url = teambackgroundimg_url + playerSelection + ".png";
    generateShare();
  });
  
  }

function numericToAlphaCipher(articleid) {
        // loop through all digits in input and convert them to their alphabetical equivalence
        for (let  i=0; i < articleid.length; i++){
            switch (articleid.charAt(i))
            {
                case "0" :
                    szAlphaString = szAlphaString + "a";
                    break;
                case "1" :
                    szAlphaString = szAlphaString + "b";
                    break;
                case "2" :
                    szAlphaString = szAlphaString + "c";
                    break;
                case "3" :
                    szAlphaString = szAlphaString + "d";
                    break;
                case "4" :
                    szAlphaString = szAlphaString + "e";
                    break;
                case "5" :
                    szAlphaString = szAlphaString + "f";
                    break;
                case "6" :
                    szAlphaString = szAlphaString + "g";
                    break;
                case "7" :
                    szAlphaString = szAlphaString + "h";
                    break;
                case "8" :
                    szAlphaString = szAlphaString + "i";
                    break;
                case "9" :
                    szAlphaString = szAlphaString + "j";
                    break;
                default:
                    // do nothing
            }
        }
        return szAlphaString;
    }

    function generateShare(){
      heading.textContent = articleheadline;
      image.src = teambackgroundimg_url;
      shareLink.href = urlShare.toString();

      //TESTING
      console.log(articleheadline);
      console.log(teambackgroundimg_url);
      console.log(urlShare.toString());
    }

  window.onload = function(){
    getArticleURLDetails();
};

