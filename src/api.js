const getProducts = async (buscado, filters = {}) => {
  const apiURL = "https://api.mercadolibre.com/";
  console.log(filters);
  let endPoint = `sites/MLA/search?q=${buscado}`;

  if (filters && filters.hasOwnProperty("New")) {
    if (filters.New === true) {
      endPoint = endPoint + `&ITEM_CONDITION=${2230284}`;
    } else {
      endPoint = endPoint + `&ITEM_CONDITION=${2230581}`;
    }
  }

  if (filters && filters.hasOwnProperty("Max")) {
    if (filters.Max === true) {
      endPoint = endPoint + `&sort=price_desc`;
    } else {
      endPoint = endPoint + `&sort=price_asc`;
    }
  }

  try {
    let response = await fetch(apiURL + endPoint);
    let data = await response.json();
    return data.results;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
export default getProducts;
