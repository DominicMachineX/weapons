fetch("weapons.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("weaponContainer");

    data.forEach(weapon => {

      const div = document.createElement("div");

      div.classList.add("weapon-card");   // thêm dòng này

      div.innerHTML = `
        <h3>${weapon.name}</h3>
        <p>Tên chính thức: ${weapon.official_name}</p>
        <p>Kiểu vũ khí: ${weapon.type}</p>
        <p>Xuất xứ: ${weapon.origin}</p>
        <p>Sử dụng vào thời kỳ: ${weapon.era}</p>
        <p>Giới thiệu: ${weapon.overview}</p>
      `;

      container.appendChild(div);

    });

  });
