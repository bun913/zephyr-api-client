import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Projects via ZephyrV2Client", () => {
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

		(client.projects.instance as AxiosInstance).request = mockRequest;
	});

	describe("listProjects", () => {
		it("should request with all query parameters", async () => {
			await client.projects.listProjects({
				maxResults: 100,
				startAt: 50,
			});

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/projects",
					params: {
						maxResults: 100,
						startAt: 50,
					},
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request without query parameters", async () => {
			await client.projects.listProjects();

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/projects",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request with only maxResults", async () => {
			await client.projects.listProjects({ maxResults: 20 });

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					params: { maxResults: 20 },
				}),
			);
		});
	});

	describe("getProject", () => {
		it("should request GET with projectIdOrKey", async () => {
			await client.projects.getProject("TEST");

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/projects/TEST",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request GET with numeric project ID", async () => {
			await client.projects.getProject("10000");

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/projects/10000",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});
});
