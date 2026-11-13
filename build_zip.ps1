@echo off
%SystemRoot%System32where.exe zip >/dev/null 2>&1 && zip -r submission/Proofdesk-Source.zip src public scripts index.html package.json vite.config.js README.md DESIGN-NOTES.md --exclude node_modules -x dist -x .git
