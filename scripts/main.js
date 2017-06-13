// (function () {
/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

  function handValue (hand) {
    console.groupCollapsed('handValue');
    console.log(hand);
    let staticTotal = 0;
    let finalTotal = 0;
    let aceNumber = 0;
    for (let i = 0; i < hand.length; i++) {
      switch (hand[i]) {
        case 'J':
        case 'Q':
        case 'K':
          staticTotal += 10;
          console.log('facecard');
          console.log('staticTotal');
          break;
        case 'A':
          aceNumber++;
          break;
        default:
          staticTotal += parseInt(hand[i]);
          console.log('number default');
          console.log(staticTotal);
      }
    }
    if (aceNumber === 0) {
      console.log('staticTotal');
      console.groupEnd();
      return staticTotal;
    } else {
      finalTotal = staticTotal;
      for (let i = 0; i < aceNumber; i++) {
        let lowBall = finalTotal + 1;
        let highBall = finalTotal + 11;
        if (highBall > 21) {
          console.log('ace = 1');
          finalTotal = lowBall;
        } else {
          console.log('ace = 11');
          finalTotal = highBall;
        }
      }
      console.log(finalTotal);
      console.groupEnd();
      return finalTotal;
    }
  }
  console.groupCollapsed('tests');
  console.log(handValue(['2', '2', '8']), 12);
  console.log(handValue(['2', '2', 'K']), 14);
  console.log(handValue(['2', 'Q']), 12);
  console.log(handValue(['7', 'J']), 17);
  console.log(handValue(['7', 'A']), 18);
  console.log(handValue(['8', 'J', 'A']), 19);
  console.log(handValue(['8', 'A', 'J']), 19);
  console.log(handValue(['8', '7', 'A', 'A']), 17);
  console.groupEnd();
/* -----  Hints ------
assert(['2', '2', '8'], 12);
assert(['2', '2', 'K'], 14);
assert(['2', 'Q'], 12);
assert(['7', 'J'], 17);
assert(['7', 'A'], 18);
assert(['8', 'J', 'A'], 19);
assert(['8', 'A', 'J'], 19);
assert(['8', '7', 'A', 'A'], 17);

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11
*/
// }());
