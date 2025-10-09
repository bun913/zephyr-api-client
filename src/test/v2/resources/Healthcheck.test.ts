import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Healthcheck via ZephyrV2Client", () => {
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

    (client.healthcheck.instance as AxiosInstance).request = mockRequest;
  });

  describe("healthcheck", () => {
    it("should request GET to healthcheck endpoint", async () => {
      await client.healthcheck.healthcheck();

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/healthcheck",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });
});
