
function newparagrafo(){
	let pe
	const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		var cont=0;
        
        const element = document.getElementById("div1")
		let teste = xhr.responseText;
		var urlRegex = /(https?:\/\/[^ ]*)/;
		var input = teste;
		var url = input.match(urlRegex)[1];
		url = url.replace('"}]','');
		let im = document.createElement("img");
		im.setAttribute("src", url);
       
		element.appendChild(im);
        im.setAttribute("id", "responsive");
        
	}
});

xhr.open("GET", "https://random-recipes.p.rapidapi.com/ai-quotes/1");
xhr.setRequestHeader("X-RapidAPI-Host", "random-recipes.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "9c2551b869mshc8173a28e9ebecdp14e04bjsne4e4b3f756f5");

xhr.send(data);


	
	}