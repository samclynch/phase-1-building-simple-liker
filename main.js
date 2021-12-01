// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const likeHearts = document.querySelectorAll('.like-glyph');
  likeHearts.forEach(heart => heart.addEventListener('click', handleHeartClick));
})
function handleHeartClick(e) {
  mimicServerCall()
  .then(() => { const heart = e.target;
if(heart.innerText === EMPTY_HEART){
  heart.innerText = FULL_HEART;
  heart.classList.add('activated-heart');
}else if (heart.innerText === FULL_HEART) {
  heart.innerText = EMPTY_HEART;
  heart.classList.remove('activated-heart');
}
  })
  .catch(error => {
    const errorMsg= "Error:" + error;
        console.log(errorMsg);
    const modal = document.getElementById('modal');
    const modalMsg = document.getElementById('modal-message');
    modal.classList.remove('hidden');
    modalMsg.innerText = errorMsg;
    setTimeout(()=> {
      modal.classList.add('hidden');
    }, 3000);
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
