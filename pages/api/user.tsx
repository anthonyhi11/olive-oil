import type { NextApiRequest, NextApiResponse } from "next";

// Writing very simple APIs to test out functionality of client before I make it my priority to
export default async function UserHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	interface IUserInfo {
		firstName: string;
		lastName: string;
		email: string;
		birthday: string;
	}
	if (req.method === "POST") {
		let userInfo: IUserInfo = {
			firstName: "Stranger",
			lastName: "Danger",
			email: "notSure",
			birthday: "April 20",
		};

		switch (req.body.email) {
			case "antdavhill@gmail.com":
				userInfo = {
					firstName: "Anthony",
					lastName: "Hill",
					email: "antdavhill@gmail.com",
					birthday: "April 11",
				};
				return res.status(201).json({ userInfo });
			case "jamleebrow@gmail.com":
				userInfo = {
					firstName: "Jamie",
					lastName: "Hill",
					email: "jamleebrow@gmail.com",
					birthday: "May 25",
				};
				return res.status(201).json({ userInfo });
			default:
				return res.status(200).json({ userInfo });
		}
	}
}
