import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Testplans via ZephyrV2Client", () => {
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

    (client.testplans.instance as AxiosInstance).request = mockRequest;
  });

  describe("listTestPlans", () => {
    it("should request with all query parameters", async () => {
      await client.testplans.listTestPlans({
        projectKey: "TEST",
        maxResults: 50,
        startAt: 10,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testplans",
          params: {
            projectKey: "TEST",
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
      await client.testplans.listTestPlans();

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testplans",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestPlan", () => {
    it("should request POST with test plan data", async () => {
      const testPlanData = {
        projectKey: "TEST",
        name: "Test Plan Name",
      };

      await client.testplans.createTestPlan(testPlanData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testplans",
          data: testPlanData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestPlan", () => {
    it("should request GET with testPlanIdOrKey", async () => {
      await client.testplans.getTestPlan("TEST-P1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testplans/TEST-P1",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestPlanWebLink", () => {
    it("should request POST with web link data", async () => {
      const linkData = {
        url: "https://example.com",
        description: "Example link",
      };

      await client.testplans.createTestPlanWebLink("TEST-P1", linkData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testplans/TEST-P1/links/weblinks",
          data: linkData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestPlanIssueLink", () => {
    it("should request POST with issue link data", async () => {
      const linkData = { issueId: 10001 };

      await client.testplans.createTestPlanIssueLink("TEST-P1", linkData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testplans/TEST-P1/links/issues",
          data: linkData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestPlanTestCycleLink", () => {
    it("should request POST with test cycle link data", async () => {
      const linkData = { testCycleIdOrKey: "TEST-R1" };

      await client.testplans.createTestPlanTestCycleLink("TEST-P1", linkData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testplans/TEST-P1/links/testcycles",
          data: linkData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });
});
