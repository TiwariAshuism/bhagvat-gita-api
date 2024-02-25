const express = require("express");
const fs = require("fs").promises;
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

// Handle GET requests for chapter data
app.get("/chapter/:ch?", async (req, res) => {
  try {
    const { ch } = req.params;
    let jsonData;

    if (ch) {
      const chapterNumber = parseInt(ch) - 1;
      jsonData = await fs.readFile("chapter.json", "utf8");
      const chapters = JSON.parse(jsonData);
      const chapterData = chapters[chapterNumber];
      if (chapterData) {
        res.json(chapterData);
      } else {
        res.status(404).send("Chapter not found");
      }
    } else {
      jsonData = await fs.readFile("chapter.json", "utf8");
      res.json(JSON.parse(jsonData));
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Handle GET requests for slokas
app.get('/slok/:ch/:sl', async (req, res) => {
  try {
    const { ch, sl } = req.params;
    if (ch > 18) {
      throw "only 18 chpaters"
    }

    const slokaData = await fs.readFile(`./slok/chapter_${ch}/bhagavad_gita_slokas.json`, "utf8");
    const slokas = JSON.parse(slokaData);
    const sloka = slokas[parseInt(sl) - 1];
    if (sloka) {
      res.json(sloka);
    } else {
      res.status(404).send("Sloka not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
