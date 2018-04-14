var targetList = ['top',"me","fav","develop","contact"];
var targetID = null;
var href = window.location.href;
var navTag = document.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0];

function navLiClassAdd(i) {
	// [active]class delete
	let active = document.getElementsByClassName('active');
	if ( active[0] != undefined ) {
		active[0].classList.toggle('active');
	}
	// [active]class add
	let li = navTag.getElementsByTagName("li");
	li[i].classList.toggle('active');
}

function navClick(e){
	let aTagName = e['path']['0']['hash'];
	for (let i = targetList.length - 1; i >= 0; i--) {
		if ( aTagName == "#"+targetList[i]) {
			navLiClassAdd(i);
		}
	}
}

window.onload = function(){
	// Highlight section search
	for (var i = targetList.length - 1; i >= 0; i--) {
		if ( href.match(targetList[i]) ) {
			targetID = targetList[i];
			break;
		}
	}
	if ( targetID == null) targetID = "top";
	if ( i == -1 ) i = 0;
	navLiClassAdd(i)

	// <a>Tag clickEvent add
	let navLinks = navTag.getElementsByTagName('a');
	for (var u = navLinks.length - 1; u >= 0; u--) {
		navLinks[u].addEventListener('click', function(e){navClick(e)}, false);
	}
};

window.onscroll = function(){

};
