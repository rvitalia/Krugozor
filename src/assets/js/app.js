document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("payer-phone");

    if (phoneInput) {
        Inputmask({
            mask: "+7 (9\\00) 000-00-00",
            showMaskOnHover: false,
            clearIncomplete: true,
            definitions: {
                '0': {
                    validator: "[0-9]",
                    cardinality: 1
                }
            }
        }).mask(phoneInput);
    }
    
    
    const e = document.getElementById("burger-menu"), t = document.getElementById("header-mobile"); e.addEventListener("click", function () { e.classList.toggle("active"), t.classList.toggle("active") }); var n = document.body, n = (document.querySelector(".container"), window.innerWidth - n.clientWidth); document.documentElement.style.setProperty("--scrollbar-width", n + "px")
});