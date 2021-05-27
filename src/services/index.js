const getInformation = async (param, name) => {
  try {
    const RES = await fetch(`http://localhost:3001/api/data/${param}/${name}`);
    const data = await RES.json();

    return data;
  } catch (err) {
    throw Error("something went wrong");
  }
};

export { getInformation };
