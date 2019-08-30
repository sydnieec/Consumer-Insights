const comments=document.getElementById("commentsid")
var text= "But I think math, common sense, and our history shows us that's not a recipe for job growth.\nLook, we've tried this. We've tried both approaches. The approach that Governor Romney's\ntalking about is the same sales pitch that was made in 2001 and 2003, and we ended up with the\nslowest job growth in 50 years, we ended up moving from surplus to deficits, and it all\nculminated in the worst financial crisis since the Great Depression.\n\nBill Clinton tried the approach that I'm talking about. We created 23 million new jobs. We went\nfrom deficit to surplus. And businesses did very well. So, in some ways, we've got some data on\nwhich approach is more likely to create jobs and opportunity for Americans and I believe that the\neconomy works best when middle-class families are getting tax breaks so that they've got some\nmoney in their pockets, and those of us";
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var comments_array= [];
     var jsonData = JSON.parse(xmlHttp.responseText);
     //var obj = JSON.parse(xmlHttp.responseTex);
    // var last = xmlHttp.responseText.data[0].messages;
   // console.log("comments"+ jsonData.data[0].message);
    for (var i = 0; i < jsonData.data.length; i++) {

        comments_array.push(jsonData.data[i].message);
    }
    return comments_array;
    }
function httpGetLocalHost(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false  ); // false for synchronous request
   // xmlHttp.setRequestHeader("Comments", "this is a commment");
    xmlHttp.send(null);
    console.log("Get request response:" + xmlHttp.responseText);
    return xmlHttp.responseText;
} 
function main(){
    comments.addEventListener('click', function(){
        //commentsid.innerHTML=httpGet("https://graph.facebook.com/100011376370919_1142716599450875/comments?access_token=EAAQZCkGoNplIBAEAfbQYneBUrna25JBgeMnh4dbHH0hpZAxSBaVmNRrrjwkjJ2sfFJm3yqdSQ3mO6LX5dVPPhBRxafqNYP5R19lGsCeTwH3BQnSEBiioNoRe4gNf7cZBFwxyIKZAZCr3ZCJ5lpF58EXkdavBn7BVFxkRzX8TGHZC80Vuu18S28sPfYrOo3Ws1f090l81Py0K0b0Ww48Osov")
        commentsid.innerHTML=text;
        commentsid.innerHTML= (httpGetLocalHost("http://localhost:8000/"));
      // httpGetAsync("http://localhost:8000/", "" );
    })
}
main();