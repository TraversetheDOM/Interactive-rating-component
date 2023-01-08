
class InteractiveRatingComponent {
	#feedbackComponent = document.querySelector('.feedback__component');
	#gratitudeComponent = document.querySelector('.gratitude__component'); 
	#ratingButtonContainer = document.querySelector('.feedback__component-btns'); 
	#ratingButtons = document.querySelectorAll('.btn'); 
	#gratitudeRating = document.querySelector('.gratitude__component-message'); 

	constructor () {
		this.#feedbackComponent.addEventListener('click', this.#submitRating.bind(this)); 
		this.#ratingButtonContainer.addEventListener('click', this.#selectRating.bind(this)); 
	}

	// Take advantge of Event Propagation to handle the submit button. 
		#submitRating(evtObj) {
			if(!evtObj.target.classList.contains('btn__submit') || !this.#gratitudeRating.firstElementChild.innerHTML) return; 
			evtObj.currentTarget.classList.add('hide'); 
			this.#gratitudeComponent.classList.remove('hide'); 
		}

	// Handling the buttons. 	
		#selectRating(evtObj) {
			const clickedButton = evtObj.target.closest('.btn'); 
			console.log(clickedButton); 

			// if (!clickedButton) return; 


			for(let i = 0; i < this.#ratingButtons.length; i++) {
				this.#ratingButtons[i].classList.remove('btn__active'); 
			}
			clickedButton.classList.add('btn__active'); 
			this.#gratitudeRating.firstElementChild.innerHTML = clickedButton.firstElementChild.innerHTML
		}

}


const ratingComponent = new InteractiveRatingComponent(); 









