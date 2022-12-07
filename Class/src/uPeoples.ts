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
    getGroup(): string {
        return this.group;
    }

    setGroup(value: string) {
        this.group = value;
    }


    private FLevel:number;
    private TRating:number;
    private group:string

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

export class TTeacher extends TPerson{


    private kaf:string;

    getKaf(): string {
        return this.kaf;
    }

    setKaf(value: string) {
        this.kaf = value;
    }

}