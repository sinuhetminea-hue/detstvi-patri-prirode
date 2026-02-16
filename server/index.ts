import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";
import { MOON_RIVER_PROMPT } from "./const";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

async function startServer() {
  const app = express();
  app.use(express.json());
  const server = createServer(app);

  // API endpoint pro chat s Gemou
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: MOON_RIVER_PROMPT },
          ...messages
        ],
      });
      res.json(response.choices[0].message);
    } catch (error) {
      console.error("OpenAI Error:", error);
      res.status(500).json({ error: "OpenAI connection failed" });
    }
  });

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);
