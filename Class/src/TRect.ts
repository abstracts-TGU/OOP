import TFigure from "./TFigure"

export default class TRect extends TFigure{
	constructor(root:HTMLElement, width:number,height:number, x:number, y:number){
		super();
		this.figure = document.createElement('canvas')  as HTMLCanvasElement
		this.figure.width = width;
		this.figure.height = height
		let ctx = this.figure.getContext('2d')
		ctx.rect(0,0,width,height)
		ctx.stroke()
		root.append(this.figure)
		this.figure.style.transform = `translate(${x}px,${y}px)`
		this.x = x;
		this.y = y;
		this.figure.style.position = "absolute"
		this.movementHandler()
	}
}