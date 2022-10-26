import { NextApiRequest, NextApiResponse } from "next";

// TODO why is this _: 
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};
