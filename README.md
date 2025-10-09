# Zephyr Scale API Client

A TypeScript client for Zephyr Scale Cloud API v2.

## Purpose

This project aims to prevent reinventing the wheel by providing a ready-to-use, well-tested API client for Zephyr Scale. No need to write your own client for every project.

## Features

- **Auto-generated from OpenAPI Specification**: Types and client code are generated from the official Zephyr Scale API specification
- **Type-safe**: Full TypeScript support with comprehensive type definitions
- **Well-tested**: 93+ unit tests with 98%+ coverage
- **Always up-to-date**: Automated weekly checks for API changes via GitHub Actions

## Installation

```bash
npm install zephyr-api-client
```

## Usage

```typescript
import { ZephyrV2Client } from 'zephyr-api-client';

// Initialize the client
const client = new ZephyrV2Client({
  apiToken: 'your-zephyr-api-token'
});

// Get test cases
const testCases = await client.testcases.listTestCases({
  projectKey: 'YOUR_PROJECT',
  maxResults: 50
});

console.log(testCases.data.values);

// Create a folder
await client.folders.createFolder({
  projectKey: 'YOUR_PROJECT',
  name: '/folder/subfolder',
  folderType: 'TEST_CASE'
});

// Create a test case
await client.testcases.createTestCase({
  projectKey: 'YOUR_PROJECT',
  name: 'My Test Case'
});
```

## API Token

To use this client, you need a Zephyr Scale API token:

1. In Jira, click your profile picture
2. Select "Zephyr API keys"
3. Generate a new API key

For more information, see the [Zephyr Scale documentation](https://support.smartbear.com/zephyr-scale-cloud/docs/en/rest-api/api-access-tokens-management.html).

## Available Resources

All Zephyr Scale API v2 resources are supported:

- `client.automations` - Test automation executions
- `client.testcases` - Test case management
- `client.testcycles` - Test cycle management
- `client.testexecutions` - Test execution management
- `client.testplans` - Test plan management
- `client.folders` - Folder management
- `client.projects` - Project information
- `client.priorities` - Priority management
- `client.statuses` - Status management
- `client.environments` - Environment management
- `client.links` - Link management
- `client.issuelinks` - Issue link queries
- `client.healthcheck` - API health check

## Development

### Generate Types from OpenAPI Spec

```bash
npm run generate
```

This downloads the latest OpenAPI specification from Zephyr Scale and regenerates the TypeScript client code.

### Run Tests

```bash
npm run test
npm run test:ci
```

### Build

```bash
npm run build
```

### Lint & Format

```bash
npm run lint
npm run format
```

## License

MIT
