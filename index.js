const youtube_key1 = 'AIzaSyBZsc58j_MlbMxhVGgGd3zlutkYf_YI5Mc';
const youtube_key3 = 'AIzaSyDNHu8IpMdtT-OahjS1OihzDCOwTY_n0LU';
const youtube_key2 = 'AIzaSyAYN5p17aWPOB1bOR82dP6_BAbsyAqHY5Q';
const youtube_link = 'https://content.googleapis.com/youtube/v3/search';






var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            var reponseJson = JSON.parse(this.responseText);
            var resultDiv = document.getElementById('my_img111c');
            resultDiv.innerHTML = '';
            for (var i = 0; i < reponseJson.items.length; i++) {
                var elenment = reponseJson.items[i];
                var thumbnailytb = ''
                var titleYTB = ''
                titleYTB = `${elenment.snippet.title}`
                thumbnailytb = `${elenment.snippet.thumbnails.high.url}`
                resultDiv.innerHTML += `<div class="newcontent col-3 col-s-12 cao" onclick="load_video('${elenment.id.videoId}')"><img class="video_thumbnail" src="${thumbnailytb}"><br><h3>${titleYTB}</h3></div>`
                // resultDiv.innerHTML += `<img onclick="load_video('${elenment.id.videoId}')" class="video_thumbnail" src="${elenment.snipet.thumbnails.high.url}">`
            }
        } else {
            alert('hiện tại đang lõi 403')
        }
    }
}
xhr.open('GET', `${youtube_link}?q=hotgirl+china+tiktok&type=video&maxResults=12&part=snippet&key=${youtube_key1}`);
xhr.send();










var myIgms = document.querySelectorAll('.video_thumbnail');
var my_video = document.getElementById('my_video');
var video_youtube = document.getElementById('video_01');
var btnClose = document.querySelector('.close');

btnClose.onclick = function () {
    video_youtube.src = '';
    my_video.style = 'display:none;';
}

for (var i = 0; i < myIgms.length; i++) {
    var element = myIgms[i];
    element.onclick = function () {
        var youtube_video_id = this.title;
        video_youtube.src = `https://www.youtube.com/embed/${youtube_video_id}`
        my_video.style = 'display:block;';
    }
}
var btnSearch = document.getElementById('btnsearch');
var txtkeyWord = document.getElementById('keyWord');
if (btnSearch) {
    btnSearch.onclick = function () {
        document.getElementById('my_img111c').innerHTML = '';
        video_youtube.src = '';
        my_video.style = 'display:none;';
        document.querySelector('.close').style = 'display:none;';
        if (txtkeyWord) {
            var keyword = txtkeyWord.value;
            txtkeyWord.value = '';
            if (keyword && keyword.length > 0) {
                search_videobykeyword(keyword);
            }
        }
    }
}

function search_videobykeyword(keyword) {
    console.log(keyword);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var reponseJson = JSON.parse(this.responseText);
                var resultDiv = document.getElementById('my_img111c');
                resultDiv.innerHTML = '';
                for (var i = 0; i < reponseJson.items.length; i++) {
                    var elenment = reponseJson.items[i];
                    var thumbnailytb = ''
                    var titleYTB = ''
                    titleYTB = `${elenment.snippet.title}`
                    thumbnailytb = `${elenment.snippet.thumbnails.high.url}`
                        resultDiv.innerHTML += `<div class="newcontent col-3 col-s-12 cao" onclick="load_video('${elenment.id.videoId}')"><img class="video_thumbnail" src="${thumbnailytb}"><br><h3>${titleYTB}</h3></div>`
                    // resultDiv.innerHTML += `<img onclick="load_video('${elenment.id.videoId}')" class="video_thumbnail" src="${elenment.snipet.thumbnails.high.url}">`
                }
            } else {
                alert('hiện tại đang lõi 403')
            }
        }
    }
    xhr.open('GET', `${youtube_link}?q=${keyword}&type=video&maxResults=28&part=snippet&key=${youtube_key1}`);
    xhr.send();
}

function load_video(id) {
    video_youtube.src = `https://www.youtube.com/embed/${id}`;
    my_video.style = 'display:block;';
    document.querySelector('.close').style = 'display:block;';
}





















/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            var reponseJson = JSON.parse(this.responseText);
            var resultDiv = document.getElementById('my_img111c');
            var resultDiv2 = document.getElementById('my_img222c');
            resultDiv.innerHTML = '';
            for (var i = 0; i < reponseJson.items.length; i++) {
                var elenment = reponseJson.items[i];
                var thumbnailytb = ''
                var titleYTB = ''
                titleYTB = `${elenment.snippet.title}`
                thumbnailytb = `${elenment.snippet.thumbnails.high.url}`
                if (i < 15) {
                    resultDiv.innerHTML += `<div class="newcontent" onclick="load_video('${elenment.id.videoId}')"><img class="video_thumbnail" src="${thumbnailytb}"><br><h3>${titleYTB}</h3></div>`
                } else if (i >= 15) {
                    resultDiv2.innerHTML += `<div class="newcontent" onclick="load_video('${elenment.id.videoId}')"><img class="video_thumbnail" src="${thumbnailytb}"><br><h3>${titleYTB}</h3></div>`
                }

                // resultDiv.innerHTML += `<img onclick="load_video('${elenment.id.videoId}')" class="video_thumbnail" src="${elenment.snipet.thumbnails.high.url}">`
            }
        } else {
            alert('hiện tại đang lõi 403')
        }
    }
}
xhr.open('GET', `${youtube_link}?q=tiktok+cute+girl+china&type=video&maxResults=30&part=snippet&key=${youtube_key1}`);
xhr.send();





























<div id="my_video" class="modal conten">
    <span class="close">&times;</span>
    <iframe id="video_01" class="modal-content111"></iframe>
</div>
*/