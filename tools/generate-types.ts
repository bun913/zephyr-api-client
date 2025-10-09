/**
 * Type Generation Script
 *
 * Downloads OpenAPI spec and generates TypeScript API client code.
 */

import { generateApi } from "swagger-typescript-api";
import * as path from "node:path";
import * as fs from "node:fs/promises";
import axios from "axios";

const OPENAPI_SPEC_URL =
  "https://support.smartbear.com/zephyr-scale-cloud/api-docs/api.cloud.expanded.yml";
const OUTPUT_DIR = path.resolve(process.cwd(), "src/v2/resources");
const TEMP_SPEC_FILE = path.resolve(process.cwd(), ".tmp-api-spec.yml");

async function downloadSpec(): Promise<void> {
  console.log("Downloading OpenAPI spec...");
  const response = await axios.get(OPENAPI_SPEC_URL, { responseType: "text" });
  await fs.writeFile(TEMP_SPEC_FILE, response.data, "utf-8");
}

async function cleanupTempFile(): Promise<void> {
  try {
    await fs.unlink(TEMP_SPEC_FILE);
  } catch {
    // Ignore if file doesn't exist
  }
}

async function generateTypes() {
  console.log("Starting type generation...");

  try {
    await downloadSpec();

    await generateApi({
      input: TEMP_SPEC_FILE,
      output: OUTPUT_DIR,
      httpClientType: "axios",
      modular: true,
      silent: false,
    });

    await cleanupTempFile();
    console.log("Type generation completed successfully");
  } catch (error) {
    await cleanupTempFile();
    console.error("Type generation failed:", error);
    process.exit(1);
  }
}

generateTypes();
