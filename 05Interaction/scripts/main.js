
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}

setInterval(spin, 16);


// myOtherBox.addEventListener('mouseenter', function(){
// 	rotationSpeed = 0.01;
// 	console.log('mouse enter');
// });

var self = this;

setTimeout( function () {

        // assigning data to HTMLImageElement.src is asynchronous (see #15162)
        // using setTimeout() avoids the warning "Texture marked for update but image is incomplete"

	self.searchTexture.needsUpdate = true;
	self.areaTexture.needsUpdate = true;

}, 0 );