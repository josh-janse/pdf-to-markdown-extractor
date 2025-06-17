import { GoogleGenAI, createUserContent, createPartFromUri } from '@google/genai';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function extractPDF(pdfPath) {
  try {
    console.log(`🔄 Processing: ${pdfPath}`);
    
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      throw new Error('GOOGLE_API_KEY not found in .env file');
    }
    
    const ai = new GoogleGenAI({ apiKey });
    
    // Upload file
    console.log('📤 Uploading to Gemini...');
    const uploadResult = await ai.files.upload({
      file: pdfPath,
      config: { 
        mimeType: 'application/pdf',
        displayName: path.basename(pdfPath)
      }
    });
    
    console.log(`✅ File uploaded: ${uploadResult.name}`);
    
    // Extract text
    console.log('🤖 Extracting text...');
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash-001',
      contents: createUserContent([
        createPartFromUri(uploadResult.uri, uploadResult.mimeType),
        'Extract all text from this PDF and format it as clean markdown. Use proper headers, preserve structure, and convert tables to markdown format.'
      ])
    });
    
    // Save output
    await fs.mkdir('./output', { recursive: true });
    const baseName = path.basename(pdfPath, '.pdf');
    const outputPath = path.join('./output', `${baseName}.md`);
    
    await fs.writeFile(outputPath, result.text, 'utf8');
    
    console.log(`✅ Success! Saved to: ${outputPath}`);
    console.log(`📊 Length: ${result.text.length} characters\n`);
    
    return { success: true, outputPath, length: result.text.length };
    
  } catch (error) {
    console.error(`❌ Error processing ${pdfPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function findPDFs(inputPath) {
  try {
    const stats = await fs.stat(inputPath);
    
    if (stats.isFile()) {
      // Single file
      if (inputPath.toLowerCase().endsWith('.pdf')) {
        return [inputPath];
      } else {
        throw new Error('File is not a PDF');
      }
    } else if (stats.isDirectory()) {
      // Directory - find all PDFs
      console.log(`📁 Scanning directory: ${inputPath}`);
      const files = await fs.readdir(inputPath);
      const pdfFiles = files
        .filter(file => file.toLowerCase().endsWith('.pdf'))
        .map(file => path.join(inputPath, file));
      
      console.log(`📄 Found ${pdfFiles.length} PDF files`);
      return pdfFiles;
    } else {
      throw new Error('Path is neither a file nor a directory');
    }
  } catch (error) {
    throw new Error(`Cannot access ${inputPath}: ${error.message}`);
  }
}

async function main() {
  const inputPath = process.argv[2];

  if (!inputPath) {
    console.log(`
📚 PDF to Markdown Extractor (Simple)

Usage:
  node extract-simple.js <pdf-file>           # Single file
  node extract-simple.js <folder>             # All PDFs in folder
  
Examples:
  node extract-simple.js document.pdf
  node extract-simple.js ./pdfs/
  node extract-simple.js /path/to/documents/

Output:
  Markdown files will be saved to ./output/ directory
    `);
    process.exit(1);
  }

  try {
    // Find all PDF files
    const pdfFiles = await findPDFs(inputPath);
    
    if (pdfFiles.length === 0) {
      console.log('❌ No PDF files found');
      process.exit(1);
    }

    console.log(`🚀 Processing ${pdfFiles.length} PDF file(s)...\n`);
    
    const results = [];
    
    // Process each PDF
    for (let i = 0; i < pdfFiles.length; i++) {
      const pdfPath = pdfFiles[i];
      console.log(`📄 File ${i + 1}/${pdfFiles.length}`);
      
      const result = await extractPDF(pdfPath);
      results.push({ file: pdfPath, ...result });
      
      // Small delay between files to be respectful to the API
      if (i < pdfFiles.length - 1) {
        console.log('⏳ Waiting 2 seconds...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    // Summary
    console.log('📋 SUMMARY:');
    console.log('===========');
    
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    console.log(`✅ Successful: ${successful.length}`);
    console.log(`❌ Failed: ${failed.length}`);
    
    if (successful.length > 0) {
      console.log('\n📂 Generated files:');
      successful.forEach(result => {
        console.log(`  • ${result.outputPath} (${result.length} chars)`);
      });
    }
    
    if (failed.length > 0) {
      console.log('\n💥 Failed files:');
      failed.forEach(result => {
        console.log(`  • ${result.file}: ${result.error}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();