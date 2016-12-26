addEventListener("install", event => {
    event.waitUntil(
        caches.open("v1").then(cache =>
            cache.addAll([
                "/",
                "/index.html",
                "/manifest.webmanifest",
                "/dist/bundle.js",
                "/img/icons/ico200.png",
                "/img/gold.png",
                "/img/weight.png",

                "https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js",
                "https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js",
                "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/js/bootstrap.min.js",
                "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css"
            ])
        )
    );
});

addEventListener("fetch", event => {
    event.respondWith(
        caches.open("v1")
            .then(cache =>
                cache.match(event.request)
                    .then(response => {
                        if (typeof response === "undefined") {
                            return fetch(event.request).then(result => {
                                if (isImage(event.request.url)) {
                                    cache.put(event.request, result);
                                }

                                return result;
                            });
                        } else {
                            return response;
                        }
                    })
            )
    );
});

function isImage(url) {
    return url.endsWith(".png") || url.endsWith(".jpg");
}