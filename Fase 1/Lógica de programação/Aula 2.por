programa {
	funcao inicio() {
		inteiro entrada, ano, restAno, mes, restMes, dia
		
		escreva("Informe a idade da pessoa em dias: ")
		leia(entrada)
		
		ano = entrada / 365
		restAno = entrada % 365
		mes = restAno / 30
		dia = restAno % 30
		
		escreva("A idade da pessoa é "+ano+" anos, "+mes+" meses e "+dia+" dias." )
		
	}
}
