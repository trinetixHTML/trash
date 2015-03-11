var linksArray = [
"https://u.d3.ru/comments/683913/",
"http://www.zara.com",
];

var redirect;
for (i=0; i<linksArray.length; i++){
	if (document.location == linksArray[i]){
		redirect = linksArray[i+1];
	};
};
if (redirect == undefined){
	redirect = "hui";
}
console.log(redirect);
// window.location.assign(redirect);
