var floor = 1;
var maxfloor = 5;
var list = document.querySelector('#btn');

for(floor; floor <= maxfloor; floor++) {
    list.innerHTML += "<button id='btn" +floor+ "' onclick='changesvg(this.id)'>" +floor+ "</button>";
}

var i = 1;
var arr = [3, 3, 3, 3, 3];
var beacon = arr[i - 1];
var list = document.querySelector('#content1');

for(i; i <= beacon; i++){
    list.innerHTML += "<h2> beacon " +i+ ": " + "</h2>";
}

let img = document.querySelector('img');


function changesvg(click_id) {
    //맵 변경
    var innertext = document.getElementById(click_id).innerText;
    let changemap = document.querySelector('#' + click_id);

    changemap.addEventListener('click', () => {
        img.src = './map/floor' + innertext +'.svg';
    })



    //맵에 비콘 표시
    var i = 1;
    var beacon = arr[click_id - 1];
for(i; i <= beacon; i++){
    list.innerHTML += "<h2> beacon " +i+ ": " + "</h2>";
}
    // var j = 1;
    // var beaconsvg = arr[innertext - 1];
    // var list = document.querySelector('#marker');
    // var target = document.getElementsByClassName("marker" + j);

    // for(j; j <= beaconsvg; j++){
    //     list.innerHTML += "<span class='marker" +j+ "'>" + "</span>";
    
    //     target.style.left = arr2[beaconsvg - 1][0] + "%";
    //     target.style.top = arr2[beaconsvg - 1][1] + "%";
    // }


}

var temperature = 80;
var humidity = 60;
var list = document.querySelector('#content2');

list.innerHTML += "<h3> Temperature: " +temperature+ "</h3>";
list.innerHTML += "<h3> humidity: " +humidity+ "</h3>";

function site(sitenum) {
    
    var now = 0;
    if(now != sitenum){
        if ( sitenum == 0 ) {
            window.location.href = 'index.html';
        } else if ( sitenum == 1 ) {
            window.location.href = 'chart.html';
        } else {
            window.location.href = 'database.html';
        }
    }

}