import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Statuses via ZephyrV2Client", () => {
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

		(client.statuses.instance as AxiosInstance).request = mockRequest;
	});

	describe("listStatuses", () => {
		it("should request with all query parameters", async () => {
			await client.statuses.listStatuses({
				maxResults: 100,
				startAt: 10,
				projectKey: "TEST",
				statusType: "TEST_CASE",
			});

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/statuses",
					params: {
						maxResults: 100,
						startAt: 10,
						projectKey: "TEST",
						statusType: "TEST_CASE",
					},
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request without query parameters", async () => {
			await client.statuses.listStatuses();

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/statuses",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request with statusType TEST_EXECUTION", async () => {
			await client.statuses.listStatuses({ statusType: "TEST_EXECUTION" });

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					params: { statusType: "TEST_EXECUTION" },
				}),
			);
		});
	});

	describe("createStatus", () => {
		it("should request POST with all fields", async () => {
			const statusData = {
				projectKey: "TEST",
				name: "In Progress",
				type: "TEST_CASE" as const,
				description: "Work in progress",
				color: "#FFFF00",
			};

			await client.statuses.createStatus(statusData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "POST",
					url: "/statuses",
					data: statusData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request POST with only required fields", async () => {
			const statusData = {
				projectKey: "TEST",
				name: "Done",
				type: "TEST_EXECUTION" as const,
			};

			await client.statuses.createStatus(statusData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "POST",
					url: "/statuses",
					data: statusData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("getStatus", () => {
		it("should request GET with statusId", async () => {
			await client.statuses.getStatus(456);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/statuses/456",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("updateStatus", () => {
		it("should request PUT with all fields", async () => {
			const updateData = {
				id: 456,
				project: { id: 10000, key: "TEST" },
				name: "Updated Status",
				description: "Updated description",
				index: 3,
				archived: false,
				default: false,
				color: "#0000FF",
			};

			await client.statuses.updateStatus(456, updateData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "PUT",
					url: "/statuses/456",
					data: updateData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request PUT without optional fields", async () => {
			const updateData = {
				id: 456,
				project: { id: 10000, key: "TEST" },
				name: "Updated Status",
				index: 1,
				archived: true,
				default: false,
			};

			await client.statuses.updateStatus(456, updateData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "PUT",
					url: "/statuses/456",
					data: updateData,
				}),
			);
		});
	});
});
