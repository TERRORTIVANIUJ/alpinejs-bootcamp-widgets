document.addEventListener('alpine:init', () => {
    Alpine.data('Widget', function(){
        return { 
            showWelcome: true,
            widget1: false,
            widget2: false,
            widget3: false,
            widget4: false,

            BtnC1: false,
            BtnC2: false,
            BtnC3: false,
            BtnC4: false,

            BtnO1: true,
            BtnO2: true,
            BtnO3: true,
            BtnO4: true,

            WidgetBtn1: true,
            WidgetBtn2: true,
            WidgetBtn3: true,
            WidgetBtn4: true,
            
        }
    });
});
//---------------------------GREETING--------------------------//
document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget', function(){
        return { 
            name: '',
            Message: '',
        
            greetMe(){
        
             const Greeting_Message = greet(this.name);
             console.log(Greeting_Message);
             this.Message = Greeting_Message;
        
            setTimeout(() => {
                  this.Message = '';
              }, 5000);
          }
        }
    });
});
//-----------------------------TRANSPORT FEE-----------------------------//
document.addEventListener('alpine:init', () => {
    Alpine.data('transportWidget', function(){
        return { 
            shift: '',
            Fee_Message: '',

            shift1(){
                this.shift = "Morning";
            },

            shift2(){
                this.shift = "Afternoon";
            },
            
            shift3(){
                this.shift = "Nightshift";
            },
            
            FeeAmount() {
        
             const FeeAmount_Message = transportFee(this.shift);
             console.log(FeeAmount_Message);
             this.Fee_Message = FeeAmount_Message;
        
            setTimeout(() => {
                  this.Fee_Message= '';
                  this.shift= '';
                   radio.checked = false;
              }, 5000);
          }
        }
    });
});
//----------------------------------------WORD GAME------------------------//
document.addEventListener('alpine:init', () => {
    Alpine.data('wordgameWidget', function(){
        return { 
            Sentence: '',
            longestWord: '',
            shortestWord: '',
            character: '',

            Word_game_message: false,
        
            longest_Word() {
        
             const long_Word = longestWord(this.Sentence);
             console.log(long_Word);
             this.longestWord= long_Word;

             const short_Word = shortestWord(this.Sentence);
             console.log(short_Word);
             this.shortestWord= short_Word;

             const sentence_length = wordLengths(this.Sentence);
             console.log(sentence_length);
             this.character= sentence_length;
            
            setTimeout(() => {
                this.Sentence= '';
                this.character= 0;
              }, 5000);
          }
        }
    });
});
//----------------------------------------Total phone bill------------------------//
document.addEventListener('alpine:init', () => {
    Alpine.data('TotalphonebillWidget', function(){
        return { 
            phoneBill: '',
            BillsMessage: '',
            BillList: true,
        
            Total_phonebill() {
        
             const Bill_calculating = totalPhoneBill(this.phoneBill);
             console.log(Bill_calculating );
             this.BillsMessage = Bill_calculating ;
            
            setTimeout(() => {
                this.phoneBill= '';
                this.BillsMessage= 0;
                this.BillList= true;
              }, 5000);
          }
        }
    });
});