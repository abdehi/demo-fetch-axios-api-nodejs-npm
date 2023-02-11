const axios = require("axios").default;

const BASE_API_URL = `https://api.kontenbase.com/query/api/v1/3325dcf5-a9b6-4c6c-a210-a0c0635d86d7`;

const apiUrl = `${BASE_API_URL}/list-to-do`;

async function getData() {
  const response = await axios.get(apiUrl);
  const result = response.data;
  console.log(result);
}

async function postsData() {
  const data = {
    title: "value1",
    notes: "value2",
  };

  const response = await axios.post(apiUrl, data);
  const result = response.data;
  console.log(result);
}

async function patchData() {
  const data = {
    title: "patchdata",
    notes: "oke",
  };

  const response = await axios.patch(
    `${apiUrl}/63e7a58a8185f56900e351d4`,
    data
  );
  const result = response.data;
  console.log(result);
}

async function deleteData() {
  const response = await axios.delete(`${apiUrl}/63e741988185f56900e3519a`);
  const result = response.data;
  console.log(result);
}

patchData();
