# PDF to Markdown Extractor

A simple, powerful Node.js tool that converts PDF documents to clean, structured markdown using Google's Gemini 2.0 Flash API. Perfect for digitizing documents, creating documentation, or preparing content for further processing.

## ✨ Features

- 🚀 **Simple & Fast** - Convert PDFs to markdown in seconds
- 📁 **Batch Processing** - Handle single files or entire folders
- 🧠 **AI-Powered** - Uses Gemini 2.0 Flash for intelligent text extraction
- 📊 **Structure Preservation** - Maintains headers, tables, and formatting
- 💰 **Cost-Effective** - File uploads are free, minimal processing costs
- 🔒 **Secure** - Files auto-delete after 48 hours
- 📱 **Cross-Platform** - Works on macOS, Windows, and Linux

## 🛠️ Setup

### Prerequisites
- Node.js 18 or higher
- Google API key for Gemini

### 1. Get Your Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key" in the sidebar
4. Create a new API key and copy it

### 2. Installation

```bash
# Clone or create project directory
mkdir pdf-extractor
cd pdf-extractor

# Initialize project
npm init -y

# Install dependencies
npm install @google/genai dotenv

# Create environment file
echo "GOOGLE_API_KEY=your_actual_api_key_here" > .env
```

### 3. Add the Script
Create `extract.js` with the provided code, or copy from this repository.

## 🚀 Usage

### Single PDF File
```bash
node extract.js document.pdf
```

### Multiple Files
```bash
node extract.js file1.pdf file2.pdf file3.pdf
```

### Entire Folder
```bash
# Process all PDFs in a folder
node extract.js ./documents/

# Process all PDFs in current directory
node extract.js ./
```

### Examples
```bash
# Convert a research paper
node extract.js research-paper.pdf

# Process all invoices
node extract.js ./invoices/

# Convert presentation slides
node extract.js presentation.pdf
```

## 📂 Output

- Markdown files are saved to `./output/` directory
- Each PDF generates a corresponding `.md` file
- Original document structure is preserved
- Tables are converted to markdown format
- Headers and formatting are maintained

## 💰 Cost

**File Uploads:** Free  
**Text Processing:** ~$0.10 per million tokens  
**Typical Cost:** $0.01-0.05 per 10-page PDF  

Example costs:
- Small document (5 pages): ~$0.005
- Medium document (20 pages): ~$0.02
- Large document (100 pages): ~$0.10

## 🔧 Configuration

### Environment Variables
Create a `.env` file in your project root:

```bash
GOOGLE_API_KEY=your_gemini_api_key_here
```

### File Limits
- Maximum file size: 2GB per PDF
- Storage limit: 20GB total per project
- Files automatically delete after 48 hours
- Rate limiting: 2-second delay between files in batch mode

## 📊 What It Extracts

✅ **Text Content** - All readable text from PDFs  
✅ **Headers & Structure** - Document hierarchy preserved  
✅ **Tables** - Converted to markdown table format  
✅ **Lists** - Bullet points and numbered lists  
✅ **Formatting** - Bold and italic text where possible  
✅ **Multi-column Layout** - Intelligent text flow handling  

## 🐛 Troubleshooting

### Common Issues

**"GOOGLE_API_KEY not found"**
- Ensure `.env` file exists in project root
- Check there are no spaces around the `=` sign
- Verify your API key is correct

**"File not found"**
- Use full or relative paths to PDF files
- Ensure files have `.pdf` extension
- Check file permissions

**"API Error"**
- Verify your API key is active
- Check internet connectivity
- Ensure you haven't exceeded rate limits

**"No PDF files found"**
- Verify the folder contains PDF files
- Check folder path is correct
- Ensure PDF files have proper extensions

### Getting Help

1. **Check API Key**: Run the diagnostic script to verify setup
2. **File Permissions**: Ensure Node.js can read your PDF files
3. **Network**: Check firewall/proxy settings if API calls fail
4. **File Size**: Very large PDFs (>100MB) may take longer to process

## 📝 Example Output

**Input:** `quarterly-report.pdf`  
**Output:** `output/quarterly-report.md`

```markdown
# Q3 2024 Financial Report

## Executive Summary

Our company achieved strong growth in Q3 2024...

| Metric | Q3 2024 | Q2 2024 | Change |
|--------|---------|---------|--------|
| Revenue | $2.1M | $1.8M | +16.7% |
| Profit | $450K | $380K | +18.4% |

## Key Achievements

- Launched new product line
- Expanded to 3 new markets
- Improved customer satisfaction by 25%
```

## 🔒 Security & Privacy

- API keys are stored locally in `.env` files
- Files are uploaded securely to Google's servers
- All uploaded files auto-delete after 48 hours
- No data is stored permanently
- API calls are encrypted in transit

## 🤝 Contributing

This is a simple utility script. Feel free to:
- Fork and modify for your needs
- Add new features or improvements
- Report issues or suggestions
- Share your use cases

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🚀 Advanced Usage

### Custom Output Directory
Modify the script to change the output directory:
```javascript
// Change this line in the script:
await fs.mkdir('./my-output', { recursive: true });
```

### Custom Prompts
Modify the extraction prompt for specific formatting:
```javascript
// Find this line and customize:
'Extract all text from this PDF and format it as clean markdown...'
```

### Integration
Use as a module in larger projects:
```javascript
import { extractPDF } from './extract.js';
const result = await extractPDF('document.pdf');
```

---

**Happy extracting! 📚➡️📝**