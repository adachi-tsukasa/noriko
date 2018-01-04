window.onload = () => {

  const oneWorkGettingTicket = 20;
  const onePlayUsingMaxTicket = 300;
  const onePlayGettingPt = 595;
  const onePlayGettingSpecialPt = 595;
  const oneSpecialPlayUsingSpecialPt = 180;
  const oneSpecialPlayGettingPt = 537;

  let totalPtUsingMaxTicket = onePlayGettingPt + ( oneSpecialPlayGettingPt * ( onePlayGettingSpecialPt / oneSpecialPlayUsingSpecialPt));
  document.getElementById('totalPtUsingMaxTicket').textContent = totalPtUsingMaxTicket;        
  var Calc = {
    _count: 0,
  
    start: function(selector) {
      var node = document.querySelector(selector);
      node.addEventListener('click', (evt)=>{
        // let ticketUpperLimit = document.getElementById('ticketUpperLimit').value;
        let target = document.getElementById('target').value;
        // let workcount = ticketUpperLimit / oneWorkGettingTicket;
        // let playcount = target / onePlayGettingPt;
        // let totalworkcount = playcount * ( onePlayUsingMaxTicket / oneWorkGettingTicket);

        // document.getElementById('playcount').textContent = playcount;
        // document.getElementById('totalworkcount').textContent = totalworkcount;
        
        let setCountFirstHalfGame = target / totalPtUsingMaxTicket;
        document.getElementById('setCountFirstHalfGame').textContent = setCountFirstHalfGame;
        let workcountFirstHalfGame = setCountFirstHalfGame * onePlayUsingMaxTicket / oneWorkGettingTicket;
        document.getElementById('workcountFirstHalfGame').textContent = workcountFirstHalfGame;
        let specialPlayFirstHalfGame = (onePlayGettingSpecialPt / oneSpecialPlayUsingSpecialPt) * setCountFirstHalfGame
        document.getElementById('specialPlayFirstHalfGame').textContent = specialPlayFirstHalfGame;
      });
    }
  };
  
  Calc.start('#calc');
};


// 1仕事獲得ticket:work 20
// ticket所持MAX:max 420
// max / work = workcount

// 300ticket = 400pt

// 目標pt:target 10000
// ticketMAX1曲獲得pt: 400pt
// target / ticket = playcount

// playcount * (300/work) = totalworkcount


