
function soundPlay(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return;
  audio.currentTime = 0; //每次 keydown 時，audio 回到第0秒
  audio.play();
  key.classList.add('playing');  
}

function removeTransition(e) { 
  //console.log(e) //TransitionEvent
  if (e.propertyName !== 'transform') return;
  //console.log(this) //this 是 keys 裡的 div
  this.classList.remove('playing') //移除 class 'playing'
}
function clickSound(e){
  const _key_value = this.dataset.key;
  const audio = document.querySelector(`audio[data-key="${_key_value}"]`)
  const key = document.querySelector(`.key[data-key="${_key_value}"]`)
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}
const keys = document.querySelectorAll('.key'); //取得 keys 的 node list
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); //讓 keys 裡每個 div 動畫結束後，馬上移除動畫
keys.forEach(key => key.addEventListener('click', clickSound)); //新增滑鼠點擊

window.addEventListener('keydown', soundPlay)
