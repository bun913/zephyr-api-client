import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Testcycles via ZephyrV2Client", () => {
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

    (client.testcycles.instance as AxiosInstance).request = mockRequest;
  });

  describe("listTestCycles", () => {
    it("should request with all query parameters", async () => {
      await client.testcycles.listTestCycles({
        projectKey: "TEST",
        folderId: 123,
        jiraProjectVersionId: 456,
        maxResults: 50,
        startAt: 10,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcycles",
          params: {
            projectKey: "TEST",
            folderId: 123,
            jiraProjectVersionId: 456,
            maxResults: 50,
            startAt: 10,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request without query parameters", async () => {
      await client.testcycles.listTestCycles();

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcycles",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request with only projectKey", async () => {
      await client.testcycles.listTestCycles({ projectKey: "PROJ" });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          params: { projectKey: "PROJ" },
        })
      );
    });
  });

  describe("createTestCycle", () => {
    it("should request POST with test cycle data", async () => {
      const testCycleData = {
        projectKey: "TEST",
        name: "Test Cycle Name",
      };

      await client.testcycles.createTestCycle(testCycleData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testcycles",
          data: testCycleData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestCycle", () => {
    it("should request GET with testCycleIdOrKey", async () => {
      await client.testcycles.getTestCycle("TEST-C1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcycles/TEST-C1",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("updateTestCycle", () => {
    it("should request PUT with testCycleIdOrKey and data", async () => {
      const updateData = {
        id: 1,
        key: "TEST-C1",
        name: "Updated Cycle",
        project: { id: 10000, key: "TEST" },
        status: { id: 1, name: "Done" },
      };

      await client.testcycles.updateTestCycle("TEST-C1", updateData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "PUT",
          url: "/testcycles/TEST-C1",
          data: updateData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestCycleLinks", () => {
    it("should request GET with testCycleIdOrKey", async () => {
      await client.testcycles.getTestCycleLinks("TEST-C1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcycles/TEST-C1/links",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestCycleIssueLink", () => {
    it("should request POST with issue link data", async () => {
      const linkData = { issueId: 10001 };

      await client.testcycles.createTestCycleIssueLink("TEST-C1", linkData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testcycles/TEST-C1/links/issues",
          data: linkData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestCycleWebLink", () => {
    it("should request POST with web link data", async () => {
      const linkData = { url: "https://example.com" };

      await client.testcycles.createTestCycleWebLink("TEST-C1", linkData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testcycles/TEST-C1/links/weblinks",
          data: linkData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });
});
