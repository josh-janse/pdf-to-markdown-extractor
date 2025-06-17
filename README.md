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

## 🛠️ Quick Start

### Prerequisites
- Node.js 18 or higher
- Google API key for Gemini

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/josh-janse/pdf-to-markdown-extractor.git
cd pdf-to-markdown-extractor

# Install dependencies
npm install
```

### 2. Get Your Gemini API Key
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key" in the sidebar
4. Create a new API key and copy it

### 3. Configure Environment

```bash
# Copy the template and add your API key
cp .env.template .env

# Edit .env and add your API key
echo "GOOGLE_API_KEY=your_actual_api_key_here" > .env
```

### 4. Test Installation

```bash
# Run the diagnostic to verify everything works
node diagnose.js
```

You should see:
```
✅ All checks passed! The tool should work.
```

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

**Free Tier:** Free of charge for both input and output (with rate limits)

**Paid Tier (per 1M tokens):**
- Input: $0.10 (text/image/video)
- Output: $0.40

**Real-world costs for typical PDFs:**
- Small document (5 pages): ~$0.002-0.005
- Medium document (20 pages): ~$0.01-0.02  
- Large document (100 pages): ~$0.05-0.10

**Important:** Most users can use the free tier for testing and light usage. You only pay when you exceed the free tier rate limits.

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

Run the diagnostic script to troubleshoot issues:
```bash
node diagnose.js
```

This will check:
- Node.js version compatibility
- API key configuration
- Network connectivity
- Available API methods

Common issues and solutions:

**"GOOGLE_API_KEY not found"**
- Ensure `.env` file exists in project root
- Check there are no spaces around the `=` sign
- Verify your API key is correct

**"File not found"**
- Use full or relative paths to PDF files
- Ensure files have `.pdf` extension
- Check file permissions

**"API Error"**
- Verify your API key is active at [Google AI Studio](https://aistudio.google.com/)
- Check internet connectivity
- Ensure you haven't exceeded rate limits

**"No PDF files found"**
- Verify the folder contains PDF files
- Check folder path is correct
- Ensure PDF files have proper extensions

## 🛠️ Development

### Project Structure
```
pdf-to-markdown-extractor/
├── README.md          # This file
├── extract.js         # Main extraction script
├── diagnose.js        # Diagnostic utility
├── package.json       # Dependencies and scripts
├── package-lock.json  # Locked dependency versions
├── .env.template      # Environment template
├── .env              # Your API key (not in repo)
├── .gitignore        # Git ignore rules
└── output/           # Generated markdown files
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Adding Features

The codebase is intentionally simple. Some ideas for enhancements:
- Support for other document formats (DOCX, PPTX)
- Custom output formatting options
- Integration with other AI models
- Web interface
- Docker containerization

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

### Development Setup

```bash
# Fork and clone your fork
git clone https://github.com/YOUR_USERNAME/pdf-to-markdown-extractor.git
cd pdf-to-markdown-extractor

# Install dependencies
npm install

# Copy environment template
cp .env.template .env
# Add your API key to .env

# Test your setup
node diagnose.js
```

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🚀 Advanced Usage

### Custom Output Directory
Modify the script to change the output directory:
```javascript
// Change this line in extract.js:
await fs.mkdir('./my-output', { recursive: true });
```

### Custom Prompts
Modify the extraction prompt for specific formatting:
```javascript
// Find this line in extract.js and customize:
'Extract all text from this PDF and format it as clean markdown...'
```

### Integration
Use as a module in larger projects:
```javascript
import { extractPDF } from './extract.js';
const result = await extractPDF('document.pdf');
```

### Automation

Create npm scripts in `package.json`:
```json
{
  "scripts": {
    "extract": "node extract.js",
    "diagnose": "node diagnose.js",
    "extract-docs": "node extract.js ./documents/"
  }
}
```

Then use:
```bash
npm run extract document.pdf
npm run diagnose
npm run extract-docs
```

---

**Happy extracting! 📚➡️📝**

⭐ **Star this repo** if you find it useful!  
🐛 **Report issues** on the [GitHub Issues page](https://github.com/josh-janse/pdf-to-markdown-extractor/issues)  
💡 **Suggest features** or contribute improvements
