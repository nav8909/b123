self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        // cache.add('/');
        // cache.add('/index.html');
        // cache.add('/src/js/app.js');
        cache.addAll([
          '/',
          // '/index.html',
          // '/src/js/app.js',
          // '/src/css/app.css',
          // '/src/images/pwa.jpg',
          // 'https://fonts.googleapis.com/css?family=Raleway:400,700',

          './css/style.css',
          './src/css/menu-r.css',
          './src/img/HM.png',
          './src/img/icon_bed.png',
          './src/img/icon_people.png',
          './src/img/icon_size.png',
          './src/img/services.png',
          './src/img/1508774072.jpg',
          './src/img/1513285844.jpg',
          './src/img/1513285858.jpg',
          './src/img/alrededores1.jpg',
          './src/img/alrededores2.jpg',
          './src/img/alrededores3.jpg',
          './src/img/alrededores4.jpg',
          './src/img/bar4.jpg',
          './src/img/ecentos1.jpg',
          './src/img/ecentos2.jpg',
          './src/img/ecentos3.jpg',
          './src/img/gastronomia4.jpg',
          './src/img/habitacion-1.jpg',
          './src/img/habitacion-2.jpg',
          './src/img/habitacion-3.jpg',
          './src/img/historia1.jpg',
          './src/img/historia2.jpg',
          './src/img/historia3.jpg',
          './src/img/historia4.jpg',
          './src/img/HM-rest.jpg',
          './src/img/rooms.jpg',
          './envio.php',
          './src/js/jquery-2.1.3.min.js',
          './src/js/menu.js',
          './src/js/main.js',
          './index.html',
          './bar.html',
          './eventos.html',
          './explorar.html',
          './HM.html',
          './promociones.html',
          './restaurante.html',
          './room.html',
          './ibl-fv.png',
          './HM.png',
          './manifest.json',
          'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900',
          'https://use.fontawesome.com/releases/v5.3.1/css/all.css'
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});