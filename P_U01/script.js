document.addEventListener("DOMContentLoaded", () => {
    const baza = document.getElementById("baza");
    const bazaList = document.getElementById("bazaList").querySelector("tbody");

    let dataArray = [
        {name: "Maciej", podgatunek: "Owczarek niemiecki", age: 2, color: "Brązowy"},
        {name: "Justyne", podgatunek: "Chomik syryjski", age: 1, color: "Biało-rudy"},
        {name: "Jan", podgatunek: "Brachypelma hamorii", age: 4, color: "Czarno-pomarańczowy"},
    ];

    function updateDataTable(){
        bazaList.innerHTML = "";
        dataArray.forEach((item) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.textContent = item.name;
            const podgatunekCell = document.createElement("td");
            podgatunekCell.textContent = item.podgatunek;
            const ageCell = document.createElement("td");
            ageCell.textContent = item.age;
            const colorCell = document.createElement("td");
            colorCell.textContent = item.color;

            row.appendChild(nameCell);
            row.appendChild(podgatunekCell);
            row.appendChild(ageCell);
            row.appendChild(colorCell);
            bazaList.appendChild(row);
        });

    }

    updateDataTable();

    baza.addEventListener("submit", (event) =>{
        event.preventDefault();

        const name = baza.elements["name"].value;
        const podgatunek = baza.elements["podgatunek"].value;
        const age = baza.elements["age"].value;
        const color = baza.elements["color"].value;

        const data = {name: name, podgatunek: podgatunek, age: age, color: color};
        dataArray.push(data);

        updateDataTable();
        baza.reset();
    });
});
