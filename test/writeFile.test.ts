const fs = require('fs');
const path = require('path');
import { xmlToJsonFromUrl } from '../src';




describe('xmlToJson', () => {
    it('should parse XML to JSON and write output to a local directory', async () => {
      // Mock XML data (replace this with your actual XML data or URL)
    //   const xmlData = `<root><name>John</name><age>30</age></root>`;
  
      // Parse XML to JSON
      const jsonOutput = await xmlToJsonFromUrl("https://abcnews.go.com/abcnews/usheadlines");
  
      // Write JSON output to a local directory
      const outputDir = path.join(__dirname, 'output'); // Define output directory
      const outputFile = path.join(outputDir, 'output.json'); // Define output file path
  
      // Create output directory if it doesn't exist
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }
  
      // Write JSON data to the output file
      fs.writeFileSync(outputFile, JSON.stringify(jsonOutput, null, 2));
  
      // Check if the output file was created successfully
      const fileExists = fs.existsSync(outputFile);
      expect(fileExists).toBe(true);
    });
  });