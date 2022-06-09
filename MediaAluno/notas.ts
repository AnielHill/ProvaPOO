export class notas {
    constructor(
        private _notaatual: number,
        private _notabimestre: number,

    ) { }

    public get notaatual(): number {
        return this._notaatual;
    }

    public set notaatual(_notaatual: number) {
        this._notaatual = this.notaatual;
    }

    public get notabimestre(): number {
        return this._notabimestre;
    }

    public set notabimestre(_notabimestre: number) {
        this._notabimestre = this.notabimestre;
    }

    bimestre(valor: number): void {
        this.notabimestre = valor;
      
    }

    media(): void {
       if (this.notaatual >= 60) 
        console.log('O aluno foi aprovado!');
            else 
            console.log('O aluno foi reprovado!');
        
    }

    printbimestre(): string {
        return (
            "Nota do aluno: \n" +
            ("\nVelocidade Permitida:" + this.notabimestre.toFixed(3))
        );
    }
}