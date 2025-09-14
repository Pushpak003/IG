import { fetchJson } from "../utils/fetchHelper.js";

export const downloadReel = async (url) => {
  try {
    // Example: calling Instagram public API or 3rd-party extractor
    const apiUrl = `https://api.example.com/reel?url=${encodeURIComponent(url)}`;
    const data = await fetchJson(apiUrl);

    return {
      title: data.title || "Instagram Reel",
      videoUrl: data.video_url,
      thumbnail: data.thumbnail_url,
    };
  } catch (error) {
    throw new Error("Error fetching reel data");
  }
};
