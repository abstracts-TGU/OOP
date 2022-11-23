import TFigure from "./TFigure"

export default class TCircle extends TFigure{
	constructor(root:HTMLElement, radius:number, x:number, y:number){
		this.figure = document.createElement('canvas')
		let canvas = this.figure.getContext("2d")
		canvas.width = radius
		canvas.height = radius
	}
}