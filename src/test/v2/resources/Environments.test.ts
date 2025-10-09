import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Environments via ZephyrV2Client", () => {
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

		(client.environments.instance as AxiosInstance).request = mockRequest;
	});

	describe("listEnvironments", () => {
		it("should request with all query parameters", async () => {
			await client.environments.listEnvironments({
				projectKey: "TEST",
				maxResults: 100,
				startAt: 10,
			});

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/environments",
					params: {
						projectKey: "TEST",
						maxResults: 100,
						startAt: 10,
					},
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request without query parameters", async () => {
			await client.environments.listEnvironments();

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/environments",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request with only projectKey", async () => {
			await client.environments.listEnvironments({ projectKey: "PROJ" });

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					params: { projectKey: "PROJ" },
				}),
			);
		});
	});

	describe("createEnvironment", () => {
		it("should request POST with all fields", async () => {
			const environmentData = {
				projectKey: "TEST",
				name: "Production",
				description: "Production environment",
			};

			await client.environments.createEnvironment(environmentData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "POST",
					url: "/environments",
					data: environmentData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request POST with only required fields", async () => {
			const environmentData = {
				projectKey: "TEST",
				name: "Staging",
			};

			await client.environments.createEnvironment(environmentData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "POST",
					url: "/environments",
					data: environmentData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("getEnvironment", () => {
		it("should request GET with environmentId", async () => {
			await client.environments.getEnvironment(789);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/environments/789",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("updateEnvironment", () => {
		it("should request PUT with all fields", async () => {
			const updateData = {
				id: 789,
				project: { id: 10000, key: "TEST" },
				name: "Updated Environment",
				description: "Updated description",
				index: 2,
			};

			await client.environments.updateEnvironment(789, updateData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "PUT",
					url: "/environments/789",
					data: updateData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request PUT without optional description", async () => {
			const updateData = {
				id: 789,
				project: { id: 10000, key: "TEST" },
				name: "Updated Environment",
				index: 1,
			};

			await client.environments.updateEnvironment(789, updateData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "PUT",
					url: "/environments/789",
					data: updateData,
				}),
			);
		});
	});
});
