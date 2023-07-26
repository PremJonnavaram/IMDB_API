const data = null;
var info;
const xhr = new XMLHttpRequest();


xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		info=JSON.parse(this.responseText);
		console.log(info);
		const list=info.d;
		list.map((item) =>{
			const name=item.l;
			const year=item.y;
			const poster= item.i.imageUrl;
			const movie= 
				`<li> 
					<img src="${poster}"> 
					<h2>
						${name} <br>
						${year}
					</h2> 
				</li>`
			document.querySelector(".movies").innerHTML +=movie;
		})
	}

});

xhr.open('GET', 'https://imdb8.p.rapidapi.com/auto-complete?q=avengers');
xhr.setRequestHeader('X-RapidAPI-Key', '676f67c9bfmsh7f5660ff79924b3p1a6e2djsne2ed6bc25022');
xhr.setRequestHeader('X-RapidAPI-Host', 'imdb8.p.rapidapi.com');

xhr.send(data);

