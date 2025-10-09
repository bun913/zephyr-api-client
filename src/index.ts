/**
 * Zephyr API Client Library
 *
 * Provides access to Zephyr Scale API (Cloud version).
 */

// Export v2 Client (Cloud API)
export { ZephyrV2Client, type ZephyrV2ClientConfig } from "./v2/client.js";

// Re-export common types from v2
export type * from "./v2/resources/data-contracts.js";

/**
 * Default export for convenience
 * @example
 * ```typescript
 * import { ZephyrV2Client } from 'zephyr-api-client';
 *
 * const client = new ZephyrV2Client({
 *   apiToken: 'your-api-token'
 * });
 *
 * const testCases = await client.testcases.listTestCases({
 *   projectKey: 'YOUR_PROJECT'
 * });
 * ```
 */
export { ZephyrV2Client as default } from "./v2/client.js";
