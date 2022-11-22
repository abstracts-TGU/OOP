export class TPerson {
    private FAge:number;
    private FName:string;

    constructor(FAge:number,FName:string) {
        this.FAge = FAge;
        this.FName = FName;
    }

    setAge(FAge:number) {
        this.FAge = FAge;
    }

    setName(FName:string){
        this.FName = FName
    }

    getAge(){
        return this.FAge
    }

    getName(){
        return this.FName
    }
}

export class TStudent extends TPerson{


    private FLevel:number;
    private TRating:number;

    getFLevel(): number {
        return this.FLevel;
    }

    setFLevel(value: number) {
        this.FLevel = value;
    }

    getTRating(): number {
        return this.TRating;
    }

    setTRating(value: number) {
        this.TRating = value;
    }
}