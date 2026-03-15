fetch("weapons.json")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("weaponContainer");

    data.forEach(weapon => {

      const div = document.createElement("div");

      div.classList.add("weapon-card");   // thêm dòng này

      div.innerHTML = `
        <h3>${weapon.identity.name}</h3>
        <p>${weapon.identity.category}</p>
        <p>${weapon.identity.origin} • ${weapon.identity.era}</p>
        <p>${weapon.knowledge.overview}</p>
      `;

      container.appendChild(div);

    });

  });
