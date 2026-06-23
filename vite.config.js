import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

const inlineCSS = () => ({
  name: 'inline-css',
  closeBundle() {
    const distDir = path.resolve('dist')
    const assetsDir = path.resolve(distDir, 'assets')
    if (!fs.existsSync(assetsDir)) return
    
    const files = fs.readdirSync(assetsDir)
    const cssFile = files.find(f => f.endsWith('.css'))
    
    if (cssFile) {
      const cssPath = path.resolve(assetsDir, cssFile)
      const cssContent = fs.readFileSync(cssPath, 'utf-8')
      
      const htmlPath = path.resolve(distDir, 'index.html')
      if (fs.existsSync(htmlPath)) {
        let htmlContent = fs.readFileSync(htmlPath, 'utf-8')
        
        // Match the stylesheet link tag
        const linkRegex = new RegExp(`<link[^>]*href=["'][^"']*${cssFile}["'][^>]*>`, 'i')
        htmlContent = htmlContent.replace(linkRegex, `<style>${cssContent}</style>`)
        
        fs.writeFileSync(htmlPath, htmlContent, 'utf-8')
        console.log(`Successfully inlined ${cssFile} into index.html`)
        
        // Remove the external CSS file
        fs.unlinkSync(cssPath)
        console.log(`Removed external CSS file: ${cssFile}`)
      }
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCSS()],
  build: {
    modulePreload: false,
  },
})

