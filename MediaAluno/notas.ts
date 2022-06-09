 
export class notas {
    constructor(
        private _nota1: number,
        private _nota2: number,
        private _sn: number
    ) { }

    public get nota1(): number {
        return this._nota1;
    }

    public set nota1(nota1: number) {
        this._nota1 = nota1;
    }

    public get nota2(): number {
        return this._nota2;
    }

    public set nota2(nota2: number) {
        this._nota2 = nota2;
    }

    public get sn(): number {
        return this._sn;
    }

    public set sn(sn: number) {
        this._sn = sn;
    }
        

    atribuir(n1: number, n2: number): void {
        this.nota1 = n1;
        this.nota2 = n2;
        
    }

    Cmedia(): void {
        this.sn = (this.nota1 + this.nota2) / 2;
        console.log('');
        console.log ('a nota do aluno foi: ' + this.sn);
        if (this.sn <= 59.9) {

            console.log('Media para passar: 60 ');
            console.log('');
            console.log('o aluno foi: Reprovado');
            
            

        } else {

            console.log('Media para passar: 60 ');
            console.log('');
            console.log('o aluno foi: Aprovado ');
            
            

        }
 
 }


}