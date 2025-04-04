document.write(`
<style>.d,.a{width:200px;}.r{display:flex;justify-content:space-around}.c{font-size:80%;max-width:800px;margin:auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.1)}.s span{font-size:30px;color:lightgray}.s .gold{color:gold}.d .bar{gap:12px;display:flex;margin:5px 0}.d .bar .bl{flex:1;margin:auto;height:10px;background:#ddd;border-radius:5px}.d .bar .bl.gold{background:gold}.d .bar .C{font-weight:bold}.reviews .v{padding:10px;border-top:1px solid #ddd}.reviews .v:last-child{border-bottom:none}.reviews .s .gold{color:gold}.s,.reviews p{margin:0 auto!important}

.stareviews{font-size:39px;color:lightgray;cureviewsor:pointer}.stareviews.selected{color:gold}.stareviews:hover{color:gold}.star-rating{display:inline-block;direction:rtl}</style>

<div class="c">
  <h3>Ulasan</h3>
  <div class="r">
    <div class="a">
      <div class="s" id="A"></div>
      <p><b>Rata-rata:</b> <span id="aR">0</span> / 5</p>
    </div>
    <div class="d">
      <div class="bar" ds="5">
        <span>5</span>
        <div class="bl" id="C5"></div>
        <span class="C" id="C5to">0</span>
      </div>
      <div class="bar" ds="4">
        <span>4</span>
        <div class="bl" id="C4"></div>
        <span class="C" id="C4to">0</span>
      </div>
      <div class="bar" ds="3">
        <span>3</span>
        <div class="bl" id="C3"></div>
        <span class="C" id="C3to">0</span>
      </div>
      <div class="bar" ds="2">
        <span>2</span>
        <div class="bl" id="C2"></div>
        <span class="C" id="C2to">0</span>
      </div>
      <div class="bar" ds="1">
        <span>1</span>
        <div class="bl" id="C1"></div>
        <span class="C" id="C1to">0</span>
      </div>
    </div>
  </div>
  <div class="reviews" id="rC"></div>
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
`);
