import TFigure from "./TFigure"

export default class TCircle extends TFigure{
	constructor(root:HTMLElement, radius:number, x:number, y:number){
		super();
		this.figure = document.createElement('canvas')  as HTMLCanvasElement
		this.figure.width = radius*2 + 1;
		this.figure.height = radius*2 + 1
		let ctx = this.figure.getContext('2d')
		ctx.arc(radius,radius,radius,0,2*Math.PI)
		ctx.stroke()
		root.append(this.figure)
		this.figure.style.transform = `translate(${x}px,${y}px)`
		this.x = x;
		this.y = y;
		this.figure.style.position = "absolute"
		this.movementHandler()
	}
}