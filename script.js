

// Пифагор начало

  function pifagor(pifag) {
    var massiv = [];
    massiv[0] = ((pifag.getDate() - (pifag.getDate() % 10)) / 10);
    massiv[1] = (pifag.getDate() % 10);
    
    var f_month = pifag.getMonth() + 1;
    massiv[2] = ((f_month - (f_month % 10)) / 10);
    massiv[3] = (f_month % 10);
    
    massiv[4] = ((pifag.getFullYear() - (pifag.getFullYear() % 1000)) / 1000);
    massiv[5] = (((pifag.getFullYear() - (massiv[4] * 1000)) - (pifag.getFullYear() % 100)) / 100);
    massiv[6] = (((pifag.getFullYear() - (massiv[4] * 1000) - (massiv[5] * 100)) - (pifag.getFullYear() % 10)) / 10);
    massiv[7] = (pifag.getFullYear() % 10);
    
    var rch1 = massiv[0] + massiv[1] + massiv[2] + massiv[3] + massiv[4] + massiv[5] + massiv[6] + massiv[7];
    var rch2 = (rch1 % 10) + ((rch1 - (rch1 % 10)) / 10);
    
    if (massiv[0] > 0) { 
      var rch3 = rch1 - (massiv[0] * 2); 
    }
    else if (massiv[0] == 0) {
      var rch3 = rch1 - (massiv[1] * 2);
    }
    
    var rch4 = (rch3 % 10) + ((rch3 - (rch3 % 10)) / 10);
    
    massiv[8] = ((rch1 - (rch1 % 10)) / 10);
    massiv[9] = (rch1 % 10);
    massiv[10] = ((rch2 - (rch2 % 10)) / 10);
    massiv[11] = (rch2 % 10);
    massiv[12] = ((rch3 - (rch3 % 10)) / 10);
    massiv[13] = (rch3 % 10);
    massiv[14] = ((rch4 - (rch4 % 10)) / 10);
    massiv[15] = (rch4 % 10);
    
    var rch5 = rch1 + rch3;
    var rch6 = rch2 + rch4;
    
    var fkol_1 = 0;
    var fkol_2 = 0;
    var fkol_3 = 0;
    var fkol_4 = 0;
    var fkol_5 = 0;
    var fkol_6 = 0;
    var fkol_7 = 0;
    var fkol_8 = 0;
    var fkol_9 = 0;
    var fkol_10 = 0;
    var fkol_11 = 0;
    var fkol_12 = 0;
    var fkol_1sum = 0;
    var fkol_2sum = 0;
    var fkol_3sum = 0;
    var fkol_4sum = 0;
    
  
    var i = 0;
    while (i <= 15) {

      if ((massiv[i] == 1)) {fkol_1++;}
      if ((massiv[i] == 2)) {fkol_2++;}
      if ((massiv[i] == 3)) {fkol_3++;}
      if ((massiv[i] == 4)) {fkol_4++;}
      if ((massiv[i] == 5)) {fkol_5++;}
      if ((massiv[i] == 6)) {fkol_6++;}
      if ((massiv[i] == 7)) {fkol_7++;}
      if ((massiv[i] == 8)) {fkol_8++;}
      if ((massiv[i] == 9)) {fkol_9++;}
      if ((rch1 == 10 || rch2 == 10 || rch3 == 10 || rch4 == 10 || rch5 == 10 || rch6 == 10)) {
        fkol_10 = '10';
      }
      if ((rch1 == 11 || rch2 == 11 || rch3 == 11 || rch4 == 11 || rch5 == 11 || rch6 == 11)) {
        fkol_11 = '11';
      }
      if ((rch1 == 12 || rch2 == 12 || rch3 == 12 || rch4 == 12 || rch5 == 12 || rch6 == 12)) {
        fkol_12 = '12';
      }     
      i++;
    }
      
    var femaleChar = '';
    var femaleEner = '';
    var femaleCreat = '';
    var femaleHealth = '';
    var femaleLogic = '';
    var femaleHand = '';
    var femaleLuck = '';
    var femaleOrder = '';
    var femaleMemory = '';

    var femaleRate = '';
    var femaleMoney = '';
    var femaleTalent = '';
    
    var femaleSpirit = '';
    var femaleTemp = '';            
    
    var femaleGoal = '';
    var femaleSem = '';
    var femaleStab = '';

    
    switch (fkol_1) {
      case 0: femaleChar = fkol_1 = 'нет цифр'; break;
      case 1: femaleChar = fkol_1 = '1'; break;
      case 2: femaleChar = fkol_1 = '11'; break;
      case 3: femaleChar = fkol_1 = '111';  break;
      case 4: femaleChar = fkol_1 = '1111'; break;
      case 5: femaleChar = fkol_1 = '11111'; break;
      case 6: femaleChar = fkol_1 = '111111'; break;
      case 7: femaleChar = fkol_1 = '1111111'; break;
      case 8: femaleChar = fkol_1 = '11111111'; break;
      case 9: femaleChar = fkol_1 = '111111111';
    }
    switch (fkol_2) {
      case 0: femaleEner = fkol_2 = 'нет цифр'; break;
      case 1: femaleEner = fkol_2 = '2'; break;
      case 2: femaleEner = fkol_2 = '22'; break;
      case 3: femaleEner = fkol_2 = '222';  break;
      case 4: femaleEner = fkol_2 = '2222'; break;
      case 5: femaleEner = fkol_2 = '22222'; break;
      case 6: femaleEner = fkol_2 = '222222'; break;
      case 7: femaleEner = fkol_2 = '2222222'; break;
      case 8: femaleEner = fkol_2 = '22222222'; break;
      case 9: femaleEner = fkol_2 = '222222222';
    }
    switch (fkol_3) {
      case 0: femaleCreat = fkol_3 = 'нет цифр'; break;
      case 1: femaleCreat = fkol_3 = '3'; break;
      case 2: femaleCreat = fkol_3 = '33'; break;
      case 3: femaleCreat = fkol_3 = '333'; break;
      case 4: femaleCreat = fkol_3 = '3333'; break;
      case 5: femaleCreat = fkol_3 = '33333'; break;
      case 6: femaleCreat = fkol_3 = '333333'; break;
      case 7: femaleCreat = fkol_3 = '3333333'; break;
      case 8: femaleCreat = fkol_3 = '33333333'; break;
      case 9: femaleCreat = fkol_3 = '333333333'; break;
    }
    switch (fkol_4) {
      case 0: femaleHealth = fkol_4 = 'нет цифр'; break;
      case 1: femaleHealth = fkol_4 = '4'; break;
      case 2: femaleHealth = fkol_4 = '44'; break;
      case 3: femaleHealth = fkol_4 = '444'; break;
      case 4: femaleHealth = fkol_4 = '4444'; break;
      case 5: femaleHealth = fkol_4 = '44444'; break;
      case 6: femaleHealth = fkol_4 = '444444'; break;
      case 7: femaleHealth = fkol_4 = '4444444'; break;
      case 8: femaleHealth = fkol_4 = '44444444'; break;
      case 9: femaleHealth = fkol_4 = '444444444'; break;
    }           
    switch (fkol_5) {
      case 0: femaleLogic = fkol_5 = 'нет цифр';  break;
      case 1: femaleLogic = fkol_5 = '5'; break;
      case 2: femaleLogic = fkol_5 = '55'; break;
      case 3: femaleLogic = fkol_5 = '555'; break;
      case 4: femaleLogic = fkol_5 = '5555'; break;
      case 5: femaleLogic = fkol_5 = '55555'; break;
      case 6: femaleLogic = fkol_5 = '555555'; break;
      case 7: femaleLogic = fkol_5 = '5555555'; break;
      case 8: femaleLogic = fkol_5 = '55555555'; break;
      case 9: femaleLogic = fkol_5 = '555555555'; break;
    }
    switch (fkol_6) {
      case 0: femaleHand = fkol_6 = 'нет цифр'; break;
      case 1: femaleHand = fkol_6 = '6'; break;
      case 2: femaleHand = fkol_6 = '66'; break;
      case 3: femaleHand = fkol_6 = '666'; break;
      case 4: femaleHand = fkol_6 = '6666'; break;
      case 5: femaleHand = fkol_6 = '66666'; break;
      case 6: femaleHand = fkol_6 = '666666'; break;
      case 7: femaleHand = fkol_6 = '6666666'; break;
      case 8: femaleHand = fkol_6 = '66666666'; break;
      case 9: femaleHand = fkol_6 = '666666666'; break;
    }
    switch (fkol_7) {
      case 0: femaleLuck = fkol_7 = 'нет цифр'; break;
      case 1: femaleLuck = fkol_7 = '7'; break;
      case 2: femaleLuck = fkol_7 = '77'; break;
      case 3: femaleLuck = fkol_7 = '777'; break;
      case 4: femaleLuck = fkol_7 = '7777'; break;
      case 5: femaleLuck = fkol_7 = '77777'; break;
      case 6: femaleLuck = fkol_7 = '777777'; break;
      case 7: femaleLuck = fkol_7 = '7777777'; break;
      case 8: femaleLuck = fkol_7 = '77777777'; break;
      case 9: femaleLuck = fkol_7 = '777777777';  break;
    }
    switch (fkol_8) {
      case 0: femaleOrder = fkol_8 = 'нет цифр'; break;
      case 1: femaleOrder = fkol_8 = '8'; break;
      case 2: femaleOrder = fkol_8 = '88'; break;
      case 3: femaleOrder = fkol_8 = '888'; break;
      case 4: femaleOrder = fkol_8 = '8888'; break;
      case 5: femaleOrder = fkol_8 = '88888'; break;
      case 6: femaleOrder = fkol_8 = '888888'; break;
      case 7: femaleOrder = fkol_8 = '8888888'; break;
      case 8: femaleOrder = fkol_8 = '88888888'; break;
      case 9: femaleOrder = fkol_8 = '888888888'; break;
    }
    switch (fkol_9) {
      case 0: fkol_9 = 'нет цифр'; break;
      case 1: fkol_9 = '9'; break;
      case 2: fkol_9 = '99'; break;
      case 3: fkol_9 = '999'; break;
      case 4: fkol_9 = '9999'; break;
      case 5: fkol_9 = '99999'; break;
      case 6: fkol_9 = '999999'; break;
      case 7: fkol_9 = '9999999'; break;
      case 8: fkol_9 = '99999999'; break;
      case 9: fkol_9 = '999999999'; break;
    }
    switch (fkol_10) {
      case 0: fkol_10 = 'нет цифр'; break;
      case 1: fkol_10 = '10'; break;

    }
    switch (fkol_11) {
      case 0: fkol_11 = 'нет цифр'; break;
      case 1: fkol_11 = '11'; break;
    }
    switch (fkol_12) {
      case 0: fkol_12 = 'нет цифр'; break;
      case 1: fkol_12 = '12'; break;
    }
    
    if (fkol_1 == 'нет цифр') {fkol_1 = '—';}
    if (fkol_2 == 'нет цифр') {fkol_2 = '—';}
    if (fkol_3 == 'нет цифр') {fkol_3 = '—';}
    if (fkol_4 == 'нет цифр') {fkol_4 = '—';}
    if (fkol_5 == 'нет цифр') {fkol_5 = '—';}
    if (fkol_6 == 'нет цифр') {fkol_6 = '—';}
    if (fkol_7 == 'нет цифр') {fkol_7 = '—';}
    if (fkol_8 == 'нет цифр') {fkol_8 = '—';}
    if (fkol_9 == 'нет цифр') {fkol_9 = '—';}
    if (fkol_10 == 'нет цифр') {fkol_10 = '—';}
    if (fkol_11 == 'нет цифр') {fkol_11 = '—';}
    if (fkol_12 == 'нет цифр') {fkol_12 = '—';}

    //Цель 
    var pers = fkol_1.toString().length;
    if(fkol_1 == '—') {
      pers=0;
     } 
    var health = fkol_4.toString().length;
    if(fkol_4 == '—') {
      health=0;
     } 
     var luck = fkol_7.toString().length;
    if(fkol_7 == '—') {
      luck=0;
     } 


     //Семья 
    var energ = fkol_2.toString().length;
    if(fkol_2 == '—') {
      energ=0;
     } 
    var logic = fkol_5.toString().length;
    if(fkol_5 == '—') {
      logic=0;
     } 
     var duty = fkol_8.toString().length;
    if(fkol_8 == '—') {
      duty=0;
     } 

    //Привычки 
    var interest = fkol_3.toString().length;
    if(fkol_3 == '—') {
      interest=0;
     } 
    var work = fkol_6.toString().length;
    if(fkol_6 == '—') {
      work=0;
     } 
     var memory = fkol_9.toString().length;
    if(fkol_9 == '—') {
      memory=0;
     } 

     //4 ряд
     var selfesteem = pers + energ + interest;
     var life = health + logic + work;
     var talent = luck + duty + memory;
     var target = pers + health + luck;
     var fam = energ + logic + duty;
     var hab = interest + work + memory;
     var spirit = pers + logic + memory;
     var temp = interest + logic + luck;
     var detnum = rch2;
     if (detnum == 10){
      detnum=1;
     } else{
      detnum= rch2;
     }

    
    return '<div class="pifagor-square"><table rules="all" cellspacing="10" cellpadding="10" style="margin-top:20px; "><tbody>'+
         '<tr align="center">'+
        '<td colspan="3" height="110px"><p class="stp" >  Доп. Числа</p>'+rch1+', '+rch2+', '+rch3+', '+rch4+' <p class="stp" >'+fkol_1+'/ '+fkol_2+'/ '+fkol_3+'/ '+fkol_4+'/ '+fkol_5+'/ '+fkol_6+'/ '+fkol_7+'/ '+fkol_8+'/ '+fkol_9+'/ ЧС '+detnum+' </p></td>' +
        '<td width="120px" height="110px"><p class="stp">Темперамент</p><p class="pifagor-char">'+temp+'</p></td>' +
     

        '<tr align="center">'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Характер</p>'+fkol_1+'</td>'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Здоровье</p>'+fkol_4+'</td>'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Удача</p>'+fkol_7+'</td>'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Цель</p>'+target+'</td>'+
          


        '<tr align="center">'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Энергия</p>'+fkol_2+'</td>'+                                                     
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Логика</p>'+fkol_5+'</td>'+                                                                                                                                           
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Долг</p>'+fkol_8+'</td>'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Семья</p>'+fam+'</td>'+
          


        '<tr align="center">'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Интерес</p>'+fkol_3+'</td>'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Труд</p>'+fkol_6+'</td>'+
          '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Память</p>'+fkol_9+'</td>'+
           '<td width="120px" height="110px"><p class = "pifagor-char"></p><p class = "stp">Привычки</p>'+hab+'</td>'+
          


        '<tr align="center">'+
          '<td width="120px" height="110px">Самооценка<p class = "pifagor-char">'+selfesteem+'</p><p class = "stp"></p><p class = "stp"></p></td>'+                                                     
          '<td width="120px" height="110px">Быт<p class = "pifagor-char">'+life+'</p><p class = "stp"></p><p class = "stp"></p></td>'+                                                                                                                                           
          '<td width="120px" height="110px">Талант<p class = "pifagor-char">'+talent+'</p><p class = "stp"></p><p class = "stp"></p></td>'+
          '<td width="120px" height="110px">Духовность<p class = "pifagor-char">'+spirit+'</p><p class = "stp"></p><p class = "stp"></p></td>'+  
                  
          '</tbody> '
          //'</table></div><br><div>Первая сумма: '+rch1+'<br>Вторая сумма: '+rch2+'<br>Третья сумма: '+rch3+'<br>Четвертая сумма: '+rch4+'<br>Пятая сумма: '+rch5+'<br>Шестая сумма: '+rch6+'</div>'                
                
  }

// Пифагор конец

function mainFunction() {
  var outPut = '';
  var female_date = new Date('' + document.getElementById("months").value + ' ' + document.getElementById("days").value + ', ' + document.getElementById("year").value);
  outPut = outPut + pifagor(female_date);
    return outPut;
}


$("#go-pif").click(function(){
$("#out").html(mainFunction());
  function d(b) {
        return [].reduce.call(b + "", function(a, b) {
            return a + +b
        }, 0)
    }
 
 
});

  


