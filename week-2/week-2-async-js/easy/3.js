const fs = require("fs").promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

const filePath =
  "/Users/shoryabaj/Desktop/Rust-web3/cohort_web_dev/assignmentsCOHORT/week-2/week-2-async-js/easy/3-read-from-file.md";

readFile(filePath).then((fileData) => {
  console.log("File data:", fileData);
});
