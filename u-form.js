document.write(`
<div class="show-contact-form"></div>
<style>#formU{height:0;overflow:hidden;background-color:#f3f3f3;transition:height 0.5s ease;border-radius:10px;padding:0 20px;border:1px solid #ddd;}
.s6{font-size:39px;color:lightgray;cureviewsor:pointer}.s6.s7{color:gold}.s6:hover{cursor:pointer;color:gold}.s8{display:inline-block;direction:rtl}
#ContactForm2{height:0;overflow:hidden}#ContactForm2_contact-form-submit{cursor:pointer;height:auto;font-size:120%;max-width:90%;padding:12px;width:464px}
</style>
<div id="formU">
<hr />
<div style="margin: 30px auto; max-width: 440px;">
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
</form><br />
<div id="kirim2"></div>
</div></div>
`);
let RValue=0;document.querySelectorAll('.s6').forEach(star=>{star.addEventListener('click',()=>{RValue=star.getAttribute('d6');updateStars(RValue)});star.addEventListener('mouseenter',()=>updateStars(star.getAttribute('d6')));star.addEventListener('mouseleave',()=>updateStars(RValue))});function updateStars(value){document.querySelectorAll('.s6').forEach(star=>{star.classList.toggle('s7',parseInt(star.getAttribute('d6'))<=value)})}document.getElementById('ContactForm2_contact-form-submit').addEventListener('mouseover',function(){const nameValue=document.getElementById('name').value,rT8Value=document.getElementById('rT8')?document.getElementById('rT8').value:'',currentDate=new Date().toISOString().split('T')[0];document.getElementById('ContactForm2_contact-form-name').value='Ulasan dan Rating';document.getElementById('ContactForm2_contact-form-email').value='jayasteel.com@gmail.com';const newText=`Nama: ${nameValue}\nUlasan: ${rT8Value}\nBintang: ${RValue}\nTanggal: ${currentDate}`;document.getElementById('ContactForm2_contact-form-email-message').value=newText});const button=document.getElementById('ContactForm2_contact-form-submit'),target=document.getElementById('kirim2');if(button&&target){target.appendChild(button)} 
