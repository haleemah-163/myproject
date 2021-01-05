'use strict'
var score;
var myplace = 'yes';
var pplace = prompt('do you think I live in Amman?');
if ( pplace.toLowerCase() === myplace ){
    alert('hmmm try the next one then');
    score = 0 ;
} else {
    alert('Braaaaavooo , yes I live in Ajloun');
    score = 1 ;
}
var myage = 'yes';
var page = prompt('do I seem more than 18?');
if (page.toLowerCase() === myage ){
    alert('absoluteley correct');
    score = score + 1 ;
}else {alert('hmm then how do you think could I have the schoolarship of coding???');}

var mynationality = 'yes';
var pnationality = prompt('do you think I am Jordanian?');
if (pnationality.toLowerCase() === mynationality ){
    alert('correct !!');
    score = score + 1 ;
}else {alert('wow , it seems you still do not know me, I am Jordanian, dude ');}
var myfavcolor = 'yes';
var pcolor = prompt('do you think I prefer Yellow color');
if (pcolor.toLowerCase() === myfavcolor ) {alert('true , it is the color of the season');
score = score + 1 ;
    
} else {alert('to be honest, I love all colors but Yellow color is the best');}

var myfeild = 'yes';
var pfeild = prompt('am I doctor');
if (pfeild.toLowerCase() === myfeild) {alert('well, that was my dad wanted me to be , but not me');
    
} else {alert('that is true ... actually i had never seen a doctor who is learning programming');
score = score + 1 ;
    
}

// console.log('I live in Ajloun and I am 23, I am Jordanian my favourite color is Yellow and I finished my degree in engineering');
alert('I live in Ajloun and I am 23, I am Jordanian my favourite color is Yellow and I finished my degree in engineering');
alert('now it is your turn!');
var username = prompt('what about you name, dear ?');
document.write(' dear '+ username + ' you are more than welcome to my web site');
alert(username + ' have a nice day ');

//  {[[]] lab 3 ; extend my "about me" project[[]]}


var psleep = prompt('how many hours do you think I spend in sleeping?');
    psleep = parseInt(psleep);
if (psleep === 8) { alert('graet job!');
score = score + 1 ;} 
else {
for (let i = 0; i < 3 ; i++) {
    var psleep = prompt('how many hours do you think I spend in sleeping?');
    psleep = parseInt(psleep);
   
     if (psleep < 8) {alert('too low');}
 else if (psleep > 8) { alert('too high');} }

    
}
alert('well, I sleep 8 hours a day');
var array1 = [12,3,4];
var pmonth = prompt('there are 5 months in the year which I prefer more than the others, could you guess any of them? and plz type them as numbers');
pmonth = parseInt(pmonth);
    for (trying = 0; trying <5 ; trying++ ){
if (pmonth === 12 || pmonth === 3 || pmonth === 4){
    alert('wow you seem good in guessing');
    score = score + 1 ;}
else {alert('haah nop!');
prompt ('try again');}
    }
  
alert('December, March and April are my top favourites');
   
alert(' your score out of 7 is ' + score );






