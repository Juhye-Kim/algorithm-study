// 프로그래머스 캐시

// ver1
function solution(cacheSize, cities) {
  let cache = [];
  let totalTime = 0;

  if (cacheSize === 0) return 5 * cities.length;
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();
    let [hitIdx, time] = addTime(cache, city);
    totalTime += time;
    if (hitIdx >= 0) {
      cache = [
        ...cache.slice(0, hitIdx),
        ...cache.slice(hitIdx + 1),
        cache[hitIdx],
      ];
    } else {
      if (cache.length >= cacheSize) cache.shift();
      if (cache.length < cacheSize) cache.push(city);
    }
  }
  return totalTime;
}

function addTime(cache, city) {
  for (let i = 0; i < cache.length; i++) {
    if (cache[i] === city) return [i, 1];
  }
  return [-1, 5];
}

// ver2
function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length;

  let totalTime = 0;
  let cache = [];

  cities.forEach((city) => {
    city = city.toLowerCase();

    const { hit, idx } = isHit(city, cache);

    totalTime += hit ? 1 : 5;

    if (cache.length < cacheSize) cache.push(city);
    else {
      if (hit) {
        cache = [...cache.slice(0, idx), ...cache.slice(idx + 1), city];
      } else {
        cache.shift();
        cache.push(city);
      }
    }
  });

  return totalTime;
}

function isHit(city, cache) {
  const idx = cache.findIndex((el) => el === city);
  return { hit: idx !== -1, idx };
}
