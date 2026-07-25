// =======================================
// ZAHRA SWEET BAKERY
// SCRIPT.JS
// =======================================

// =============================
// DATA KERANJANG
// =============================

let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

// =============================
// SIMPAN DATA
// =============================

function simpanKeranjang() {

    localStorage.setItem(
        "keranjang",
        JSON.stringify(keranjang)
    );

    updateBadge();

}

// =============================
// BADGE KERANJANG
// =============================

function updateBadge() {

    const badge = document.getElementById("cart-count");

    if (badge) {

        badge.textContent = keranjang.length;

    }

}

// =============================
// TAMBAH PRODUK
// =============================

function tambahKeranjang(nama, harga) {

    keranjang.push({

        nama: nama,
        harga: harga

    });

    simpanKeranjang();

    alert(nama + " berhasil ditambahkan ke keranjang.");

}

// =============================
// TAMPILKAN KERANJANG
// =============================

function tampilkanKeranjang() {

    const body = document.getElementById("cart-body");

    if (!body) return;

    body.innerHTML = "";

    let total = 0;

    if (keranjang.length === 0) {

        body.innerHTML = `
        <tr>
            <td colspan="4">
                Keranjang masih kosong.
            </td>
        </tr>
        `;

        const totalHarga = document.getElementById("totalHarga");

        if(totalHarga){

            totalHarga.innerHTML="Rp0";

        }

        return;

    }

    keranjang.forEach((item,index)=>{

        total += item.harga;

        body.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.nama}</td>

            <td>
                Rp${item.harga.toLocaleString("id-ID")}
            </td>

            <td>

                <button onclick="hapusItem(${index})">

                    Hapus

                </button>

            </td>

        </tr>

        `;

    });

    const totalHarga=document.getElementById("totalHarga");

    if(totalHarga){

        totalHarga.innerHTML=
        "Rp"+total.toLocaleString("id-ID");

    }

}

// =============================
// HAPUS PRODUK
// =============================

function hapusItem(index){

    keranjang.splice(index,1);

    simpanKeranjang();

    tampilkanKeranjang();

}

// =============================
// KOSONGKAN
// =============================

function kosongkanKeranjang(){

    if(confirm("Kosongkan semua keranjang?")){

        keranjang=[];

        localStorage.removeItem("keranjang");

        updateBadge();

        tampilkanKeranjang();

    }

}

// =============================
// CHECKOUT WA
// =============================

function checkoutWA(){

    if(keranjang.length===0){

        alert("Keranjang masih kosong.");

        return;

    }

    let pesan="Halo Zahra Sweet Bakery,%0A";

    let total=0;

    keranjang.forEach((item)=>{

        pesan+=
        "- "+
        item.nama+
        " : Rp"+
        item.harga.toLocaleString("id-ID")+
        "%0A";

        total+=item.harga;

    });

    pesan+="%0ATotal = Rp"+total.toLocaleString("id-ID");

    window.open(

        "https://wa.me/6281234567890?text="+pesan,

        "_blank"

    );

}

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach((link)=>{

    link.addEventListener("click",function(e){

        const tujuan=document.querySelector(

            this.getAttribute("href")

        );

        if(tujuan){

            e.preventDefault();

            tujuan.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =============================
// LOADING
// =============================

window.onload=function(){

    updateBadge();

    tampilkanKeranjang();

};
