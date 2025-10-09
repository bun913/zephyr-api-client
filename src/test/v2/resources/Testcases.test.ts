import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Testcases via ZephyrV2Client", () => {
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

    (client.testcases.instance as AxiosInstance).request = mockRequest;
  });

  describe("listTestCases", () => {
    it("should request with all query parameters", async () => {
      await client.testcases.listTestCases({
        projectKey: "TEST",
        folderId: 123,
        maxResults: 50,
        startAt: 0,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases",
          params: {
            projectKey: "TEST",
            folderId: 123,
            maxResults: 50,
            startAt: 0,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request without query parameters", async () => {
      await client.testcases.listTestCases();

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request with only projectKey", async () => {
      await client.testcases.listTestCases({ projectKey: "PROJ" });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          params: { projectKey: "PROJ" },
        })
      );
    });
  });

  describe("createTestCase", () => {
    it("should request POST with test case data", async () => {
      const testCaseData = {
        projectKey: "TEST",
        name: "Test Case Name",
      };

      await client.testcases.createTestCase(testCaseData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testcases",
          data: testCaseData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestCase", () => {
    it("should request GET with testCaseKey", async () => {
      await client.testcases.getTestCase("TEST-T1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases/TEST-T1",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("updateTestCase", () => {
    it("should request PUT with testCaseKey and data", async () => {
      const updateData = {
        id: 1,
        key: "TEST-T1",
        name: "Updated Name",
        project: { id: 10000, key: "TEST" },
        priority: { id: 1, name: "Normal" },
        status: { id: 1, name: "Draft" },
      };

      await client.testcases.updateTestCase("TEST-T1", updateData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "PUT",
          url: "/testcases/TEST-T1",
          data: updateData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("listTestCasesCursorPaginated", () => {
    it("should request with all pagination parameters", async () => {
      await client.testcases.listTestCasesCursorPaginated({
        projectKey: "TEST",
        folderId: 456,
        limit: 100,
        startAtId: 1000,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases/nextgen",
          params: {
            projectKey: "TEST",
            folderId: 456,
            limit: 100,
            startAtId: 1000,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("listTestCaseVersions", () => {
    it("should request with testCaseKey and pagination params", async () => {
      await client.testcases.listTestCaseVersions("TEST-T1", {
        maxResults: 20,
        startAt: 10,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases/TEST-T1/versions",
          params: {
            maxResults: 20,
            startAt: 10,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestCaseVersion", () => {
    it("should request with testCaseKey and version number", async () => {
      await client.testcases.getTestCaseVersion("TEST-T1", 5);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases/TEST-T1/versions/5",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestCaseLinks", () => {
    it("should request GET for test case links", async () => {
      await client.testcases.getTestCaseLinks("TEST-T1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases/TEST-T1/links",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestCaseIssueLink", () => {
    it("should request POST with issue link data", async () => {
      const linkData = { issueId: 10001 };

      await client.testcases.createTestCaseIssueLink("TEST-T1", linkData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testcases/TEST-T1/links/issues",
          data: linkData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestCaseWebLink", () => {
    it("should request POST with web link data", async () => {
      const linkData = { url: "https://example.com" };

      await client.testcases.createTestCaseWebLink("TEST-T1", linkData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testcases/TEST-T1/links/weblinks",
          data: linkData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestCaseTestScript", () => {
    it("should request GET for test script", async () => {
      await client.testcases.getTestCaseTestScript("TEST-T1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases/TEST-T1/testscript",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestCaseTestScript", () => {
    it("should request POST with test script data", async () => {
      const scriptData = { type: "PLAIN_TEXT", text: "Test script" };

      await client.testcases.createTestCaseTestScript("TEST-T1", scriptData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testcases/TEST-T1/testscript",
          data: scriptData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestCaseTestSteps", () => {
    it("should request GET with pagination params", async () => {
      await client.testcases.getTestCaseTestSteps("TEST-T1", {
        maxResults: 50,
        startAt: 10,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testcases/TEST-T1/teststeps",
          params: {
            maxResults: 50,
            startAt: 10,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestCaseTestSteps", () => {
    it("should request POST with test steps data", async () => {
      const stepsData = { mode: "OVERWRITE", items: [] };

      await client.testcases.createTestCaseTestSteps("TEST-T1", stepsData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testcases/TEST-T1/teststeps",
          data: stepsData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });
});
