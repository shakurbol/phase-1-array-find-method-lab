// code your solution here
function superbowlWin(record) {
    const winningGame = record.find(game => game.result === "W");
  
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }
  
  
  const superBowlRecords = [
    { year: 2020, result: "L" },
    { year: 2021, result: "W" },
    { year: 2022, result: "L" },
  ];
  
  const winningYear = superbowlWin(superBowlRecords);
  console.log(winningYear); 
  