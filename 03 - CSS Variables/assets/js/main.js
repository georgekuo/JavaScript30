const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
 // console.log(this.value) //input 裡的 min, max value
 // console.log(this.dataset)
 const suffix = this.dataset.sizing || '';
 document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach( input => input.addEventListener('change',handleUpdate));
inputs.forEach( input => input.addEventListener('mousemove',handleUpdate));