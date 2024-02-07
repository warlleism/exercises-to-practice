let data = [
  {
    id: 1,
    name: "Warllei Martins",
    age: "27",
    side: "front-end",
  },
  {
    id: 2,
    name: "Rafael Honorio",
    age: "27",
    side: "front-end",
  },
];

const dataContainer = document.getElementById("data-container");
const inputContainer = document.getElementById("input-container");

const removeData = (id) => {
  data = data.filter((e) => e.id !== id);
  renderData();
};

const editData = (id) => {
  const listItem = document.getElementById(`item-${id}`);
  const nameInput = document.createElement("input");
  nameInput.value = data.find((item) => item.id === id).name;
  const ageInput = document.createElement("input");
  ageInput.value = data.find((item) => item.id === id).age;
  const sideInput = document.createElement("input");
  sideInput.value = data.find((item) => item.id === id).side;
  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.addEventListener("click", () => {
    const newName = nameInput.value;
    const newAge = ageInput.value;
    const newSide = sideInput.value;
    data = data.map((item) =>
      item.id === id
        ? { ...item, name: newName, age: newAge, side: newSide }
        : item
    );
    renderData();
  });

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => {
    renderData();
  });

  listItem.innerHTML = "";
  listItem.appendChild(nameInput);
  listItem.appendChild(ageInput);
  listItem.appendChild(sideInput);
  listItem.appendChild(saveButton);
  listItem.appendChild(cancelButton);
};

const renderData = () => {
  dataContainer.innerHTML = "";
  inputContainer.innerHTML = "";
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name: ";
  const ageLabel = document.createElement("label");
  ageLabel.innerText = "Age: ";
  const sideLabel = document.createElement("label");
  sideLabel.innerText = "Side: ";
  const nameInput = document.createElement("input");
  const ageInput = document.createElement("input");
  const sideInput = document.createElement("input");
  nameLabel.appendChild(nameInput);
  ageLabel.appendChild(ageInput);
  sideLabel.appendChild(sideInput);
  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  inputContainer.appendChild(nameLabel);
  inputContainer.appendChild(ageLabel);
  inputContainer.appendChild(sideLabel);
  inputContainer.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    const newName = nameInput.value;
    const newAge = ageInput.value;
    const newSide = sideInput.value;
    const newItem = { name: newName, age: newAge, side: newSide };
    data.push(newItem);
    renderData();
  });

  data.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.setAttribute("id", `item-${item.id}`);
    listItem.innerHTML = `
        <p>Name: ${item.name}</p>
        <p>Age: ${item.age}</p>
        <p>Side: ${item.side}</p>
        <button onclick="removeData(${item.id})">Remove</button>
        <button onclick="editData(${item.id})">Edit</button>
      `;
    dataContainer.appendChild(listItem);
  });
};


renderData();
