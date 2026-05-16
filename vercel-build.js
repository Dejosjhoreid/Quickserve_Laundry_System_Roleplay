// This project is a plain static site (single index.html).
// Vercel is failing because it tries to run a framework/vite build.
// Make the build step a true no-op that exits successfully.
process.exit(0);

