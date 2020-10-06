const utterance = new SpeechSynthesisUtterance(); // construindo o objeto dentro
// da constante

utterance.lang = "pt-BR"; // acessando as propriedades do objeto
utterance.rate = 2;

function speak() {
	speechSynthesis.speak(utterance); // speechSynthesis objeto global do JS para fala
}

function stop() {
  speechSynthesis.cancel();
}

function setText(event) {
	utterance.text = event.target.innerText; // acessando o target do texto do evento disparado pelo input
}