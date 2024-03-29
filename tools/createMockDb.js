/* eslint-disable no-console */
import { writeFile } from "fs";
import { join, dirname } from "path";
import mockData from "./mockData.js";
import { fileURLToPath } from 'url';

const { listings, products, tasks } = mockData;
const data = JSON.stringify({ listings, products, tasks });

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);
const filepath = join(__dirname, "db.json");

writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
