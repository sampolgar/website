export default function handler(req, res) {
  const body = req.body;
  console.log("body", body);

  //guard against no email
  if (!body.email) {
    return res.status(400).json({ data: "email is required" });
  }

  //validate email
  res.status(200).json({ data: `${body.email} is a valid email` });
}
