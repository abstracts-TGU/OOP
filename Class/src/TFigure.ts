export default class TFigure {
	protected figure:HTMLCanvasElement;
	protected x=0;
	protected y=0;

	constructor(){
	}
	movementHandler(){
		let isMouseDown = false
		this.figure.style.cursor ="grab";
		this.figure.addEventListener('mousedown',()=>{
			isMouseDown = true
		})
		document.addEventListener('mouseup',()=>{
			isMouseDown = false
		})
		document.addEventListener('mousemove',(e)=>{
			if (!isMouseDown) return
			this.x+=e.movementX
			this.y+=e.movementY

			this.figure.style.transform = `translate(${this.x}px,${this.y}px)`
		})
	}
} 