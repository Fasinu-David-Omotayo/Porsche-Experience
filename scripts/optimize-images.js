const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(process.cwd(), "public/images");

async function getImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      images.push(...(await getImages(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();

    if ([".jpg", ".jpeg", ".png"].includes(ext)) {
      images.push(fullPath);
    }
  }

  return images;
}

async function optimize() {
  const images = await getImages(inputDir);

  console.log(`Found ${images.length} images.\n`);

  for (const inputPath of images) {
    const relativePath = path.relative(inputDir, inputPath);
    const parsed = path.parse(relativePath);

    const outputDir = path.join(
      inputDir,
      "optimized",
      parsed.dir
    );

    fs.mkdirSync(outputDir, { recursive: true });

    const outputPath = path.join(
      outputDir,
      `${parsed.name}.webp`
    );

    try {
      await sharp(inputPath)
        .resize({
          width: 2400,
          withoutEnlargement: true,
        })
        .webp({
          quality: 82,
        })
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;

      const originalMB = (originalSize / 1024 / 1024).toFixed(2);
      const optimizedKB = (optimizedSize / 1024).toFixed(0);

      console.log(
        `✓ ${relativePath} → ${optimizedKB} KB (was ${originalMB} MB)`
      );
    } catch (error) {
      console.error(`✗ ${relativePath}`);
      console.error(error.message);
    }
  }

  console.log("\nDone.");
}

optimize();