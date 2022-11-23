interface ProjectileConstructor{
    startSize:number;
    endSize:number;
    TTL:number;
    root:HTMLElement;
}

export default class Projectile{

    private size:number;
    private endSize:number;
    private speed:number;
    private TTL:number;
    private x:number;
    private y:number;
    private x0:number;
    private y0:number;
    private Vx:number;
    private Vy:number;
    private Vy0:number;  
    private time:number;
    private root:HTMLElement;
    private r:number;
    private g:number;
    private b:number;
    private gravity:number = 200;
    ProjectileHTML:HTMLElement;

    constructor({startSize,endSize,TTL,root}:ProjectileConstructor) {
        this.TTL = TTL;
        this.endSize = endSize;
        this.size = startSize;
        this.root = root;
        this.ProjectileHTML = document.createElement('div')
        this.r = 255;
        this.g = 165;
        this.b = 0;
        Object.assign(this.ProjectileHTML.style,{
            "border-radius": "50%",
            "position":"absolute",
            "height":this.size+"px",
            "width":this.size+"px",
            "background": `rgb(${this.r},${this.g},${this.b})`,
            "left": 0,
            "top":0,
            "transition": "opacity 100s",
        })
    }

    launch(x0:number,y0:number,Vx:number,Vy:number){
        this.x0 = x0;
        this.y0 = y0;
        this.x = x0;
        this.y = y0;
        this.Vx = Vx;
        this.Vy = this.Vy0 = Vy;
        this.time = new Date().getTime();
        this.root.append(this.ProjectileHTML)
        this.move(0)
    }
    // color: #000000
    private move(t:number){
        this.time = new Date().getTime()
        this.x = this.x0  + this.Vx * t/1000
        this.y = this.y0  + this.Vy * t/1000
        this.Vy = this.Vy0 + this.gravity * t/1000
        let size = this.size - (this.size - this.endSize) * t/this.TTL
        let r = this.r - (this.r - 100) / this.TTL * t
        let g = this.g - (this.g - 10) / this.TTL * t
        let b = this.b - this.b / this.TTL * t
        Object.assign(this.ProjectileHTML.style,{
            "transform":`translate(${this.x}px,${this.y}px)`,
            "height":size +"px",
            "width":size+"px",
            "background": `rgb(${r},${g},${b})`,

        })
        if (t > this.TTL) {
            this.destroy()
            return
        }
        setTimeout(()=>{
            let date = new Date().getTime()
            console.log(date - this.time)
            t = t + date - this.time
            return this.move(t)
        },0)
    }

    destroy(){
        this.ProjectileHTML.remove()
        delete this.ProjectileHTML
        delete this.root
    }
}