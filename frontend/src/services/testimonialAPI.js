import { fetchGET } from "./api";

export const getTestimonials = () => fetchGET("/testimonials");