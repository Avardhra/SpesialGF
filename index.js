// === Update Waktu ===
function updateWaktu() {
    const hours = document.getElementById('StyleHours');
    const minutes = document.getElementById('StyleSeconds');
    const now = new Date();

    let Jam = String(now.getHours()).padStart(2, '0');
    let Menit = String(now.getMinutes()).padStart(2, '0');
    let Detik = String(now.getSeconds()).padStart(2, '0');
    let MiliDetik = String(now.getMilliseconds()).padStart(3, '0');

    hours.innerText = `${Jam} : ${Menit}`;
    minutes.innerText = `${Detik} : ${MiliDetik}`;

    document.getElementById('TitleOfDay').innerText = "Nivalesha Terus Berjalan";

    const tanggalJadian = new Date('2024-09-09');
    const tanggalTerkini = new Date();
    const today = tanggalTerkini.getDate();
    let WaktuJadian = (tanggalTerkini - tanggalJadian) / (24 * 60 * 60 * 1000);

    const Bulan = WaktuJadian / 30;
    const Tahun = Bulan / 12;

    if (today >= 9) {
        document.getElementById("RekapBulan").innerText = "| " + (Bulan >= 12 ? `${parseInt(Tahun)} Tahun` : `${parseInt(Bulan)} Bulan`);
    } else {
        document.getElementById("RekapBulan").innerText = "| " + `${parseInt(Bulan )} Bulan`;
    }
}
setInterval(updateWaktu, 10);
updateWaktu();

// === Update Hari dan Rayakan Button ===
let RayakannBTN = false;

function updateHari() {
    const tanggalJadian = new Date('2024-09-09');
    const tanggalTerkini = new Date();
    let WaktuJadian = (tanggalTerkini - tanggalJadian) / (24 * 60 * 60 * 1000);
    document.getElementById("waktuBersama").innerText = parseInt(WaktuJadian);

    document.getElementById('RayakanBTN').addEventListener('click', () => {
        RayakannBTN = !RayakannBTN;
        if (RayakannBTN) {
            const down = setInterval(() => {
                WaktuJadian--;
                document.getElementById("waktuBersama").innerText = parseInt(WaktuJadian);
                document.getElementById("waktuBersama").style.color = "#ff6f1b";
                let newWJ = WaktuJadian;
                if(newWJ <= 1){
                 window.location.href = 'Anniversary.html';
                }
                if (WaktuJadian <= 0) {
                    clearInterval(down);
                }
            }, 5);
        } else {
            document.getElementById("waktuBersama").innerText = parseInt(WaktuJadian);
        }
    });
}
updateHari();

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        CustomFont2: ['CustomFont2', 'sans-serif'], // key = nama class
      },
    },
  },
};
