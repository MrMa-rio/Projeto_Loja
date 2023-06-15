export const centavosParaReais =  (valorEmCentavos:number) => {
    const valorEmReais = valorEmCentavos / 100;
    return `R$ ${valorEmReais.toFixed(2)}`;
}