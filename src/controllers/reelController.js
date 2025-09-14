import { downloadReel } from "../services/reeelServices.js";
import { validateUrl } from "../utils/validator.js";

export const getReel = async (req, res) => {
  try {
    const { url } = req.body;

    if (!validateUrl(url)) {
      return res.status(400).json({ error: "Invalid reel URL" });
    }

    const reelData = await downloadReel(url);
    return res.json(reelData);
  } catch (error) {
    return res.status(500).json({ error: "Failed to download reel" });
  }
};
