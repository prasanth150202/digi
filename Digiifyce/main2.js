
let imageURLs = [
	{
		background: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/The-Hunger-Games-Movies-in-Order.jpg',
		book: 'THE HUNGER GAMES',
		lead: 'KATNISS EVERDEEN'
	},
	{
		background: 'https://cdn.europosters.eu/image/hp/80594.jpg',
		book: 'HARRY POTTER',
		lead: 'HARRY POTTER'
	},
	{
		background: 'https://m.media-amazon.com/images/S/pv-target-images/06b3a88bd674980e8dfab3347c9d991379ba476b024a3a4a64556ebff88c8191.jpg',
		book: 'THE LORD OF THE RINGS',
		lead: 'FRODO'
	},
	{
		background: 'https://staticg.sportskeeda.com/editor/2022/09/12868-16637352225600-1920.jpg',
		book: 'THE HOBBIT',
		lead: 'BILBO BAGGINS'
	},
	{
		background: 'https://i0.wp.com/subjectifymedia.com/wp-content/uploads/2022/11/percy-jackson-and-the-olympians-book-poster.jpg?fit=1300%2C650&ssl=1',
		book: 'PERCY JACKSON',
		lead: 'PERCY JACKSON'
	}
]

let prevScroll = 0

let imageSliderContainer = document.querySelector('.image-slider-container')

imageURLs.forEach((image) => {
	let divElement = document.createElement('div')
	divElement.classList.add("image")
	
	let childDivElement = document.createElement('div')
	childDivElement.classList.add("details-bg")
	
	let detailsDivElement = document.createElement('div')
	detailsDivElement.classList.add('details')
	
	let titleElement = document.createElement('p')
	titleElement.classList.add('title')
	titleElement.innerText = `TITLE: ${image.book}`
	detailsDivElement.appendChild(titleElement)
	
	let leadElement = document.createElement('p')
	leadElement.classList.add('lead')
	leadElement.innerText = `LEAD: ${image.lead}`
	detailsDivElement.appendChild(leadElement)
	
	childDivElement.appendChild(detailsDivElement)
	
	divElement.appendChild(childDivElement)
	
	divElement.style.backgroundImage = `url(${image.background})`
	imageSliderContainer.appendChild(divElement)
})

selectBackground = () => {
	let imageSliderBg = document.querySelector('.image-slider-bg')
	let images = imageSliderContainer.querySelectorAll('.image')
	images.forEach((image, index) => {
		let computedStyle = window.getComputedStyle(image)
		let opacity = computedStyle.getPropertyValue('opacity')
		
		if(+opacity > 0.75) {
			imageSliderBg.style.backgroundImage = `url(${imageURLs[index].background})`
			
			images[index].scrollIntoView({behavior: 'smooth'})
		}
	})
}

initialBackground = () => {
	let imageSliderBg = document.querySelector('.image-slider-bg')
	imageSliderBg.style.backgroundImage = `url(${imageURLs[0].background})`
}

initialBackground()

imageSliderContainer.addEventListener('scroll', selectBackground)