
function a(a, func) {
	if(a == 5) {
		func();
	}
}


a(7, () => {
	console.log('Ура!')
})