import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.post("/api/validate-card", (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Card validation endpoint is working"
  });
});

export default app;