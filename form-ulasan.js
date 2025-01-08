document.write(`
<hr />
<div style="margin: auto; max-width: 440px;">
<h2>Form Ulasan</h2>
<form id="reviewForm" onsubmit="return sendReview();">
<label>Tanggal:</label>
<input id="rD" name="rD" style="background-color: transparent; border-width: 0px;" type="text" value="" /><br />
<label>Nama:</label>
<input id="name" name="name" required="" style="color: #003079; font-size: 100%; max-width: 90%; padding: 12px; width: 380px;" type="text" /><br /><br />

<label>Pilih Bintang:</label>
<div class="star-rating">
<span class="stareviews" data-value="5">★</span>
<span class="stareviews" data-value="4">★</span>
<span class="stareviews" data-value="3">★</span>
<span class="stareviews" data-value="2">★</span>
<span class="stareviews" data-value="1">★</span>
</div>
<br />
<label>Teks Ulasan:</label><br />
<textarea id="reviewText" name="reviewText" required="" rows="4" style="color: #003079; font-size: 100%; max-width: 90%; padding: 12px; width: 464px;"></textarea><br />

<button style="font-size: 100%; max-width: 90%; padding: 12px; width: 464px;" type="submit">Kirim Ulasan</button>
</form>
</div>
</div>

<script>document.getElementById("rD").value=new Date().toLocaleDateString();let ratingValue=0;const stareviews=document.querySelectorAll(".stareviews");stareviews.forEach(star=>{star.addEventListener("click",function(){ratingValue=this.getAttribute("data-value");updateStareviews(ratingValue)}),star.addEventListener("mouseover",function(){const value=this.getAttribute("data-value");updateStareviews(value)}),star.addEventListener("mouseout",function(){updateStareviews(ratingValue)})});function updateStareviews(value){stareviews.forEach(star=>{star.getAttribute("data-value")<=value?star.classList.add("selected"):star.classList.remove("selected")})}function sendReview(){const name=document.getElementById("name").value,rD=document.getElementById("rD").value,reviewText=document.getElementById("reviewText").value,currentUrl=window.location.href;if(0===ratingValue)return alert("Silakan pilih rating bintang!"),!1;const message=`Ulasan Baru:\n\nNama: ${name}\nTanggal: ${rD}\nRating: ${ratingValue} Bintang\nUlasan: ${reviewText}\nURL Halaman: ${currentUrl}`,phone="6281327707780",whatsappUrl=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;return window.open(whatsappUrl,"_blank"),!1}</script>
`);
