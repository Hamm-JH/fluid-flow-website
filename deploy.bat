@echo off
echo === Website Deployment Process Started ===
echo.

echo 1. Running production build...
npm run build

echo.
echo 2. Checking build results...
dir dist

echo.
echo 3. Starting preview server...
echo (Press Ctrl+C to stop the preview)
npm run preview

echo.
echo === Deployment Process Completed ===
