var allcards=[
"1_of_clubs.png", "1_of_diamonds.png", "1_of_hearts.png","1_of_spades.png",
"2_of_clubs.png", "2_of_diamonds.png", "2_of_hearts.png","2_of_spades.png",
"3_of_clubs.png", "3_of_diamonds.png", "3_of_hearts.png","3_of_spades.png",
"4_of_clubs.png", "4_of_diamonds.png", "4_of_hearts.png","4_of_spades.png",
"5_of_clubs.png", "5_of_diamonds.png", "5_of_hearts.png","5_of_spades.png",
"6_of_clubs.png", "6_of_diamonds.png", "6_of_hearts.png","6_of_spades.png",
"7_of_clubs.png", "7_of_diamonds.png", "7_of_hearts.png","7_of_spades.png",
"8_of_clubs.png", "8_of_diamonds.png", "8_of_hearts.png","8_of_spades.png",
"9_of_clubs.png", "9_of_diamonds.png", "9_of_hearts.png","9_of_spades.png",
"10_of_clubs.png", "10_of_diamonds.png", "10_of_hearts.png","10_of_spades.png",
"jack_of_clubs.png","jack_of_diamonds.png","jack_of_hearts.png","jack_of_spades.png",
"king_of_clubs.png","king_of_diamonds.png","king_of_hearts.png","king_of_spades.png",
"queen_of_clubs.png","queen_of_diamonds.png","queen_of_hearts.png","queen_of_spades.png"

];


var allcardsnotremoved=[
"1_of_clubs.png", "1_of_diamonds.png", "1_of_hearts.png","1_of_spades.png",
"2_of_clubs.png", "2_of_diamonds.png", "2_of_hearts.png","2_of_spades.png",
"3_of_clubs.png", "3_of_diamonds.png", "3_of_hearts.png","3_of_spades.png",
"4_of_clubs.png", "4_of_diamonds.png", "4_of_hearts.png","4_of_spades.png",
"5_of_clubs.png", "5_of_diamonds.png", "5_of_hearts.png","5_of_spades.png",
"6_of_clubs.png", "6_of_diamonds.png", "6_of_hearts.png","6_of_spades.png",
"7_of_clubs.png", "7_of_diamonds.png", "7_of_hearts.png","7_of_spades.png",
"8_of_clubs.png", "8_of_diamonds.png", "8_of_hearts.png","8_of_spades.png",
"9_of_clubs.png", "9_of_diamonds.png", "9_of_hearts.png","9_of_spades.png",
"10_of_clubs.png", "10_of_diamonds.png", "10_of_hearts.png","10_of_spades.png",
"jack_of_clubs.png","jack_of_diamonds.png","jack_of_hearts.png","jack_of_spades.png",
"king_of_clubs.png","king_of_diamonds.png","king_of_hearts.png","king_of_spades.png",
"queen_of_clubs.png","queen_of_diamonds.png","queen_of_hearts.png","queen_of_spades.png"

];




var cardsvalue=[
1 ,1, 1,1 ,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,
"jack","jack","jack","jack","king","king","king","king","queen","queen","queen","queen"

];



var counter=0;

(function distribution (){
         // cards for floor
        for(var i=0 ; i<4 ; i++)
        {
        var randomNum1=Math.round(Math.random()*(allcards.length-1));
        if(allcards[randomNum1]=="jack_of_clubs.png"  )
        {
            randomNum1=randomNum1+4;
        }
        
        else if(allcards[randomNum1]=="jack_of_diamonds.png"){        
            randomNum1=randomNum1+3;
        }

        else if(allcards[randomNum1]=="jack_of_hearts.png"){          
            randomNum1=randomNum1+2;
        }

        else if(allcards[randomNum1]=="jack_of_spades.png"){     
            randomNum1=randomNum1+1;
        }

        var newimg=allcards[randomNum1];
        $(".imgtable1").eq(i).attr("src","images/"+newimg)
        allcards.splice(randomNum1,1);

        }


        // cards for user
        for(var i=0 ; i<4 ; i++)
        {
        var randomNum2=Math.ceil(Math.random()*(allcards.length-1));        
        var usercards=allcards[randomNum2];

        $(".backimg").eq(i).attr("src","images/"+usercards)
        allcards.splice(randomNum2,1);

        }

        //cards for computer
        for(var i=0 ; i<4 ; i++)
        {

        var randomNum3=Math.ceil(Math.random()*(allcards.length-1));
        var pccards=allcards[randomNum3];
         $(".facedownpc ").eq(i).attr("id",pccards)
        allcards.splice(randomNum3,1);
        }


})()



 function play() {

        if($(".who").html()!="user")
        {
        return;
        }
        var imgsrc = $(this).attr("src")
        var theimg=$("<img>");
        theimg.attr('src',imgsrc);
        $(".imgintable").append(theimg)
        $(this).remove()


        //     var imgname =imgsrc.substr(7);
        // var imgindex=allcardsnotremoved.indexOf(imgname)

        // var z= cardsvalue[imgindex];



        // // el index of last paper in table from user or pc

        var floorlength = $(".imgintable img").length



        // // ageb el index of last paper

        if(floorlength)
        {
        var cardplayed = $(".imgintable img").eq(floorlength-1).attr("src")
        var cardplayedname=cardplayed.substr(7);
        var cardplayedindex = allcardsnotremoved.indexOf(cardplayedname)
        var cardplayedvalue=cardsvalue[cardplayedindex]        
        }




        // if basra or no

        var basracounter=0;
        var flag10="true";
        if(floorlength>=2)
        {
            for(var t=0 ; t<floorlength ; t++ ){
                var basraelem = $(".imgintable img").eq(t).attr("src")
                
                var remoimgbasraelem= basraelem.substr(7);
                var indexbasraelem = allcardsnotremoved.indexOf(remoimgbasraelem)
                var valbasraelem=cardsvalue[indexbasraelem]
                if(cardplayedvalue==valbasraelem)
                {
                    basracounter++;
                }
                else{
                    flag10="false"
                    break;
                }

            }
            if( basracounter==floorlength){
            basracounter+=9;
                for(var t=floorlength-1 ; t>=0; t-- )

                {
                    var basraelem = $(".imgintable img").eq(t).remove();
                }

            }

            if(flag10=="true")
            {
                var thescore =parseInt($(".usercounter").text())
                $(".usercounter").html(thescore+basracounter);
            }

        }

  //  if jack or 7 diamonds


        floorlength=$(".imgintable img").length
        if(floorlength!=0 )    
        {
            var jackcounter=0;
            if(  ( floorlength >=2 && cardplayedvalue =="jack" ) ||  ( floorlength >=2 && cardplayedname=="7_of_diamonds.png") )       
            {
                for(var i = floorlength-1; i>=0 ; i--)     
                {
                    var remall = $(".imgintable img").eq(i).remove();
                    jackcounter++;              
                }
                var   getscore = parseInt($(".usercounter").text())
                $(".usercounter").html(getscore+jackcounter);
            }//if

            else  {

                var samepapercounter=0;            
                var flag3="false"
                for(var h=floorlength-2; h>=0 ; h--)
                {
                var imgsrc2 = $(".imgintable img").eq(h).attr("src")
                var imgname2 = imgsrc2.substr(7);
                var imgindex2 = allcardsnotremoved.indexOf(imgname2)
                var imgvalue2=cardsvalue[imgindex2]

                    if( cardplayedvalue == imgvalue2)
                    {
                        samepapercounter++;
                        $(".imgintable img").eq(h).remove()
                        floorlength = $(".imgintable img").length;
                        flag3="true";
                    
                    } // if
                }   // for

                // if sum fo cards= player card
                var arrsum=[];
                floorlength = $(".imgintable img").length;
                for(var h=0; h<floorlength-1 ; h++)
                {
                    var imgsrc3 = $(".imgintable img").eq(h).attr("src")
                    var imgname3 = imgsrc3.substr(7);
                    var imgindex3 = allcardsnotremoved.indexOf(imgname3)
                    var imgvalue3=cardsvalue[imgindex3];
                    arrsum.push(imgvalue3)
                }

                var prearr=arrsum;
                floorlength = $(".imgintable img").length;
                var la=$(".imgintable img").eq(floorlength-1).attr("src")
                var lasub=la.substr(7);
                var laindex = allcardsnotremoved.indexOf(lasub)
                var lasum=cardsvalue[laindex]
          
                var countersum= 0;

                var tmpArray = [];
                var finalArray = [];


                sum_up_recursive(prearr, lasum, tmpArray); 
                function sum_up_recursive(numbers, number, partialArray) { 
                var s=0;
                partialArray.forEach(function(entry) {
                    s=s+entry;
                });
                if (s == lasum) {
                    var imglen = $(".imgintable img").length;  

                    for(var f=0 ; f<=partialArray.length-1; f++)
                      {var flag50="false";
                        var t=partialArray[f];
                        for(var ff=0 ; ff< imglen-1; ff++)
                        {
                            var tt=$(".imgintable img").eq(ff).attr("src")
                            console.log("inside2"+tt)
                            var ttt=tt.substr(7);
                            var tttt = allcardsnotremoved.indexOf(ttt)
                            var ttttt=cardsvalue[tttt]
                            if(t==ttttt){
                                $(".imgintable img").eq(ff).remove();
                                partialArray[f]=0;
                                imglen = $(".imgintable img").length;
                                countersum++;
                                flag50="true";
                            }
                            flag3="true";
                            if(flag50=="true"){
                                ff=imglen-1;
                            }
                            if(countersum==partialArray.length)
                            {
                                numbers=[];
                            }
                        }//for
                    }//for

                    var usercount =parseInt($(".usercounter").text())
                    $(".usercounter").html(usercount+countersum);
                    finalArray.push(partialArray);
                }//if
               if(countersum==0){
                    if (s >= lasum) {
                        return;
                    }
                    for (var i=0; i<numbers.length; i++) {
                    n = numbers[i];    
                    var remaining = [];
                    var remaining = numbers.slice(i+1);
                    var partical_arr = partialArray.slice();       
                    partical_arr.push(n);    
                    sum_up_recursive(remaining, lasum, partical_arr);
                    }//for
                }//if            
                }
                floorlength = $(".imgintable img").length;
                if(flag3=="true")
                {
                $(".imgintable img").eq(floorlength-1).remove()   ;
                samepapercounter++;
                var www =parseInt($(".usercounter").text())
                $(".usercounter").html(www+samepapercounter);
                }

            } //else 
        }  
        $(".who").html("computer")  
        // end user

       // computer
        var pctime=setTimeout(function(){
        var pcrandom =$(".facedownpc").eq(0).attr("id")
        $(".facedownpc").eq(0).remove();
        var createimgpc = $("<img>")
        createimgpc.attr("src","images/"+pcrandom)
        $(".imgintable").append(createimgpc)


        var tablepclen = $(".imgintable img").length


        if(tablepclen)
        {
        var lasttablepc = $(".imgintable img").eq(tablepclen-1).attr("src")
        var lasttablepcname=lasttablepc.substr(7);
        var lasttablepcindex = allcardsnotremoved.indexOf(lasttablepcname)
        var lasttableimgval=cardsvalue[lasttablepcindex]
        }



       // if basra 
        var pcbasracounter=0;
        var flagpc10="true";
        if(tablepclen>=2)
        {
            for(var papers=0 ; papers<tablepclen ; papers++ ){
            var looppaper = $(".imgintable img").eq(papers).attr("src")
            var paperremoveimg=looppaper.substr(7);
            var paperind = allcardsnotremoved.indexOf(paperremoveimg)
            var paperval=cardsvalue[paperind]
                if(lasttableimgval==paperval)
                {
                    pcbasracounter++;
                }
                else{
                    flagpc10="false"
                    break;
                }
            }//for
            if( pcbasracounter==tablepclen){
            pcbasracounter+=9;
                for(var xxxx=tablepclen-1 ; xxxx>=0; xxxx-- )
                {
                var tableremoveall = $(".imgintable img").eq(xxxx).remove();
                }
            }//if
            if(flagpc10=="true"){
            var pccontent =parseInt($(".pccount").text())
            $(".pccount").html(pccontent+pcbasracounter);
            }
        } //if



        // if jack or 7diamonds


        tablepclen = $(".imgintable img").length
        if(tablepclen!=0 )  
        {
        var pcjackcounter=0;
        var lasttablepc = $(".imgintable img").eq(tablepclen-1).attr("src")
        var lasttablepcname= lasttablepc.substr(7);
        var lasttablepcindex = allcardsnotremoved.indexOf(lasttablepcname)
        var lasttableimgval=cardsvalue[lasttablepcindex]

        tablepclen=$(".imgintable img").length
        var pcjackcounter=0;
            if(  ( tablepclen >=2 && lasttableimgval=="jack" ) ||  ( tablepclen >=2 && lasttablepcname=="7_of_diamonds.png") ){
                 for(var y=tablepclen-1; y>=0 ; y--)  
                    {
                        var removeall = $(".imgintable img").eq(y).remove();
                        pcjackcounter++;              
                    }
                 var   thecounter =parseInt($(".pccount").text())
                $(".pccount").html(thecounter+pcjackcounter);
            }
                
            else  {
                tablepclen=$(".imgintable img").length
                var pcsamepapercounter=0;     
                var pcflag3="false"
                for(var h=tablepclen-2; h>=0 ; h--)
                {
                    var pctable = $(".imgintable img").eq(h).attr("src")
                    var pctablenoimgtag = pctable.substr(7);
                    var pctablenoimgtagindex = allcardsnotremoved.indexOf(pctablenoimgtag)
                    var pctablenoimgtagvalue=cardsvalue[pctablenoimgtagindex]
                    if(lasttableimgval==pctablenoimgtagvalue)
                    {
                    pcsamepapercounter++;
                    $(".imgintable img").eq(h).remove();
                    tablepclen = $(".imgintable img").length;
                    pcflag3="true"
                    } // if
                }   // for
                var arrsum=[];
                tablepclen = $(".imgintable img").length;

                for(var h=0; h<tablepclen-1 ; h++)
                {
                    var srcimg = $(".imgintable img").eq(h).attr("src")
                    var nameimg= srcimg.substr(7);
                    var indeximg = allcardsnotremoved.indexOf(nameimg)
                    var valueimg=cardsvalue[indeximg];
                    arrsum.push(valueimg)
                }

                var prearr=arrsum;
                tablepclen = $(".imgintable img").length;
                var la=$(".imgintable img").eq(tablepclen-1).attr("src")
                var lasub=la.substr(7);
                var laindex = allcardsnotremoved.indexOf(lasub)
                var lasum=cardsvalue[laindex];
                var countersum= 0;
                var tmpArray = [];
                var finalArray = [];


                sum_up_recursive(prearr, lasum, tmpArray); 
                function sum_up_recursive(numbers, number, partialArray) { 
                var s=0;
                partialArray.forEach(function(entry) {
                    s=s+entry;
                });
                if (s == lasum) {
                    var imglen = $(".imgintable img").length;
                
                    for(var f=0 ; f<=partialArray.length-1; f++)
                       {
                        var flag50="false";
                        var t=partialArray[f];
                        for(var ff=0 ; ff< imglen-1; ff++)
                        {  
                            var tt=$(".imgintable img").eq(ff).attr("src")
                            var ttt=tt.substr(7);
                            var tttt = allcardsnotremoved.indexOf(ttt)
                            var ttttt=cardsvalue[tttt]
                            if(t==ttttt){
                                $(".imgintable img").eq(ff).remove();
                                partialArray[f]=0;
                                imglen = $(".imgintable img").length;
                                countersum++;
                                flag50="true";  
                            }
                            pcflag3="true";
                            if(flag50=="true"){
                                ff=imglen-1;
                            }
                           
                            if(countersum==partialArray.length)
                            {
                                numbers=[];
                            }

                        }//for
                   
                    }//for

                    var www =parseInt($(".pccount").text())
                    $(".pccount").html(www+countersum);
                    finalArray.push(partialArray);
                }//if
                if(countersum==0){
                    if (s >= lasum) {
                        return;
                    }
                  for (var i=0; i<numbers.length; i++) {
                    n = numbers[i];
                    var remaining = [];
                    var remaining = numbers.slice(i+1);
                    var partical_arr = partialArray.slice();       
                    partical_arr.push(n);
                    
                    sum_up_recursive(remaining, lasum, partical_arr);
                  } //for

                }//if
            } //

                tablepclen = $(".imgintable img").length;
                if(pcflag3=="true")
                {
                    $(".imgintable img").eq(tablepclen-1).delay(2000).remove();
                    $(".imgintable img").eq(tablepclen-1).remove();
                    pcsamepapercounter++;
                    var pccount2 =parseInt($(".pccount").text())
                    $(".pccount").html(pccount2+pcsamepapercounter);

                }

            } //else 

         } //


        $(".who").html("user")  
        var userlength=$(".user img").length;
        var pclength=$(".fourimgs img").length;
        if(pclength==0 && userlength==0 && allcards.length==0 )
        {
            score()
        }


        if(pclength==0 && userlength==0 && allcards.length!=0 ){
        call2()
        var round=$(".roundnum").html()
        round=parseInt(round)
        round++
        $(".roundnum").html(round)
        }
        var round6=$(".roundnum").html()
        if(round6==6)
        {
            $(".imgmin1").css("visibility","hidden")
        }


   },1000)


};

$(".user img").on("click",play)

function call2(){
    

    for(var i=0 ; i<4 ; i++)
        {
        var randomNum2=Math.ceil(Math.random()*(allcards.length-1));        
        var usercards=allcards[randomNum2];
        var imgnew=$("<img>")
        imgnew.attr("src","images/"+usercards)
        imgnew.attr("class","backimg")
        $(".user").append(imgnew)
        allcards.splice(randomNum2,1);

        }



        for(var i=0 ; i<4 ; i++)
        {
        var randomNum2=Math.ceil(Math.random()*(allcards.length-1));
        var usercards=allcards[randomNum2];
        var imgnew=$("<img>")
        imgnew.attr("src","images/facedown.png")
        imgnew.attr("class","facedownpc")
        imgnew.attr("id",usercards)
        $(".fourimgs").append(imgnew)
        allcards.splice(randomNum2,1);
        }

        $(".user img").on("click",play)



}


 function score(){

    var pcscore=$(".pccount").html()
    pcscore=parseInt(pcscore)
    var userscore=$(".usercounter").html()
    userscore=parseInt(userscore)
    if(pcscore>userscore){
        $(".allgame ").html(" ")
        $(".gameover").css("display","inline")
    }

    if(pcscore<userscore){
        $(".allgame ").html(" ")
        $(".congratulations").css("display","inline")

    }

    if(pcscore==userscore){
        $(".allgame ").html(" ")
        $(".tryagain").css("display","inline")

    }

 }
