// scripts.js
//zdeklaracja tablic
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

//zmiana ciągu znaków na wielkie litery
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

//zamiana ciągu znaków z zadeklarowanego ciągu znaków na inny 'replace'
var textVelociraptorAfter = text.replace('Velociraptor', 'Dinosaur');
console.log(textVelociraptorAfter);