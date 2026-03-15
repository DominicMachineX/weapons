let weaponsData = [];

fetch("weapons.json")
.then(res => res.json())
.then(data => {

weaponsData = data;

applyFilters();

});

function renderWeapons(list){

    const container = document.getElementById("weaponContainer");
    container.innerHTML = "";

    list.forEach(weapon => {

        const card = document.createElement("div");
        card.classList.add("weapon-card");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("weapon-card-img");

        const img = document.createElement("img");
        img.src = weapon.img;
        img.alt = weapon.name;

        imgDiv.appendChild(img);

        const content = document.createElement("div");
        content.classList.add("weapon-card-content");

        content.innerHTML = `
            <h3>${weapon.name}</h3>
            <p>Tên chính thức: <b>${weapon.official_name}</b></p>
            <p>Kiểu vũ khí: ${weapon.type}</p>
            <p>Xuất xứ: ${weapon.origin}</p>
            <p>Sử dụng vào thời kỳ: ${weapon.era}</p>
            <p>Giới thiệu:<br>${weapon.overview}</p>
        `;

        card.appendChild(imgDiv);
        card.appendChild(content);

        container.appendChild(card);

    });

}

document
.getElementById("searchInput")
.addEventListener("input", applyFilters);

document
.getElementById("filterType")
.addEventListener("change", applyFilters);

document
.getElementById("sortSelect")
.addEventListener("change", applyFilters);

function applyFilters(){

let result = [...weaponsData];

const keyword = document
.getElementById("searchInput")
.value
.toLowerCase();

const type = document
.getElementById("filterType")
.value;

const sort = document
.getElementById("sortSelect")
.value;



// SEARCH
if(keyword !== ""){

result = result.filter(w =>
w.name.toLowerCase().includes(keyword)
);

}



// FILTER TYPE
if(type !== "all"){

result = result.filter(w =>
w.type === type
);

}



// SORT
if(sort === "az"){

result.sort((a,b)=> a.name.localeCompare(b.name));

}

if(sort === "za"){

result.sort((a,b)=> b.name.localeCompare(a.name));

}



renderWeapons(result);

}