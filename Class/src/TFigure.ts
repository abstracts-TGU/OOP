export default class TFigure {
	protected figure:HTMLElement;
	protected x=0;
	protected y=0;

	constructor(figure:HTMLElement){
		this.figure = figure
		this.movementHandler()
	}
	movementHandler(){
		let isMouseDown = false
		this.figure.addEventListener('mousedown',()=>{
			isMouseDown = true
		})
		this.figure.addEventListener('mouseup',()=>{
			isMouseDown = true
		})
		this.figure.addEventListener('mousemove',(e)=>{
			if (!isMouseDown) return
			this.x+=e.movementX
			this.y+=e.movementY

			this.figure.style.transform = `translate(${this.x}px,${this.y}px)`
		})
	}
} 