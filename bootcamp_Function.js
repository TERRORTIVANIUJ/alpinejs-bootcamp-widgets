//--------------------GREETING--------------------------//

function greet(name) {
    return "Hello, " + name;
    };

//-------------------TRANSPORT FEE--------------------//
function transportFee(shift) {
    if (shift === "Morning" ){
    return "R20";
    }else if (shift === "Afternoon"){
    return "R10";
    }else if (shift === "Nightshift" ){
    return "free";
    }
    };
//------------------------WORD GAME-------------------------------//
//Find the longest word//
function longestWord(Sentence){
    var wordSentL =Sentence.split(" ");
      var longWord = 0;
      
      for (var i = 0; i < wordSentL.length ; i++){
      if (wordSentL[i].length >= longWord){
      longWord = wordSentL[i].length;
        var word = wordSentL[i];
      }
      }
      return word; 
    };
    
    //Find the shortest word//
    function shortestWord(Sentence){
    var wordSentS = Sentence.split(" ");
      var shortWord = wordSentS[0];
      
      for (var i = 0; i < wordSentS.length ; i++){
      var wordsS = wordSentS[i];
        console.log(wordsS);
        if (wordsS.length <= shortWord.length){
        shortWord = wordsS;
        }
      }
    return shortWord;
    };
  
    
    //Sum the length of each word in a sentence//
    function wordLengths(Sentence){
    var wdL = Sentence.split(" ");
      var wordLength = wdL.map(c => c.length);
      let total = 0;
      for (var i = 0; i < wordLength.length; i ++){
      total += wordLength[i]
      }
    return total;
    };
    //--------------------------------------Expensive items--------------------------------//
    function totalPhoneBill(phoneBill){
      const Bill = phoneBill.split(",");
      const call = 2.75; 
      const sms = 0.65;
      var totalBill = 0;
        
        for (var i = 0 ; i < Bill.length; i++ ){
        let BillList = Bill[i].trim();
          
          if (BillList === "call"){
          totalBill = totalBill + call;
          }else {
              totalBill = totalBill + sms;
          }
        }
        return totalBill.toFixed(2) ;
      }
