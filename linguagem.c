#include <stdio.h>

// Função para calcular consumo e custo
void calcularConsumo(char tipoAnimal[], int quantidadeAnimais, double custoPorKilo, double consumoDiarioPorAnimal) {
    double consumoDiarioTotal = consumoDiarioPorAnimal * quantidadeAnimais;
    double consumoMensal = consumoDiarioTotal * 30;
    double custoMensal = consumoMensal * custoPorKilo;

    printf("Resultados para o animal %s:\n", tipoAnimal);
    printf("Quantidade de kilo por animal por dia: %.2f kg\n", consumoDiarioPorAnimal);
    printf("Quantidade total por dia: %.2f kg\n", consumoDiarioTotal);
    printf("Quantidade total por mês: %.2f kg\n", consumoMensal);
    printf("Custo estimado por mês: R$ %.2f\n", custoMensal);
}

int main() {
    char tipoAnimal[50];
    int quantidadeAnimais;
    double custoPorKilo;
    double consumoDiarioPorAnimal;

    // Entrada de dados
    printf("Digite o tipo de animal: ");
    scanf("%s", tipoAnimal);

    printf("Digite a quantidade de animais: ");
    scanf("%d", &quantidadeAnimais);

    printf("Digite o custo estimado por kilo de comida: ");
    scanf("%lf", &custoPorKilo);

    printf("Digite o consumo diário por animal (em kg): ");
    scanf("%lf", &consumoDiarioPorAnimal);

    // Cálculo e exibição dos resultados
    calcularConsumo(tipoAnimal, quantidadeAnimais, custoPorKilo, consumoDiarioPorAnimal);

    return 0;
}
