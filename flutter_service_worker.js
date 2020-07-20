'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "957943782f791017f6919b2f913307d9",
"/": "957943782f791017f6919b2f913307d9",
"main.dart.js": "c9294b20a44f641d929d5c5462ab0b5f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eeee2c6e33af5732c9f392e3057dcebc",
".git/config": "2a88575a5cdf8138b8bece1b0ae37b28",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/59/607c9c58ea8d8971c6e0b1ff656d4a6dc9d866": "e9156bb84ca1f891d6186e21c1d828c3",
".git/objects/0c/5faa756b23c68514bd5d55ccf0e4650306a94b": "6621c18d3803c5af6250566ebb9fe9c2",
".git/objects/50/3cb701add804a40cf795f5647e4afd9f63e9d0": "2e6d0403f347c264e596c5990968c0a8",
".git/objects/03/d87592b671f6d1e87938f5f27f8413bc955b16": "e86c7fd59e4860e08fe507304baf3aea",
".git/objects/04/2b5c8e0854edad29bfb5990e9c1cae455ebf17": "4e3346da1e93fc70d9eaadb72cba34c3",
".git/objects/69/3c11adb7b51e90c52e7cfa0189ab1feac3fd6d": "b59b975b24045fbf64d4bcccfdf90906",
".git/objects/58/c0cbc25bd0f287c82761a3a8511c2215e34df7": "f41cea5817bc46a17aefcbb21dd0dffa",
".git/objects/67/75239e549ae69c3db49e030a0cc8acd3080c97": "f3452fd2ba8ec141ddbd8e9538f03dc5",
".git/objects/a3/fcaaa7f1374a9da1a0f3cfcea9103c57f1728b": "4a89330f775f316e494fac967f39c488",
".git/objects/d0/a2ae31c682744ca09afecb7dc47e3aa2e96ec8": "99ad253543e193d801d8e95be457cdb7",
".git/objects/da/d0eb59f6d08472d07d0b50484f76363f994012": "49f63c2964219188d32db814673e1b01",
".git/objects/a2/78b1d9b7c0347aeeca90544011eb38df40a094": "e1a726c98129a79658ad97cedb941691",
".git/objects/f4/5227d3b8d6430773ba620bb38655de1a0b60b2": "5658aa1f0eca51c420098db530c7ccc6",
".git/objects/fc/7d5fa7765813de96ecf3a42dc6d6b2ebbc1702": "607b0983bfb01be4bc5475540bc4eb9d",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f5/f07fe27208b2405eec6ae2964cedb8a09fd60d": "8a61c9fbe3ac3cb433b2e3766846dbcc",
".git/objects/cf/7ee7a4185078f72dee9168a46ad16adc2e8bcb": "ba3d61d8a9c93c8c38148f7ca9afd902",
".git/objects/ca/cdae2b1a2f4fad9aeb84fbffd45392eecc8276": "1540481ce0f0f68b9f543021980732c4",
".git/objects/c8/ee6798aaada4e096e268a916bb8e7508353e9c": "54bb3ecbe7f2393f63943c5d6c240fc1",
".git/objects/20/de8e634f161241e6e4d0f6dba76dee4225b010": "b28c88ae21dfef5cb9f8cef716cbd34a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/cb724d01406389ccdbbdffa1be757a5ca7d32d": "2005f0571f6da431d8c0353d50a54d86",
".git/objects/7d/f78b3da78fdcc24746369d9cb9a90bdc438582": "2cc959068c4cf50e41e4654ff47cad33",
".git/objects/7c/e437c0ad0748c8c9b7cf21cf19ca356e3d44c4": "2946665792e17cd82f27b280f1c04727",
".git/objects/73/298fa83b6bda8445c34489030116690d6fcc35": "97f21dd7241bdc0ac00a34034c7309fa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/11f7575b89ca9db1570e90dca5a606db609150": "1753a2b64008288a2d59f5bdc4e6d36f",
".git/objects/4c/1294d028c9e44b96efbf1ff4e099680d8bb350": "af25008b21a1c02aba5428192f0ea4e0",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/a6de04edb18019d2d65f685f31d8ab9c7fd03e": "d1dbf2fd48bf497c6840fa232857988d",
".git/objects/88/c5625bd1d4ebccd567828eb4949db1f96c25fb": "729090626ec39c2f0a3ead4c90651195",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/69235f86290f4d213dfca7e3c543100bf33b67": "cd8c3c9792c8c5cbead44c738bbab530",
".git/objects/5d/7daadaa0bb53c01eeae17345db9e305622fdf3": "ed7fcf65900fe9c5c3b1a5564d411318",
".git/objects/06/2d6c5fbc46ce803593c901c70a93286593a199": "df0236efa5e42d42cfb1312d6118bdbf",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/a9/50fac2cd2c36c762f0080513656840490c8214": "1543655b892e8d29d628426b92bb5f06",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cd/d7e22f069c0e825cca9490d5cc62b2438de8ff": "e5abe285d9924f2d4662baabc30703ec",
".git/objects/e6/7d8015f4b525c39db7c428432252d188cfa362": "9ac5b5a27c602aa03c5219ff2bb6ab5a",
".git/objects/f9/83d224f3d119dff4ccd2cccacf4a1381cdb3e0": "9760a440af8dd5a53ba900f4abb26c7a",
".git/objects/f1/2a8287b3c9b1435ec17af35282e20039ed8fb8": "38455448c60773425f4d637aa6560515",
".git/objects/79/05445fa59b1695714c426012f9617c04eabbd9": "f94f6bc31b0af12ca4169f48c27bc39c",
".git/objects/70/24d4e84fcd61dd6d82998fd5b67239de491475": "669c38a958a152ae7ae92d42f27a68db",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/71/54588218a4c4b11eb94e0ee42587243f664078": "e203a36d5be6c99598734b5a18e8b998",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/25/7e37b66aa433d419d00447b41d108d694ec4a3": "d4745b2cd4f56c5a50536bde003a4a9f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3385b08ec82b11192e5275a08878ccc9",
".git/logs/refs/heads/master": "3385b08ec82b11192e5275a08878ccc9",
".git/logs/refs/remotes/origin/master": "8b1c360f32f330c2080166d4e0b1bfbb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "ec1ee82e7809fa1e290132f657f9caf1",
".git/refs/remotes/origin/master": "ec1ee82e7809fa1e290132f657f9caf1",
".git/index": "3ca75441eaf57bc2b5bdea80f5921b39",
".git/COMMIT_EDITMSG": "737cf21a6c1f09dcb47e998fd28d4f13",
".git/FETCH_HEAD": "a1dd7ac99ff66c063527d07f491e6b29",
"assets/AssetManifest.json": "e20e8961170a5f2335ddc0bf6970938e",
"assets/NOTICES": "214dbb20b54643b75dd7132b3c668c4f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/settings.json": "cb03587be7bd65c61a4c289ed6be7c2f",
"assets/assets/loading.flr": "4eee882ff842f573f918911c7dc20244",
"assets/assets/resources.json": "51fca4637a61b773225df1d49c3a38b2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
