// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recipeScraper = require("recipe-scraper");
import type {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	async function scrapeUrl(url: string) {
		let recipe = await recipeScraper(url);
		return recipe;
	}

	let response = await scrapeUrl(req.body);
	res.status(203).json({recipe: {response}});
};
