programa {
	funcao inicio() {
		inteiro num, contador, resultado
		
		escreva("Escolha qual tabuada: ")
		leia(num)
		
		para(contador = 0; contador <= 10; contador = contador + 1){
		    resultado = num * contador
		    escreva(contador+" x "+num+" = "+resultado+"\n")
		}
	}
}
