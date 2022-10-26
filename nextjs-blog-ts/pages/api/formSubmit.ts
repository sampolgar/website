import { NextApiRequest, NextApiResponse } from "next";

export default function formHandler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "hello" });
}
