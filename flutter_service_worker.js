'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d680b58e2db729043bf3251fbd9b3b5a",
".git/config": "e5f87acb71ec8cdc434359c023a144bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7bc773b642edfc57019a5b42be877b0c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8cc7c5a847be286c4f634c1c9e011866",
".git/logs/refs/heads/main": "de66793762dcbdf200b05055a26808d5",
".git/logs/refs/remotes/origin/main": "db7b6819cfa6435246bd3a7d6b763b7f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/43d038dbe926bea9794b3276000abf0ab8d80d": "60666cd639a0622c6c55d51ed740405f",
".git/objects/0b/448a30f56166b93a52cda3dcf0d8f433fa16c2": "b6bebee0f399e073764de20894f1c133",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/bd68f0ee7cbfea7c1a941597132aa9160cb83c": "134118b37ddc439a09f3b81d3ba9566a",
".git/objects/10/86cc9aed5d14ff822c80b0c86373a5d00c0d9d": "ddfb8b41905baa6874ffb28c25337fb7",
".git/objects/14/06a0c041e0585d9ebfce4bf897e79e7f11d51e": "b341471ff5203f254cc786e41fe28044",
".git/objects/15/ddfb29cf773210fd91b7df196c67018045a635": "072b8023ee29a9250a40ef857eb9c9fc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/9e5204f2eda6ecab0fbb0578cd6ba0442c9bdd": "42ac3669c75e2210d14bff517aadd819",
".git/objects/28/f547bbf7be4d3848e597a03c25ca9d1b3a5da7": "c81cac9d8c93b92f02615f233e95bb08",
".git/objects/2a/87361192974bdff532f98b360a88c61f011b7a": "09db55c06b977dea4c15564adb8ff0ce",
".git/objects/2b/c2564e823aba70ab09191a1c7527785a0839db": "5c2f261ee399b32de1c4fae5cb741c8d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/bdba19e6596fe49067075e2658eb14621d3ef9": "a6efec8d77d2ca953f9eac090e561196",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3f/e4a6f7c45dd53e790739d7f216cbb41da1eb4c": "1d88adab76a61750add8546719059dc0",
".git/objects/42/a4a6d6787d72e87a6a2d612937b552a23359d2": "5b6a64d28dd1707833ad7c322e9fae45",
".git/objects/43/d820ea4188f62e7e480902cc819831cf074638": "e2b211253da0a924a135522ff94b2112",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/6944502c5d3d518a1df277253dae0eacaceb88": "58266960e8f15ed0333a59c503b21a0f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/58b3bdf88afd6522842a3eecd3022786a9eb18": "3ddb4fa19ed081f463350a4860a0d824",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/91a3a745ae9186bf9025d8f2d2ec7d3fb97685": "d86e65e9ad270b2809c8e666dc821942",
".git/objects/5c/83e9034c1253448bd8bf9d4843b30dadb73ad4": "58e131916f89d0271bcbd7615bf92da3",
".git/objects/5e/2cc44a9baeeb2e2d5fc7ca2c5221c11080cc4f": "9c81073480c57e1bb0cb53033504691c",
".git/objects/62/9fcfa02c8066b22478847204cb94f961fea86a": "3a287e15292d7dd5eb00b08bd79d6f60",
".git/objects/68/c52371fba6d5233e8ac8f521c63e83aa437c43": "4c050ab67dbb47e6d6449769cae15b9e",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/71/0888ab5e6b5609239c6486cf2d569d5a3f0c32": "5d8f4af1903f86997cf5f51fedecac9b",
".git/objects/72/c8a5186d007ea2af6b00869d6d18f1e6e9f0e6": "9b321bbcf560c2edb202866c7a2bdbbd",
".git/objects/73/96ec8c4b473afbcfc5244e1eca86eb37097bdd": "f6cdf222d1778b7ef2d657a1f440bd44",
".git/objects/73/a67bdea2cdbb200f686b763fb6166cacba2f12": "7277d68280c1a585dac4df137374852c",
".git/objects/7c/a6b4e39f64311a60e48426ae80a267943e9db6": "69d1b7fe3bb5ab637210021ddbaa2bbf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e377aed1ac66f69f17e78d630d21858a9e2732": "760889d8746bed8c725d2c51f161b9e8",
".git/objects/8f/50eef554431239a6fcf3186ff15251ace3d92d": "7b0b8a0f5e64c6a1bfe555fdaa4b76fa",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/3d6bfd083a67d30e31625452c8cf99aad7e521": "b1432197e6bfc6c0f0fbba83531f7036",
".git/objects/93/94a58e13b09a5177df357dadf4d462690c8f9c": "97580fd5b30a98bfe12f03d742b0c240",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9c/e4243c4d32ce02abdf188c9be497c1bfe309cf": "e07a5e8f1f48942663501b70fe4ee2f4",
".git/objects/a9/78ac82795eafaaf6e43bac95b04a74f32371c2": "91fadb916ad6edb40cae24860005a91e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c4/ce6935832ded4eb52dd3268fef9f43f07916a1": "7421f5d3c80c2288c9781d359a100fae",
".git/objects/c5/55759e6e475a550838522fcad35b629932b6dc": "1becddb68535579eb4b7f00f05b88707",
".git/objects/c6/bf99f5cdcac301920bf4ab85390ec5905eca83": "a10d129e581e0b60248a05ffea28ef4c",
".git/objects/ca/258ceca5b0944ab2f4e7d935d74cb816c687be": "766ed89a216bab9784519bcf85909ac1",
".git/objects/d0/da992a1b2ba041b5b44d3b17dfd8971dc77cb1": "51c659ce35da469fa294c2d81a9ce878",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/23d2e5e668ecfe24dbd77d1977abb143d36007": "fc2a6c31e45de6c4ea9c0815aee82540",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/3b3131e02c5eef1c3d9123fc92e9c7e114b88a": "c46c6abeb13f21eabc19be4a4a5c87c8",
".git/objects/e4/776625070f950ae50c39cfe9e58fc8b9e58af3": "a3f1abd1df236c99c1b604de02765cb5",
".git/objects/e5/403f24cded034142564ad77ba04c7eb539e956": "689118b3957018ed1d52def6f05a6500",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5a6fbe3c00871aa45f3c1169521af23047a16a": "230f141a1170136d42f96b0cef287e3e",
".git/objects/f0/d2bd7f7adb417b1ebd7f9948a39f068601a013": "1f2b64d09a0e9d4970a0fd736c564e73",
".git/objects/f3/3d9ea9299033711b98b4d9e330673bb94c39b5": "d488ab8b14d4a10bd1f9f2a32f099bd0",
".git/objects/f4/a56d5a53fbdb696a761f68a1b3dd0373b9f8a4": "438ba7aa7ba7b1fbb50a1c47ec68a15d",
".git/objects/f6/5775c5e93cdc9cdbcf1a5381e0dcc1f6263dad": "52ba8b87f6ea0d09fa614a490df2387e",
".git/objects/f8/7bd1a023a7c353c6385d17e117f676867339e3": "7ce99c991a442d3e111b90951460a1b5",
".git/objects/f9/c228c8105e867ccc56140a6d719a7d30c657af": "9a69bbe1fd11b31984b06888fe034a4f",
".git/objects/fa/c8b33ba7a431066fcc8ba9f841adecf9952138": "867a297853c68351a7a67e3b5a474f27",
".git/objects/fc/70b3c147501ac2deea89b482d0e3f08b755d67": "ba6a809011611614049255b1f84d98e9",
".git/refs/heads/main": "ff1d0d77b42bac7022c2d2077830060b",
".git/refs/remotes/origin/main": "ff1d0d77b42bac7022c2d2077830060b",
".idea/codeStyles": "ec5a0401de2a9dd7b0589f5f42be2fcc",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "1a16809a3a296b65911ab7b1b4ce2459",
".idea/web.iml": "002a4bd99b8722cfd94059ee6b5a364b",
".idea/workspace.xml": "1dca4d3ee4a696d9d98a839d6732b3a0",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9169948c3cb73616cb04e1a2cbeeba10",
"assets/NOTICES": "9ba9d34b0f419df853560043f3125ea9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1e1103363d26e78c8343ba48db47f64",
"/": "c1e1103363d26e78c8343ba48db47f64",
"main.dart.js": "2cfe93f5c1f2978d3921a3767c6458a0",
"manifest.json": "4bcfb326384f3fb2a9f21cf3fce76b3b",
"version.json": "e606216be31db0800d038ee7f0f99840"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
