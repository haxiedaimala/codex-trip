import banners from "../mock/banners";
import routes from "../mock/routes";
import spots from "../mock/spots";
import tips from "../mock/tips";

const wait = (time = 240) => new Promise((resolve) => setTimeout(resolve, time));

export async function getBanners() {
  await wait();
  return banners;
}

export async function getSpots(params = {}) {
  await wait();
  const { keyword = "", category = "全部", limit } = params;
  const normalizedKeyword = keyword.trim();
  const result = spots.filter((item) => {
    const matchKeyword = !normalizedKeyword || item.name.includes(normalizedKeyword);
    const matchCategory = category === "全部" || item.category === category;
    return matchKeyword && matchCategory;
  });

  return typeof limit === "number" ? result.slice(0, limit) : result;
}

export async function getSpotDetail(id) {
  await wait();
  return spots.find((item) => item.id === Number(id)) || null;
}

export async function getRelatedSpots(ids = []) {
  await wait();
  return spots.filter((item) => ids.includes(item.id));
}

export async function getRoutes() {
  await wait();
  return routes;
}

export async function getRouteDetail(id) {
  await wait();
  return routes.find((item) => item.id === Number(id)) || null;
}

export async function getTips() {
  await wait();
  return tips;
}
