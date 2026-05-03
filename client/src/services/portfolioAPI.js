import { fetchGET } from "./api";

export const getPortfolio = () => fetchGET("/portfolio");