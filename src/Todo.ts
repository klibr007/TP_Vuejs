

export default class Todo {
    constructor(private name: string, private done: boolean){

    }

    public getDone(): boolean{
        return this.done
    }
    public setDone(done: boolean): void{
        this.done = done
    }

    public getName(): string{
        return this.name
    }

    public setName(name: string): void{
        this.name = name
    }
}