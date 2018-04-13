console.log('js');

let clickCount = 0;

$(document).ready(onReady);

function onReady(){
    console.log('jQuery');
    $('#counterButton').on('click', clickHandler);
    updateDomCount();
}
function clickHandler() {
    console.log('counter button clicked');
    clickCount++;
    console.log(clickCount);
    updateDomCount();
    addNewCreature();
}

function updateDomCount() {
    $('#totalCount').text(clickCount);
}

function addNewCreature() {
    $('#creatureList').append(
        '<tr>' +
                '<td>' + $('#newCreatureName').val() + '</td>' +
                '<td>' + $('#newCreatureSize').val() + 'ft</td>' +
                '<td>' + $('#newCreatureType').val() + '</td>' +
                '<td>' + $('#newCreatureSpeed').val() + 'mph</td>' +
            '</tr>' 
    );
}