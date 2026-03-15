fetch("weapons.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("weaponContainer");

    data.forEach(weapon => {

      // card chính
      const card = document.createElement("div");
      card.classList.add("weapon-card");

      // div ảnh
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("weapon-card-img");

      const img = document.createElement("img");
      img.src = weapon.img;
      img.alt = weapon.name;

      imgDiv.appendChild(img);

      // div nội dung
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

      // ghép lại
      card.appendChild(imgDiv);
      card.appendChild(content);

      container.appendChild(card);

    });

  });