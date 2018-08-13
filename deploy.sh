npm run clean
mkdir dist
cp src/manifest.json dist
cp -R src/img dist
cp -R src/plugin dist
npm run build