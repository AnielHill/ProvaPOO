import { notas } from "./notas";
import prompt from 'prompt-sync';

let control: notas = new notas(0,0);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`---------------- Menu Interativo ---------------`);
    console.log('1. Pressione o número para descobrir a média.   ');
    console.log('9. Pressione o número para sair. ');

    option = +teclado('Escolha a ação desejada: ');

    switch (option) {
        case 1:
            let valor: number = +teclado('Digite a nota em seu  1° bimestre: ');
            let valor2: number = +teclado('Digite a nota em seu 2° bimestre: ');
            control.media();
            break;
    
            
        default:
            break;
    }
}