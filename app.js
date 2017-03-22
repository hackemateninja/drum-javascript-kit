((d,w)=>{
	function playSound(e){
		const audio = d.querySelector(`audio[data-key="${e.keyCode}"]`),
	   		key = d.querySelector(`.key[data-key="${e.keyCode}"]`);
		if (!audio) return; //stop the function from running all together
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');
   }
	function removeTransition(e){
		if (e.propertyName!== 'transform') return; //skip it if it´s not a transform
		this.classList.remove('playing');
	}
	const keys = d.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	w.addEventListener('keydown', playSound);
})(document, window);
