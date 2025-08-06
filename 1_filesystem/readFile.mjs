import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

async function readingHTML() {
  const path = resolve("./index.html");
  let file = await readFile(path);

  const data = {
    name: "Harshikesh Kumar",
    course: "MERN Stack Development",
    institute: "Physics Wallah",
  };

  for (const [key, value] of Object.entries(data)) {
    file = file.toString().replace(`{{${key}}}`, value);
  }
  await writeFile(resolve("./output.html"), file);
}

readingHTML();
