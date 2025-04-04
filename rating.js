document.head.insertAdjacentHTML('beforeend', `
<style>.d,.a{width:200px}.r{display:flex;justify-content:space-around}.c{font-size:80%;max-width:800px;margin:auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.1)}.s{margin-bottom:0!important}.s span{font-size:24px;color:lightgray}.d .bar{gap:12px;display:flex;margin:5px 0}.d .bar .bl{flex:1;margin:auto;height:10px;background:#ddd;border-radius:5px}.d .bar .bl.gold{background:gold}.d .bar .C{font-weight:bold}.reviews .v{padding:10px;border-top:1px solid #ddd}.reviews .v:last-child{border-bottom:none}.reviews .s .gold{color:gold}.reviews p{margin:0 auto!important}.r1{position:relative;display:inline-block;font-size:30px}.g2{color:lightgray}.g1{color:gold}.h1{position:absolute;left:0}.s1:hover,.s1:focus{cursor:pointer}@media (max-width:768px){.c{margin:0 -8px;padding:8px}.r1,.s span,.s6{font-size:22px!important}.d .bar{gap:7px}}#rC{max-height:400px;overflow:auto}
#formU{height:0;overflow:hidden;background-color:#f3f3f3;transition:height 0.5s ease;border-radius:10px;padding:0 20px;border:1px solid #ddd;}.s6{font-size:39px;color:lightgray;cursor:pointer}.s6.s7{color:gold}.s6:hover{cursor:pointer;color:gold}.s8{display:inline-block;direction:rtl}#ContactForm2{height:0;overflow:hidden}#ContactForm2_contact-form-submit{cursor:pointer;height:auto;font-size:120%;max-width:90%;padding:12px;width:464px}
.toggle-button{padding:10px 20px;background-color:#4CAF50;color:white;border:none;border-radius:5px;font-size:16px;cursor:pointer;transition:height .5s ease,opacity .5s ease}.toggle-button:hover{background-color:#45a049}</style>
`);
document.getElementById("ula").innerHTML = `
<div class="c"><h3 id="Uu" style="text-align:center">Ulasan : </h3><div class="r"><div class="a"><div style="text-align:center;margin-bottom:0"><div style="margin-bottom:0" class="r1"><span class="g1">&#9733;</span><span class="g1">&#9733;</span><span class="g1">&#9733;</span><span class="g1">&#9733;</span></div><div style="margin-bottom:0" class="r1"><span class="g2">&#9733;</span><span class="g1 h1">&#9733;</span></div></div><p style="text-align:center"><b>Rating:</b> <span id="aR">0</span> / 5</p></div><div class="d"><div class="bar" ds="5"><span>5</span><div class="bl" id="C5"></div><span class="C" id="C5to">0</span></div><div class="bar" ds="4"><span>4</span><div class="bl" id="C4"></div><span class="C" id="C4to">0</span></div><div class="bar" ds="3"><span>3</span><div class="bl" id="C3"></div><span class="C" id="C3to">0</span></div><div class="bar" ds="2"><span>2</span><div class="bl" id="C2"></div><span class="C" id="C2to">0</span></div><div class="bar" ds="1"><span>1</span><div class="bl" id="C1"></div><span class="C" id="C1to">0</span></div></div></div><div class="reviews" id="rC"></div></div>
<div class="show-contact-form"></div>
<div id="formU"><div style="margin:30px auto;max-width:440px;"><h2 id="U9">Form Ulasan </h2><form id="rF6" onsubmit="return sR6();"><label>Tanggal:</label><input id="rD" name="rD" style="background-color:transparent;border-width:0px;" type="text" value="" /><br /><label>Nama:</label><input id="name" name="name" required="" style="color:#003079;font-size:100%;max-width:90%;padding:12px;width:380px;" type="text" /><br /><br /><label>Pilih Bintang:</label><div class="s8"><span class="s6" d6="5">★</span><span class="s6" d6="4">★</span><span class="s6" d6="3">★</span><span class="s6" d6="2">★</span><span class="s6" d6="1">★</span></div><br /><label>Teks Ulasan:</label><br /><textarea id="rT8" name="rT8" required="" rows="4" style="color:#003079;font-size:100%;max-width:90%;padding:12px;width:464px;"></textarea><br /></form><br /><div id="kirim2"></div><div id="kirim3"></div></div></div>
<button class="toggle-button" onclick="toggleForm(this)">Tambahkan Rating / Kirim Ulasan</button> 
`;
var pT=document.querySelector('.post-title'),hargA=pT&&pT.textContent.includes("Wiremesh")?hwmes:hbesi;const T=reviews.length,D=[0,0,0,0,0,0],R=reviews.reduce((s,v)=>(D[v.bintang]++,s+v.bintang),0),aR=(R/T).toFixed(1);document.head.insertAdjacentHTML('beforeend', `<style>.h1{clip-path:inset(0 ${(5-aR)*100}% 0 0)}</style>`);document.getElementById("Uu").innerHTML+=produk;const post=document.querySelector('.post'),image=post?.querySelector('img')?.src||"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyCMQbkfiJ3LGCblA2lPHZhtepjJ4Xtmk769HDQDmP-My7aVFQq-pcqFKGj1aWf256yNFTllK55rJdML_bM8NucqWzVHZ56RzMBAjb5dDmxjFVmoJ47JSK98TC0LKa2B0QaQZFjw0_h56raCwn5TB-BQK9ADQGZCAXX93Ka_PsX8fqhOja0qUMTP70/s456/logo%20jaya%20steel%20group%20jayasteel.com%20b%20.png",description=post?.querySelector('[itemprop="description"]')?.textContent||"Inilah produk dari Jayasteel untuk Anda dan pelanggan Anda. Proyek lancar dan aman dengan material yang terpercaya.",
schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": produk,
  "image": image,
  "description": description,
  "brand": {
    "@type": "Brand",
    "name": "Jayasteel"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": aR,
    "reviewCount": T
  },
  "review": reviews.map(v => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": v.nama
    },
    "datePublished": v.tanggal,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": v.bintang
    },
    "reviewBody": v.ulasan
  })),
  "offers": {
    "@type": "Offer",
    "priceCurrency": "IDR",
    "price": hargA,
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "url": window.location.href,
    "priceValidUntil": new Date(Date.now() + 6912e5).toISOString().split('T')[0]
  }
};
const script=document.createElement("script");script.type="application/ld+json",script.textContent=JSON.stringify(schema),document.head.appendChild(script),document.getElementById("aR").textContent=aR;
for(let i=1;i<=5;i++){const b=document.getElementById(`C${i}`);b.style.width=`${(D[i]/T)*100}%`,D[i]>0&&b.classList.add("gold"),document.getElementById(`C${i}to`).textContent=D[i]}const rC=document.getElementById("rC");reviews.forEach(v=>{const rD=document.createElement("div");rD.classList.add("v");const sHtml=Array.from({length:5},(_,i)=>`<span class="${i<v.bintang?"gold":""}">&#9733;</span>`).join("");rD.innerHTML=`<div class="s">${sHtml}</div><p><strong>${v.nama}</strong> - ${v.tanggal}</p><p>${v.ulasan}</p>`,rC.appendChild(rD)}); 
document.getElementById("U9").innerHTML+=produk;document.getElementById("rD").value=new Date().toLocaleDateString();let RValue=0;document.querySelectorAll('.s6').forEach(star=>{star.addEventListener('click',()=>{RValue=star.getAttribute('d6');updateStars(RValue)});star.addEventListener('mouseenter',()=>updateStars(star.getAttribute('d6')));star.addEventListener('mouseleave',()=>updateStars(RValue))});function updateStars(value){document.querySelectorAll('.s6').forEach(star=>{star.classList.toggle('s7',parseInt(star.getAttribute('d6'))<=value)})}document.getElementById('ContactForm2_contact-form-submit').addEventListener('mouseover',function(){document.getElementById('ContactForm2_contact-form-name').value='Ulasan dan Rating';document.getElementById('ContactForm2_contact-form-email').value='jayasteel.com@gmail.com';document.getElementById('ContactForm2_contact-form-email-message').value=`Nama: ${document.getElementById('name').value}\nUlasan: ${document.getElementById('rT8')?.value||''}\nBintang: ${RValue}\nTanggal: ${new Date().toISOString().split('T')[0]}\nUrl: ${window.location.href}`});if(document.getElementById('ContactForm2_contact-form-submit')&&document.getElementById('kirim2')){document.getElementById('kirim2').appendChild(document.getElementById('ContactForm2_contact-form-submit'))}
var sM=document.getElementById('mess2'),target=document.getElementById('kirim3');sM&&target&&target.appendChild(sM);
function toggleForm(button){const formU=document.getElementById('formU');formU.scrollIntoView({behavior:'smooth'});setTimeout(()=>{formU.style.height=formU.scrollHeight+'px';setTimeout(()=>formU.style.height='auto',500)},500);button.style.height='0';button.style.opacity='0';button.style.pointerEvents='none'}
