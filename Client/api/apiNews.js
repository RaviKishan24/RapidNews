export default async function handler(req, res) {
    try {
        let { url } = req.query;

        url = decodeURIComponent(url);

        const baseURL = "https://newsapi.org/v2";

        const response = await fetch(
            `${baseURL}${url}${url.includes("?") ? "&" : "?"}apiKey=${process.env.NEWS_API_KEY}`
        );

        const data = await response.json();

        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}