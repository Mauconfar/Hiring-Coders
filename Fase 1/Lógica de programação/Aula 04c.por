programa {
	funcao inicio() {
		inteiro n, valorFinal, quadrado
		
		escreva("Informe o valor final: ")
		leia(valorFinal)
		
		para(n = 2; n <= valorFinal; n = n + 2){
		    quadrado = n * n
		    escreva("Quadrado de "+n+" = "+quadrado+"\n")
		    
		}
	}
}
