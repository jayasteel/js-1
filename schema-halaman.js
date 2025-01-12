var post = document.querySelector('.post'),
    publikasi=document.querySelector('#publikasi')?.textContent.trim() || document.lastModified,
    penulis=document.querySelector('#penulis')?.textContent.trim() || "Jayasteel",
    tentang=document.querySelector('#tentang')?.textContent.trim() || "Jayasteel",
    judul = document.querySelector('.post-title')?.textContent.trim() || "Info Wiremesh, Besi Beton Terpercaya serta Bahan Konstruksi",
    deskripsi = document.querySelector('#deskripsi')?.textContent.trim() || "Info update besi beton dan wiremesh standar. produksi dan distribusi. konstruksi cerdas",
    paragraf = document.querySelector('#paragraf')?.textContent.trim() || "Dapatkan info update harga terbaru besi beton polos dan besi beton ulir standar SNI untuk keperluan anda. Inilah info produk wiremesh pabrik mutu SNI juga untuk desain dan konstruksi.",
    wordCount = post ? post.textContent.trim().split(/\s+/).length : 0,
      firstImage = post?.querySelector('img')?.src || "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyCMQbkfiJ3LGCblA2lPHZhtepjJ4Xtmk769HDQDmP-My7aVFQq-pcqFKGj1aWf256yNFTllK55rJdML_bM8NucqWzVHZ56RzMBAjb5dDmxjFVmoJ47JSK98TC0LKa2B0QaQZFjw0_h56raCwn5TB-BQK9ADQGZCAXX93Ka_PsX8fqhOja0qUMTP70/s456/logo%20jaya%20steel%20group%20jayasteel.com%20b%20.png",
    keywords = [...new Set((judul + " " + deskripsi).toLowerCase().split(/\s+/))].join(", ");

var schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "name": tentang,
    "@id": window.location.href
  },
  "headline": judul,
  "description": deskripsi,
  "image": {
    "@type": "ImageObject",
    "url": firstImage
  },
  "author": {
    "@type": "Person",
    "name": penulis,
    "url": "https://www.jayasteel.com/p/mengganti-judul-dan-moto-web-jayasteel.html"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Jayasteel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyCMQbkfiJ3LGCblA2lPHZhtepjJ4Xtmk769HDQDmP-My7aVFQq-pcqFKGj1aWf256yNFTllK55rJdML_bM8NucqWzVHZ56RzMBAjb5dDmxjFVmoJ47JSK98TC0LKa2B0QaQZFjw0_h56raCwn5TB-BQK9ADQGZCAXX93Ka_PsX8fqhOja0qUMTP70/s220/logo%20jaya%20steel%20group%20jayasteel.com%20b%20.png"
    }
  },
  "datePublished": publikasi,
  "dateModified": document.lastModified,
  "keywords": keywords,
  "wordCount": wordCount,
  "articleBody": paragraf
};

// Sisipkan JSON-LD ke dalam <head>
var script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(schemaData);
document.head.appendChild(script);
