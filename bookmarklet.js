var linksArray = [
"http://vk.com/id291716452?z=photo291716452_358007759",
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
