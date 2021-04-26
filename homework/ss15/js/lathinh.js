const cards = document.querySelectorAll('.memory-card');

// thẻ lật
let hasFlippedCard = false;
//khóa con trỏ khi chọn sai
let lockBoard = false;
// thẻ đầu, thẻ tiếp theo
let firstCard, secondCard;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {

  // toán tử bậc ba
  // bằng với
  // if(firstCard.dataset.framework === secondCard.dataset.framework){
  //   disableCards();
  // } else{
  //   unflipCards();
  // }

  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

//nếu là 1 cặp thì không được chọn nữa
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

//nếu không là cặp thì lật úp thẻ
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

//reset các thẻ về null để tiếp tục chọn, tránh trường hợp bấm nhanh 4 thẻ, 2 thẻ sai đầu tiên vẫn lật
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));






// const cards = document.querySelectorAll('.memory-card');
//
// // thẻ lật
// let hasFlippedCard = false;
//
// // let lockBoard = false;
// // thẻ đầu, thẻ tiếp theo
// let firstCard, secondCard;
//
// function flipCard(){
//
//   this.classList.add('flip');
//
//   if(!hasFlippedCard){
//     // first click
//     hasFlippedCard = true;
//     firstCard = this;
//   }else{
//     //second click
//     hasFlippedCard = false;
//     secondCard = this;
//
//
//     if(firstCard.dataset.framework === secondCard.dataset.framework){
//
//       firstCard.removeEventListener('click', flipCard);
//       secondCard.removeEventListener('click', flipCard);
//     } else{
//       setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');
//       }, 1500);
//     }
//   }
//
// }
//
// cards.forEach(card => card.addEventListener('click', flipCard));
