console.log("OK")

const endpoint = "https://faiz-web.my.id/api/beritas"

fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        mitra: "",
        imageurl: "",
        judul: "",
        deskripsi: "",
        url: ""
    })
})
    .then((result) => result.json())
    .then((data) => console.log(data)).catch((error) =>console.log(error))