console.log(
    ["Ábç dêã","íéàôõ"].map(el=>el.split(" ").reduce((output,innerEl)=>[...output,innerEl.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()],[]).join(" "))
)
