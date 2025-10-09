import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Priorities via ZephyrV2Client", () => {
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

		(client.priorities.instance as AxiosInstance).request = mockRequest;
	});

	describe("listPriorities", () => {
		it("should request with all query parameters", async () => {
			await client.priorities.listPriorities({
				maxResults: 100,
				startAt: 10,
				projectKey: "TEST",
			});

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/priorities",
					params: {
						maxResults: 100,
						startAt: 10,
						projectKey: "TEST",
					},
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request without query parameters", async () => {
			await client.priorities.listPriorities();

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/priorities",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request with only projectKey", async () => {
			await client.priorities.listPriorities({ projectKey: "PROJ" });

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					params: { projectKey: "PROJ" },
				}),
			);
		});
	});

	describe("createPriority", () => {
		it("should request POST with all fields", async () => {
			const priorityData = {
				projectKey: "TEST",
				name: "Critical",
				description: "Critical priority",
				color: "#FF0000",
			};

			await client.priorities.createPriority(priorityData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "POST",
					url: "/priorities",
					data: priorityData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request POST with only required fields", async () => {
			const priorityData = {
				projectKey: "TEST",
				name: "Normal",
			};

			await client.priorities.createPriority(priorityData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "POST",
					url: "/priorities",
					data: priorityData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("getPriority", () => {
		it("should request GET with priorityId", async () => {
			await client.priorities.getPriority(123);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/priorities/123",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("updatePriority", () => {
		it("should request PUT with all fields", async () => {
			const updateData = {
				id: 123,
				project: { id: 10000, key: "TEST" },
				name: "Updated Priority",
				description: "Updated description",
				index: 5,
				default: false,
				color: "#00FF00",
			};

			await client.priorities.updatePriority(123, updateData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "PUT",
					url: "/priorities/123",
					data: updateData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request PUT without optional fields", async () => {
			const updateData = {
				id: 123,
				project: { id: 10000, key: "TEST" },
				name: "Updated Priority",
				index: 1,
				default: true,
			};

			await client.priorities.updatePriority(123, updateData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "PUT",
					url: "/priorities/123",
					data: updateData,
				}),
			);
		});
	});
});
