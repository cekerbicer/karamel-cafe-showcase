// Galeri Verileri
const galeriVerileri = [
    { imaj: "galeri1.jpg", baslik: "Butik Kavurma", aciklama: "En kaliteli çekirdekler atölyemizde özenle kavrulur." },
    { imaj: "galeri2.jpg", baslik: "Karamel Sanatı", aciklama: "Bakır kazanlarda ağır ağır hazırlanan imza sosumuz." },
    { imaj: "galeri3.jpg", baslik: "Huzurlu Köşe", aciklama: "Kitabınız ve kahveniz için tasarlanmış sakin alanlar." },
    { imaj: "galeri4.jpg", baslik: "Taze Sunumlar", aciklama: "Her sabah fırından çıkan günlük butik tatlılar." }
];

// Müşteri Yorumları Verileri
const yorumVerileri = [
    { isim: "Elif Yılmaz", yorum: "Karamel kokusu kapıdan girer girmez sizi büyülyor. Latte harikaydı!", puan: 5 },
    { isim: "Mert Demir", yorum: "Sakin çalışma ortamı arayanlar için şehirdeki en iyi durak.", puan: 5 },
    { isim: "Selin Aras", yorum: "Tuzlu karamel soslu cheesecake denemeden ölmeyin.", puan: 4 }
];

const urunlerKategorili = {
        "Kahve Çeşitlerimiz": [
        { 
            ad: "Salted Caramel Latte", 
            aciklama: "%100 Arabica çekirdeklerinden gelen yoğun espresso, taze süt ve imza tuzlu karamel şurubumuz.", 
            görsel: "latte.jpg" 
        },
        { 
            ad: "Karamel Frappé", 
            aciklama: "Buzla parçalanmış kahve, yoğun karamel ve üzerinde çırpılmış krema ile tam bir yaz klasiği.", 
            görsel: "frappe.jpg" 
        },
        { 
            ad: "Karamel Macchiato", 
            aciklama: "Katmanlı görünümüyle görsel bir şölen; en altta yoğun süt, ortada espresso ve en üstte bol karamel.", 
            görsel: "macchiato.jpg" 
        }
    ],
    "Atölye İmzalı Tatlılar": [
        { 
            ad: "Tuzlu Karamel Cheesecake", 
            aciklama: "Karamel Atölyesi'nin göz bebeği. Deniz tuzu ile dengelenmiş el yapımı karamel sosu ve kremsi doku.", 
            görsel: "cheesecake.jpg" 
        },
        { 
            ad: "Karamel Rüyası Pasta", 
            aciklama: "Altın sarısı karamel glazesinin altında fındıklı krokan parçaları ve kadifemsi pastacı kreması.", 
            görsel: "pasta.jpg" 
        },
        { 
            ad: "Lotus Biscoff Dream", 
            aciklama: "Belçika'nın meşhur karamelize bisküvisi ile hazırlanan, tabanı çıtır, üstü bulut gibi hafif bir lezzet.", 
            görsel: "lotus.jpg" 
        },
    ],

    "Tuzlu Atıştırmalıklar": [
        { 
            ad: "Karamelize Soğanlı Kiş", 
            aciklama: "Yavaşça karamelize edilmiş soğanlar ve özel peynir karışımıyla hazırlanan gurme bir tuzlu.", 
            görsel: "kis.jpg" 
        },
        { 
            ad: "Cevizli ve Ballı Kruvasan", 
            aciklama: "Fransız tereyağı ile hazırlanan, dışı çıtır içi yumuşak, hafif karamelize edilmiş cevizli dolgu.", 
            görsel: "kruvasan.jpg" 
        }
    ]
};
// Ürünleri Ekrana Basan Fonksiyon
function urunleriYukle() {
    const kategoriContainer = document.getElementById('kategoriler');
    kategoriContainer.innerHTML = ""; // Temizlik

    for (const kategoriAdi in urunlerKategorili) {
        // 1. Kategori Başlığını Oluştur
        const h2 = document.createElement('h2');
        h2.className = "kategori-baslik";
        h2.innerText = kategoriAdi;
        kategoriContainer.appendChild(h2);

        // 2. Ürün Gridi Oluştur
        const grid = document.createElement('div');
        grid.className = "product-grid-detail";

        // 3. Ürünleri Döngüyle Ekle
        urunlerKategorili[kategoriAdi].forEach(urun => {
            grid.innerHTML += `
                <a href="index.html#iletisim" class="product-card-link">
                    <div class="product-card">
                        <img src="../image/${urun.görsel}" alt="${urun.ad}">
                        <div class="product-overlay">
                            <h4>Detaylar & Sipariş İçin İletişim</h4>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <h3>${urun.ad}</h3>
                        <p>${urun.aciklama}</p>
                    </div>
                </a>
            `;
        });

        kategoriContainer.appendChild(grid);
    }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', urunleriYukle);const galeriGrid = document.querySelector('.galeri-grid-hakkimizda');
galeriVerileri.forEach(item => {
    galeriGrid.innerHTML += `
        <div class="galeri-item hidden-scroll">
            <img src="../image/${item.imaj}" alt="${item.baslik}">
            <div class="galeri-info">
                <h4>${item.baslik}</h4>
                <p>${item.aciklama}</p>
            </div>
        </div>
    `;
});

// Yorumları Doldur
const yorumKapsayici = document.querySelector('.yorum-kapsayici');
yorumVerileri.forEach(item => {
    yorumKapsayici.innerHTML += `
        <blockquote class="hidden-scroll">
            <p>"${item.yorum}"</p>
            <cite>— ${item.isim}</cite>
            <div class="yildizlar">${'★'.repeat(item.puan)}${'☆'.repeat(5-item.puan)}</div>
        </blockquote>
    `;
});