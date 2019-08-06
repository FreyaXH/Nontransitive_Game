


function generateGamers(){
    var HTselect1 = document.getElementById('HTSelect1').value;
    var HTselect2 = document.getElementById('HTSelect2').value;
    var HTselect3 = document.getElementById('HTSelect3').value;
    var input1, input2, input3;
    var input11, input22, input33;
    if (HTselect1 === "H"){
          input10 = "Head   "
          input2 = "Head   ";
    }else{
          input10 = "Tail   "
          input2 = "Tail   ";
    }
    if (HTselect2 === "H"){
          input20 ="Head   "
          input1 = "Tail   ";

          input3 = "Head   ";
    }else{
          input20 = "Tail   "
          input1 = "Head   ";
          input3 = "Tail   ";
    }
    if (HTselect3 === "H"){
          input30 ="Head   "
    }else{
          input30 ="Tail   "
    }
    document.getElementById('p1Text').innerHTML = "Your Choice :   "+input10 + input20 +  input30;
    document.getElementById('p2Text').innerHTML = "Computer's Choice :   "+input1 + input2 +  input3;

}

function calculateTheOdds(){
    var HTselect1 = document.getElementById('HTSelect1').value;
    var HTselect2 = document.getElementById('HTSelect2').value;
    var HTselect3 = document.getElementById('HTSelect3').value;
    if (HTselect1 === "H" && HTselect2 === "H" && HTselect3 === "H"){
       var odds = "Odds in favour of Computer: 7:1  ";
    }else if (HTselect1 === "H" && HTselect2 === "H" && HTselect3 === "T"){
        var odds = "Odds in favour of Computer: 3:1  ";
    }else if (HTselect1 === "H" && HTselect2 === "T" && HTselect3 === "H"){
        var odds = "Odds in favour of Computer: 2:1  ";
    }else if (HTselect1 === "H" && HTselect2 === "T" && HTselect3 === "T"){
        var odds = "Odds in favour of Computer: 2:1  ";
    }else if (HTselect1 === "T" && HTselect2 === "H" && HTselect3 === "H"){
        var odds = "Odds in favour of Computer: 2:1  ";
    }else if (HTselect1 === "T" && HTselect2 === "Head2" && HTselect3 === "T"){
        var odds = "Odds in favour of Computer: 2:1  ";
    }else if (HTselect1 === "T" && HTselect2 === "T" && HTselect3 === "H"){
        var odds = "Odds in favour of Computer: 3:1  ";
    }else if (HTselect1 === "T" && HTselect2 === "T" && HTselect3 === "T"){
        var odds = "Odds in favour of Computer: 7:1  ";
    }

  document.getElementById('pText').innerHTML = odds
}

                  var traces = [];
                  var player1 = 0;
                  var computer1 = 0;
                   var player2 = 0;
                  var computer2 = 0;
                  helper_flag = false;
                  function Toss() {
                        if (Math.random() < 0.5) {
                              traces.push("H");
                        } else {
                              traces.push("T");
                        }
                  }
                  function CoinGame() {
                        document.getElementById("b3").disabled = true;
                        document.getElementById('coin').innerHTML = '';
                        console.trace()
                        traces = [];
                        // Record User input
                        var user_select1 = document.getElementById('HTSelect1').value;
                        var user_select2 = document.getElementById('HTSelect2').value;
                        var user_select3 = document.getElementById('HTSelect3').value;
                        var user_choice = user_select1 + user_select2 + user_select3;
                        if (user_select1 === "H"){
                        com_select_2 = "H";
                        }else{
                        com_select_2 = "T";
                        }
                        if (user_select2 === "H"){
                        com_select_1 = "T";
                        com_select_3 = "H";
                        }else{
                        com_select_1 = "H";
                        com_select_3 = "T";
                        }

                        var computer_choice = com_select_1 + com_select_2 + com_select_3;

                        helper(0,user_choice,computer_choice)

                  }
                  function helper(count, user_choice, computer_choice) {
                        setTimeout(() => {
                              Toss()
                              document.getElementById('coin').innerHTML += traces[count];
                              count ++;
                              if (count >= 3) {
                                    var lastThreeTraces = traces[count - 3] + traces[count - 2] + traces[count - 1];
                                    if (user_choice == lastThreeTraces) {
                                          whoIsWinner = "Player has won! ";
                                          winner = true;
                                          player1++;
                                          document.getElementById('winner').innerHTML = "The Winner is: " + whoIsWinner;
                                          document.getElementById('player').innerHTML = "Player Score: "+player1;
                                          document.getElementById('computer').innerHTML = "Computer Score: "+computer1;
                                          document.getElementById("b3").disabled = false;
                                          return
                                    }

                                    if (computer_choice == lastThreeTraces) {
                                          whoIsWinner = "Computer has won! ";
                                          winner = true;
                                          computer1++;
                                          document.getElementById('winner').innerHTML = "The Winner is: " + whoIsWinner;
                                          document.getElementById('player').innerHTML = "Player Score: "+ player1;
                                          document.getElementById('computer').innerHTML = "Computer Score: " + computer1;
                                          document.getElementById("b3").disabled = false;
                                          return
                                    }
                              }
                              helper(count,user_choice,computer_choice)
                        }, 500);

                  }



