/* ==========================================
   LOAD VILLA DATA FROM JSON
   ========================================== */

// Function untuk generate deskripsi detail villa yang SEO-friendly
function generateVillaDescription(villa, location) {
    const hasPool = villa.facilities.some(f => f.toLowerCase().includes('kolam renang'));
    const hasKaraoke = villa.facilities.some(f => f.toLowerCase().includes('karaoke'));
    const hasWifi = villa.facilities.some(f => f.toLowerCase().includes('wifi'));
    const hasStrawberry = villa.facilities.some(f => f.toLowerCase().includes('strawberry')) || location.includes('Sekipan');
    const bedrooms = villa.facilities.find(f => f.includes('Kamar tidur') || f.includes('Kamar Tidur')) || '';
    
    let desc = `${villa.name} adalah pilihan sempurna untuk liburan kelompok besar Anda di ${location.split(',')[0]}. `;
    
    if (bedrooms) {
        desc += `Dilengkapi dengan ${bedrooms.toLowerCase()} yang nyaman dengan desain modern, `;
    }
    
    if (hasPool) {
        desc += `kolam renang yang luas cocok untuk bersantai dan bermain air, `;
    }
    
    if (hasKaraoke) {
        desc += `karaoke keluarga untuk hiburan, `;
    }
    
    if (hasWifi) {
        desc += `internet WiFi cepat, `;
    }
    
    if (hasStrawberry) {
        desc += `dan berlokasi dekat dengan kebun strawberry Tawangmangu yang indah serta berbagai wisata menarik. `;
    } else {
        desc += `dan berbagai fasilitas lengkap untuk kenyamanan Anda. `;
    }
    
    desc += `Villa ini mampu menampung ${villa.capacity} dengan suasana yang tenang dan sejuk di ketinggian Tawangmangu.`;
    
    return desc;
}

// Fetch dan load data villa dari data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const villasContainer = document.getElementById('villas-container');
        
        // Ambil 5 villa pertama yang kapasitasnya >= 20 orang
        const topVillas = data.villaData.filter(villa => {
            // Parse kapasitas untuk mendapatkan angka
            const capacity = parseInt(villa.capacity.match(/\d+/)[0]);
            return capacity >= 20;
        }).slice(0, 5);
        
        // Generate villa cards
        topVillas.forEach((villa, index) => {
            // Generate deskripsi detail
            const description = generateVillaDescription(villa, villa.location);
            
            // Generate harga lengkap dari semua rates
            const pricesHTML = villa.rates
                .map(rate => `<div class="price-item"><span class="price-label">${rate.label}:</span> <span class="price-value">Rp ${(rate.price / 1000000).toFixed(1)}jt</span></div>`)
                .join('');
            
            // Generate semua fasilitas
            const allFacilitiesHTML = villa.facilities
                .map(f => `<span class="amenity">✓ ${f}</span>`)
                .join('');
            
            // Generate notes/keterangan penting
            const notesHTML = villa.notes
                .filter(note => !note.toLowerCase().includes('harga') && !note.toLowerCase().includes('berubah'))
                .slice(0, 3)
                .map(note => `<span class="note-item">• ${note}</span>`)
                .join('');
            
            // Gunakan foto dari data.json jika tersedia
            const backgroundImage = villa.image ? `url('${villa.image}')` : 'linear-gradient(135deg, #2d5016 0%, #3d6b1f 100%)';
            const backgroundStyle = villa.image ? `background-image: ${backgroundImage}; background-size: contain; background-position: center; background-repeat: no-repeat;` : `background: ${backgroundImage};`;
            
            const villaCard = document.createElement('div');
            villaCard.className = 'villa-card';
            villaCard.innerHTML = `
                <div class="villa-image" style="${backgroundStyle}">
                    ${!villa.image ? `<span class="villa-number">${index + 1}</span>` : ''}
                </div>
                <div class="villa-content">
                    <h3>${villa.name}</h3>
                    <p class="villa-location">📍 ${villa.location}</p>
                    <p class="villa-description">
                        ${description}
                    </p>
                    <div class="villa-features">
                        <span class="feature">🛏️ ${villa.facilities.find(f => f.includes('Kamar tidur') || f.includes('Kamar Tidur')) || 'Kamar tersedia'}</span>
                        <span class="feature">👥 Kapasitas ${villa.capacity}</span>
                    </div>
                    <div class="villa-prices">
                        <div class="prices-label">💰 Harga Per Malam:</div>
                        ${pricesHTML}
                    </div>
                    <div class="villa-amenities">
                        ${allFacilitiesHTML}
                    </div>
                    ${notesHTML ? `<div class="villa-notes">${notesHTML}</div>` : ''}
                    <a href="https://www.bosvillatawangmangu.my.id" class="btn-pesan">Pesan Sekarang</a>
                </div>
            `;
            villasContainer.appendChild(villaCard);
        });
    })
    .catch(error => console.log('Error loading villa data:', error));

/* ==========================================
   SMOOTH SCROLL
   ========================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ==========================================
   TRACK LINK CLICKS
   ========================================== */
document.querySelectorAll('a[href*="bosvillatawangmangu.my.id"]').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Navigasi ke website utama:', this.href);
        if (e.ctrlKey || e.metaKey) {
            window.open(this.href, '_blank');
            e.preventDefault();
        }
    });
});

/* ==========================================
   SCROLL ANIMATION
   ========================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe villa cards when they're added
const observeVillas = () => {
    document.querySelectorAll('.villa-card, .info-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
};

// Call observe after a small delay to ensure cards are rendered
setTimeout(observeVillas, 100);

/* ==========================================
   VIEWPORT CHECK
   ========================================== */
function checkViewport() {
    const width = window.innerWidth;
    console.log('Viewport width:', width);
}

window.addEventListener('resize', checkViewport);
checkViewport();

/* ==========================================
   PAGE LOAD
   ========================================== */
window.addEventListener('load', function() {
    console.log('Page loaded successfully');
    console.log('Website: https://www.bosvillatawangmangu.my.id');
});
