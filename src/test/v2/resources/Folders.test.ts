import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Folders via ZephyrV2Client", () => {
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

		(client.folders.instance as AxiosInstance).request = mockRequest;
	});

	describe("listFolders", () => {
		it("should request with all query parameters", async () => {
			await client.folders.listFolders({
				maxResults: 100,
				startAt: 50,
				projectKey: "TEST",
				folderType: "TEST_CASE",
			});

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/folders",
					params: {
						maxResults: 100,
						startAt: 50,
						projectKey: "TEST",
						folderType: "TEST_CASE",
					},
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request without query parameters", async () => {
			await client.folders.listFolders();

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/folders",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request with only projectKey", async () => {
			await client.folders.listFolders({ projectKey: "PROJ" });

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/folders",
					params: { projectKey: "PROJ" },
				}),
			);
		});

		it("should request with folderType TEST_CYCLE", async () => {
			await client.folders.listFolders({ folderType: "TEST_CYCLE" });

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					params: { folderType: "TEST_CYCLE" },
				}),
			);
		});
	});

	describe("createFolder", () => {
		it("should request POST with folder data", async () => {
			const folderData = {
				projectKey: "TEST",
				name: "/folder/subfolder",
				folderType: "TEST_CASE" as const,
			};

			await client.folders.createFolder(folderData);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "POST",
					url: "/folders",
					data: folderData,
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});

	describe("getFolder", () => {
		it("should request GET with folderId", async () => {
			await client.folders.getFolder(12345);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "GET",
					url: "/folders/12345",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});
});
