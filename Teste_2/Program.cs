using System;

namespace Teste_2
{
    class Program
    {
        static void Main(string[] args)
        {
            char opcao = 'S';

            while(opcao == 'S' || opcao == 's'){
                Console.WriteLine("Digite o valor do produto: ");
                decimal valorProduto = Convert.ToDecimal(Console.ReadLine());

                decimal desconto = valorProduto * 0.4m;
                decimal valorFinal = valorProduto - desconto;

                Console.WriteLine($"O produto custava: {valorProduto:C}");
                Console.WriteLine($"Com desconto o produto custará: {valorFinal:C}");
                Console.WriteLine($"O valor do desconto: {desconto:C}");

                Console.WriteLine("Deseja aplicar desconto em outro produto? [S] - Sim / [N] - Não");
                opcao = Convert.ToChar(Console.ReadLine());
            }
        }
    }
}