function getArtistsAPI() {
    function success() {
        let data = JSON.parse(this.responseText);
        for(let i = 0; i <= 5; i++) {
            document.getElementById("artist" + i).innerHTML = data.artists[i].name;
        }
        const btn = document.getElementById("getCollection");
        btn.style.display = "none";
    }
    function error(err){
        console.log('Request Failed', err);
    }
    
    var xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET', 'http://localhost:8080/artists' )
    xhr.send();
}

function getArtist(x) {
    function success() {
        let data = JSON.parse(this.responseText);
        let name = "Artist Name: " + data.artists[x].name;
        let genre = "Genre: " + data.artists[x].genre;
        let label ="Label: " + data.artists[x].label;
        let totalAlbums ="Total Number of Albums: " + data.artists[x].totalNumOfAlbums;
        let albumsInRecord = "Total Albums contained in this record: " + data.artists[x].numOfAlbumsInRecord;
        let numText = x.toString();
        let myfunction = "getArtistsAlbums(" + numText + ")";
        let button = "<button onclick=" + myfunction + ">Click to see this Artist's Albums</button>";
        let list = name + "<br>" + genre + "<br>" + label + "<br>" + totalAlbums + "<br>" + albumsInRecord + "<br>" + "<br>" + button;

    
        document.getElementById("detail").innerHTML = list +"<br>" + "<br>" + "<div id=\"albums\"></div>";

    }
    function error(err){
        console.log('Request Failed', err);
    }
    
    var xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET', 'http://localhost:8080/artists' )
    xhr.send();
}

function getArtistsAlbums(x) {
    function success() {
        let data = JSON.parse(this.responseText);

        let album0 = "Album Name: " + data.artists[x].albums[0].title + "<br>" + "Album Artist: " + data.artists[x].albums[0].artist + "<br>" + "Album Length: " + data.artists[x].albums[0].length + "<br>" + "Year of Release: " + data.artists[x].albums[0].year + "<br>" + "Album Total Tracks: " + data.artists[x].albums[0].numTracks;
        let album1 = "Album Name: " + data.artists[x].albums[1].title + "<br>" + "Album Artist: " + data.artists[x].albums[1].artist + "<br>" + "Album Length: " + data.artists[x].albums[1].length + "<br>" + "Year of Release: " + data.artists[x].albums[1].year + "<br>" + "Album Total Tracks: " + data.artists[x].albums[1].numTracks;
        let album2 = "Album Name: " + data.artists[x].albums[2].title + "<br>" + "Album Artist: " + data.artists[x].albums[2].artist + "<br>" + "Album Length: " + data.artists[x].albums[2].length + "<br>" + "Year of Release: " + data.artists[x].albums[2].year + "<br>" + "Album Total Tracks: " + data.artists[x].albums[2].numTracks;

        document.getElementById("albums").innerHTML = album0 + "<br>" + "<br>" + album1 + "<br>" + "<br>" + album2;
    }
    function error(err){
        console.log('Request Failed', err);
    }
    
    var xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET', 'http://localhost:8080/artists' )
    xhr.send();
}


