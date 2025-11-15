export default async function handler(req, res) {
  const query = req.query.q;

  const API_KEY = process.env.GOOGLE_API_KEY;
  const CX = process.env.CSE_ID;

  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
}
