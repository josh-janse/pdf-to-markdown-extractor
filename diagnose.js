import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

console.log('🔍 PDF Extractor Diagnostic Tool');
console.log('================================');

// Check Node.js version
console.log(`📋 Node.js version: ${process.version}`);
console.log(`📋 Platform: ${process.platform}`);

// Check environment
dotenv.config();
const apiKey = process.env.GOOGLE_API_KEY;
console.log(`🔑 API Key: ${apiKey ? '✅ Found' : '❌ Missing'}`);

if (!apiKey) {
  console.log('❌ Please create a .env file with GOOGLE_API_KEY=your_key_here');
  process.exit(1);
}

// Test API connectivity
console.log('\n🌐 Testing API connectivity...');
try {
  const ai = new GoogleGenAI({ apiKey });
  
  // Try a simple API call
  console.log('📞 Making test API call...');
  const result = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: 'Say "Hello, API is working!" in exactly those words.'
  });
  
  console.log('✅ API Response:', result.text);
  
  // Check file methods
  console.log('\n📁 Available file methods:');
  const fileMethods = Object.getOwnPropertyNames(ai.files);
  fileMethods.forEach(method => {
    console.log(`  • ${method}`);
  });
  
  console.log('\n✅ All checks passed! The tool should work.');
  
} catch (error) {
  console.log('❌ API Error:', error.message);
  
  if (error.message.includes('API_KEY_INVALID')) {
    console.log('💡 Your API key appears to be invalid. Please check it.');
  } else if (error.message.includes('NETWORK')) {
    console.log('💡 Network connectivity issue. Check firewall/proxy settings.');
  } else {
    console.log('💡 Unexpected error. Please share this output for debugging.');
  }
}