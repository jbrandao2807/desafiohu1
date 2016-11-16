# Desafio de auto-complete e busca disponibilidade

Neste problema você deve implementar o widget de busca de hoteis. Este desenvolvimento engloba o auto-complete de hoteis e a busca por disponibilidades quando o usuário informa um periodo de estadia. 

A interface em anexo precisa ser implementada assim como o backend para consumir a lista de hoteis e as disponibilidades. Tudo será avaliado. Faça o seu melhor na linguagem onde vc possui o maior domínio.

***Restrições***
* Eu preciso conseguir rodar seu código no mac os x OU no ubuntu;
* Eu vou executar seu código com os seguintes comandos:

>1. *git clone seu-fork*
2. *cd seu-fork*
3. *comando para instalar dependências*
4. *comando para executar a aplicação*

Esses comandos tem que ser o suficiente para configurar meu mac os x OU ubuntu e rodar seu programa. Pode considerar que eu tenho instalado no meu sistema Python, Java, PHP, Ruby, Android, iOS e/ou Node. Qualquer outra dependência que eu precisar vc tem que prover.

***Performance***
* Preciso que os seus serviços suportem um volume de 1000 requisições por segundo

***Artefatos***
* Imagens e database de hoteis e disponibilidades estão na pasta artefatos




***Notas do Dev***
 O comando de start do projeto é npm start.
 Utilizei o loadtest para teste de carga.
 ```
 PS C:\Windows\system32> loadtest -c 1200 --rps 1200 http://localhost:3000/services/autocomplete/araru
 [Tue Nov 15 2016 22:48:15 GMT-0200 (Horário brasileiro de verão)] INFO Requests: 0, requests per second: 0, mean latency: 0 ms
 [Tue Nov 15 2016 22:48:20 GMT-0200 (Horário brasileiro de verão)] INFO Requests: 6000, requests per second: 1200, mean latency: 40.6 ms
 [Tue Nov 15 2016 22:48:25 GMT-0200 (Horário brasileiro de verão)] INFO Requests: 12000, requests per second: 1202, meanlatency: 17.6 ms
 ```
 