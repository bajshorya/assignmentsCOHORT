const fs = require("fs").promises;

async function cleanFile(filePath) {
  try {
    // Read the file content
    const data = await fs.readFile(filePath, "utf8");

    // Remove extra spaces
    const cleanedData = data.replace(/\s+/g, " ").trim();

    // Write the cleaned content back to the same file
    await fs.writeFile(filePath, cleanedData, "utf8");

    console.log("File cleaned successfully.");
  } catch (error) {
    console.error("Error processing file:", error);
  }
}

// Specify the path to your file
const filePath =
  "/Users/shoryabaj/Desktop/Rust-web3/cohort_web_dev/assignmentsCOHORT/week-2/week-2-async-js/medium/1-file-cleaner.md"; // Replace with the actual file path
cleanFile(filePath);
