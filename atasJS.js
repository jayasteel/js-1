function pf(j){j.feed.entry.slice(0,2).forEach(({title,link,media$thumbnail})=>{document.getElementById("n6").innerHTML+=`<li><a href="${link.find(l=>l.rel==="alternate").href}" target="_blank" title="${title.$t}">${media$thumbnail?`<img src="${media$thumbnail.url.replace(/s\d{2,4}-/,"s200-")}" alt="Thumbnail">`:""}<strong>${title.$t}</strong></a></li>`})}
document.getElementById('u5').innerHTML = `
<style>
#n6 { padding-left: 0; float: left; list-style: none; width: 100%; }
#n6 li { transition: font-size .5s ease; position: relative; padding: 10px; width: 200px; float: left; }
#n6 li:hover { font-size: 0; }
#n6 img { margin-right: 10px; border-radius: 7px; transition: transform .2s; }
#n6 img:hover { transform: scale(1.05); }
#n6 strong { position: absolute; font-weight: bold; color: #fff; text-shadow: 2px 2px 4px #000; padding: 22px; top: 0; left: 0; }
@media (min-width:1280px) {#n6 { width: 250px; float: none; } }
</style>
<ul id="n6"></ul>
`;
const s = document.createElement('script');
s.src = "https://www.jayasteel.com/feeds/posts/summary?max-results=2&alt=json&callback=pf";
document.body.appendChild(s);
