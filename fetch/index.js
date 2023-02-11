const BASE_API_URL = `https://api.kontenbase.com/query/api/v1/3325dcf5-a9b6-4c6c-a210-a0c0635d86d7`;

const apiUrl = `${BASE_API_URL}/list-to-do`;

async function getListToDo() {
  const response = await fetch(apiUrl);
  const listToDo = await response.json();

  console.log(listToDo);
}

async function postsListToDo() {
  const data = {
    title: "ini baru",
    notes: "kedua kali tambah",
  };
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const newPost = await response.json();

  console.log(newPost);
}

async function deleteListToDo() {
  const response = await fetch(`${apiUrl}/63e741668185f56900e35199`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const newPatch = await response.json();

  console.log(newPatch);
}

async function putListToDo() {
  const data = {
    title: "ini baru",
    notes: "kedua kali tambah",
  };
  const response = await fetch(`${apiUrl}/63e70d438185f56900e35182`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const newPatch = await response.json();

  console.log(newPatch);
}

putListToDo();
