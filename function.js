var linksArray, redirect;
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
