# YouTube Custom Speed Controller

A simple Chrome extension that allows you to set custom playback speeds for YouTube videos beyond the default options. With this extension, you can set any playback speed between 0.1x and 16x using a convenient input field that appears on your YouTube page.

![Extension Screenshot](./SCR-20250205-sico.jpeg)

## Features

- Set custom playback speeds from 0.1x to 16x
- Simple, non-intrusive interface
- Works on all YouTube video pages
- Real-time speed adjustment
- Persistent speed control that stays on screen

## Installation Guide

Since this extension isn't available on the Chrome Web Store yet, you'll need to install it manually using Chrome's developer mode. Here's how:

1. **Download the Extension**
   - Clone this repository or download it as a ZIP file
   - If downloaded as ZIP, extract it to a folder on your computer

2. **Enable Developer Mode in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - In the top right corner, turn on "Developer mode"

3. **Load the Extension**
   - Click "Load unpacked" button in the top left
   - Navigate to the folder containing the extension files
   - Select the folder and click "Open"

4. **Verify Installation**
   - You should see "YouTube Speed Adjuster" in your extensions list
   - The extension icon should appear in your Chrome toolbar
   - Visit any YouTube video to see the speed controller in action

## How to Use

1. Go to any YouTube video
2. Look for the speed controller in the top right corner of the page
3. Enter your desired playback speed (between 0.1 and 16)
4. The video will immediately adjust to the new speed

## Files Included

- `manifest.json` - Extension configuration
- `content.js` - Main functionality
- `styles.css` - Extension styling
- `screenshot.png` - Extension preview image

## Technical Details

The extension uses:
- Manifest V3
- Content Scripts for DOM manipulation
- Custom CSS for styling
- Event listeners for real-time speed adjustment

## Contributing

Feel free to contribute to this project by:
- Creating issues for bugs or feature requests
- Submitting pull requests with improvements
- Suggesting new features or enhancements
