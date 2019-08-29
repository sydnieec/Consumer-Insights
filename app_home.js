const comments=document.getElementById("commentsid")

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

function main(){
    comments.addEventListener('click', function(){
        commentsid.innerHTML=httpGet("https://graph.facebook.com/100011376370919_1142716599450875/comments?access_token=EAAQZCkGoNplIBAEAfbQYneBUrna25JBgeMnh4dbHH0hpZAxSBaVmNRrrjwkjJ2sfFJm3yqdSQ3mO6LX5dVPPhBRxafqNYP5R19lGsCeTwH3BQnSEBiioNoRe4gNf7cZBFwxyIKZAZCr3ZCJ5lpF58EXkdavBn7BVFxkRzX8TGHZC80Vuu18S28sPfYrOo3Ws1f090l81Py0K0b0Ww48Osov")
    })
}
main();