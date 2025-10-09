import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Links via ZephyrV2Client", () => {
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

		(client.links.instance as AxiosInstance).request = mockRequest;
	});

	describe("deleteLink", () => {
		it("should request DELETE with linkId", async () => {
			await client.links.deleteLink(12345);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "DELETE",
					url: "/links/12345",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});

		it("should request DELETE with different linkId", async () => {
			await client.links.deleteLink(99999);

			expect(mockRequest).toHaveBeenCalledWith(
				expect.objectContaining({
					method: "DELETE",
					url: "/links/99999",
					headers: expect.objectContaining({
						Authorization: "Bearer test-token",
					}),
				}),
			);
		});
	});
});
