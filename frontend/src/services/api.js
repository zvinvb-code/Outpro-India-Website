const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchGET = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (error) {
    console.error(`Fetch GET Error [${endpoint}]:`, error);
    return null;
  }
};

export const fetchPOST = async (endpoint, data) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (error) {
    console.error(`Fetch POST Error [${endpoint}]:`, error);
    return null;
  }
};