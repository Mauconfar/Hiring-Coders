programa {
	funcao inicio() {
		inteiro num, contador, resultado
		escreva("Escolha qual tabuada: ")
		leia(num)
		
		contador = 0
		
		enquanto(contador <= 10){
		    resultado = num * contador
		    escreva(contador+" x "+num+" = "+resultado+"\n")
		    contador = contador + 1
		    
		    
		}
	}
}
