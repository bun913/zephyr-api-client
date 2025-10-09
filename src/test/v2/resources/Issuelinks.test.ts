import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Issuelinks via ZephyrV2Client", () => {
	let client: ZephyrV2Client;
	let mockRequest: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		client = new ZephyrV2Client({ apiToken: "test-token" });

		mockRequest = vi.fn().mockResolvedValue({
			data: { success: true },
			status: 200,
			statusText: "OK",
			headers: {},
			config: {},
		});

		(client.issuelinks.instance as AxiosInstance).request = mockRequest;
	});

	describe("getIssueLinkTestCases", () => {
		it("should request GET with issueKey", async () => {
			await client.issuelinks.getIssueLinkTestCases("PROJ-123");

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/issuelinks/PROJ-123/testcases",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("getIssueLinkTestCycles", () => {
		it("should request GET with issueKey", async () => {
			await client.issuelinks.getIssueLinkTestCycles("PROJ-456");

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/issuelinks/PROJ-456/testcycles",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("getIssueLinkTestPlans", () => {
		it("should request GET with issueKey", async () => {
			await client.issuelinks.getIssueLinkTestPlans("PROJ-789");

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/issuelinks/PROJ-789/testplans",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("getIssueLinkTestExecutions", () => {
		it("should request GET with issueKey", async () => {
			await client.issuelinks.getIssueLinkTestExecutions("PROJ-999");

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/issuelinks/PROJ-999/executions",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});
});
