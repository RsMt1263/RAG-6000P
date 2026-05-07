// login.js - Databáza a logika overovania
const users = [
    { id: "9999", pin: "011100", meno: "Admin" },
    { id: "1001", pin: "126316", meno: "RsMt1263" },
    { id: "1002", pin: "280167", meno: "LUKASím" },
    { id: "1005", pin: "163616", meno: "Helocz72" },
    { id: "1006", pin: "012686", meno: "fotograf_z_poruby" },
    { id: "1007", pin: "010110", meno: "seba_456" },
];

let prebiehaOverovanie = false;
let realneHeslo = "";

// Funkcia na maskovanie hesla (hviezdičky)
function maskovanieHesla(input) {
    let hodnota = input.value;
    
    // Ak užívateľ pridal znak
    if (hodnota.length > realneHeslo.length) {
        realneHeslo += hodnota.slice(-1);
    } 
    // Ak užívateľ mazal (Backspace)
    else {
        realneHeslo = realneHeslo.substring(0, hodnota.length);
    }

    // Zobrazí hviezdičky s krátkym oneskorením pre efekt "ťuknutia"
    setTimeout(() => { 
        input.value = "*".repeat(realneHeslo.length); 
    }, 200);
}

// Hlavná logika overenia
function spustitOverenie() {
    if (prebiehaOverovanie) return;
    
    // Klasické pípnutie pri stlačení tlačidla POTVRDIŤ
    if (typeof playBeep === "function") playBeep();

    const idInput = document.getElementById('driver-id');
    const pinInput = document.getElementById('driver-pin');
    const vypis = document.getElementById('vypis-meno');

    const idVal = idInput.value;

    // Kontrola prázdnych polí
    if (!idVal || !realneHeslo) {
        vypis.textContent = "ZADAJ ÚDAJE";
        return;
    }

    prebiehaOverovanie = true;
    vypis.textContent = "PRIHLASUJEM...";

    // Simulácia komunikácie (3 až 7 sekúnd)
    const nahodnyCas = Math.floor(Math.random() * 4001) + 3000;

    setTimeout(() => {
        const najdeny = users.find(u => u.id === idVal && u.pin === realneHeslo);
        
        if (najdeny) {
            // ÚSPEŠNÉ PRIHLÁSENIE
            vypis.textContent = "VODIČ: " + najdeny.meno.toUpperCase();
            
            // ŠPECIÁLNE PÍPNUTIE (6000_beep2.wav)
            if (typeof playSuccessBeep === "function") {
                playSuccessBeep();
            }

            // Zapíšeme stav 3 a po 2 sekundách ideme do menu
            localStorage.setItem('srg_log', '3');
            setTimeout(() => { 
                window.location.href = "menu_poprihlas.html"; 
            }, 2000);

        } else {
            // CHYBA PRIHLÁSENIA
            vypis.textContent = "CHYBNÉ ÚDAJE";
            
            // Resetovanie stavu, aby sa dalo skúsiť znova
            prebiehaOverovanie = false;
            realneHeslo = "";
            pinInput.value = "";
            
            // Krátka pauza a zmiznutie nápisu chyby
            setTimeout(() => {
                if (!prebiehaOverovanie) vypis.textContent = "";
            }, 3000);
        }
    }, nahodnyCas);
}

// Pomocná funkcia pre vymazanie polí pri zameraní (voliteľné)
function resetInput(el) {
    el.value = "";
    if (el.id === 'driver-pin') realneHeslo = "";
}