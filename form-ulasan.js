document.write(`
<style>.s6{font-size:39px;color:lightgray;cureviewsor:pointer}.s6.s7{color:gold}.s6:hover{color:gold}.s8{display:inline-block;direction:rtl}</style>
<div id="formU">
<hr />
<div style="margin: auto; max-width: 440px;">
<h2>Form Ulasan</h2>
<form id="rF6" onsubmit="return sR6();">
<label>Tanggal:</label>
<input id="rD" name="rD" style="background-color: transparent; border-width: 0px;" type="text" value="" /><br />
<label>Nama:</label>
<input id="name" name="name" required="" style="color: #003079; font-size: 100%; max-width: 90%; padding: 12px; width: 380px;" type="text" /><br /><br />

<label>Pilih Bintang:</label>
<div class="s8">
<span class="s6" d6="5">★</span>
<span class="s6" d6="4">★</span>
<span class="s6" d6="3">★</span>
<span class="s6" d6="2">★</span>
<span class="s6" d6="1">★</span>
</div>
<br />
<label>Teks Ulasan:</label><br />
<textarea id="rT8" name="rT8" required="" rows="4" style="color: #003079; font-size: 100%; max-width: 90%; padding: 12px; width: 464px;"></textarea><br />

<button style="font-size: 100%; max-width: 90%; padding: 12px; width: 464px;" type="submit">Kirim Ulasan</button>
</form>
</div></div>
`);
document.getElementById("rD").value=new Date().toLocaleDateString();let ratingValue=0;const s6=document.querySelectorAll(".s6");s6.forEach(star=>{star.addEventListener("click",function(){ratingValue=this.getAttribute("d6");updates6(ratingValue)}),star.addEventListener("mouseover",function(){const value=this.getAttribute("d6");updates6(value)}),star.addEventListener("mouseout",function(){updates6(ratingValue)})});function updates6(value){s6.forEach(star=>{star.getAttribute("d6")<=value?star.classList.add("s7"):star.classList.remove("s7")})}function sR6(){const name=document.getElementById("name").value,rD=document.getElementById("rD").value,rT8=document.getElementById("rT8").value,currentUrl=window.location.href;if(0===ratingValue)return alert("Silakan pilih rating bintang!"),!1;const message=`Ulasan Baru:\n\nNama: ${name}\nTanggal: ${rD}\nRating: ${ratingValue} Bintang\nUlasan: ${rT8}\nURL Halaman: ${currentUrl}`,phone="6281327707780",whatsappUrl=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;return window.open(whatsappUrl,"_blank"),!1}
