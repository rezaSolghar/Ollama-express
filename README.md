This app using an open source small language model (Phi3:mini) provided by ollama to create random math question with 4 answers, base on the exact subject of math that come in the URL as parameter. 


1- installing ollama in localhost : https://ollama.com/

2- pull the phi3:mini into the ollama: ollama pull phi3:mini


3- list of all math subjects: http://localhost:4000/RandomMathProblemCreator
this api returns a list of subjects.


4- create a random question of a subject : http://localhost:4000/RandomMathProblemCreator/Algebra
this api provide the parsed question and answers.



