import { fetchGET, fetchPOST } from "./api";

// GET services
export const getServices = () => fetchGET("/services");

// CREATE service
export const createService = (data) => fetchPOST("/services", data);
