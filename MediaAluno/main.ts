import { notas } from "./notas";
import prompt from 'prompt-sync';

let control: notas = new notas(0,0,0);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`---------------- Menu Interativo ---------------`);
    console.log('1. Pressione o número para descobrir a média.   ');
    console.log('9. Pressione o número para sair. ');

    option = +teclado('Escolha a ação desejada: ');

    switch (option) {
        case 1:
            let valor1: number = +teclado('Digite sua 1ª nota aqui:');
            let valor2: number = +teclado ('Digite sua 2ª nota aqui: ');
            control.atribuir(valor1, valor2);
            control.Cmedia();

            console.log('');

            break;
        case 2:
            
            
            break;
        default:
            break;
    }
}