$(document).ready(function () {
    // modal on/of
    $(".open-modal").on("click", function () {
        $("#popup-button").fadeIn();
    })
    $(".close").on("click", function () {
        $("#popup-button, #popup-bphone, #popup-mouse").fadeOut();
    })

// close on esc
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $("#popup-button, #popup-bphone, #popup-mouse").fadeOut();
        }
    });

// close on bg
    $(".modal-wrap").on('click', function (event) {
        if ($(event.target).is($(".modal-wrap")) || $(event.target).is('.close')) {
            $("#popup-button, #popup-bphone, #popup-mouse").fadeOut();
        }
    });

// owl init
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
})

function youtubeShowVideo() {
    var i, c, y, v, n;
    v = document.getElementsByClassName("youtube");
    for (n = 0; n < v.length; n++) {
        y = v[n];
        i = document.createElement("img");
        i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
        i.setAttribute("class", "thumb");
        c = document.createElement("div");
        c.setAttribute("class", "play");
        y.appendChild(i);
        y.appendChild(c);
        y.onclick = function () {
            var a = document.createElement("iframe");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            this.parentNode.replaceChild(a, this)
        }
    }
}

youtubeShowVideo();