import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Testexecutions via ZephyrV2Client", () => {
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

    (client.testexecutions.instance as AxiosInstance).request = mockRequest;
  });

  describe("listTestExecutions", () => {
    it("should request with all query parameters", async () => {
      await client.testexecutions.listTestExecutions({
        projectKey: "TEST",
        testCycle: "TEST-R1",
        testCase: "TEST-T1",
        actualEndDateAfter: "2025-01-01T00:00:00Z",
        actualEndDateBefore: "2025-12-31T23:59:59Z",
        includeStepLinks: true,
        jiraProjectVersionId: 100,
        onlyLastExecutions: true,
        maxResults: 100,
        startAt: 50,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testexecutions",
          params: {
            projectKey: "TEST",
            testCycle: "TEST-R1",
            testCase: "TEST-T1",
            actualEndDateAfter: "2025-01-01T00:00:00Z",
            actualEndDateBefore: "2025-12-31T23:59:59Z",
            includeStepLinks: true,
            jiraProjectVersionId: 100,
            onlyLastExecutions: true,
            maxResults: 100,
            startAt: 50,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request without query parameters", async () => {
      await client.testexecutions.listTestExecutions();

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testexecutions",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request with boolean flags", async () => {
      await client.testexecutions.listTestExecutions({
        includeStepLinks: false,
        onlyLastExecutions: false,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          params: {
            includeStepLinks: false,
            onlyLastExecutions: false,
          },
        })
      );
    });
  });

  describe("createTestExecution", () => {
    it("should request POST with test execution data", async () => {
      const executionData = {
        projectKey: "TEST",
        testCaseKey: "TEST-T1",
        testCycleKey: "TEST-R1",
        statusName: "Pass",
      };

      await client.testexecutions.createTestExecution(executionData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testexecutions",
          data: executionData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestExecution", () => {
    it("should request GET with testExecutionIdOrKey", async () => {
      await client.testexecutions.getTestExecution("TEST-E1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testexecutions/TEST-E1",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request with includeStepLinks parameter", async () => {
      await client.testexecutions.getTestExecution("TEST-E1", {
        includeStepLinks: true,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testexecutions/TEST-E1",
          params: { includeStepLinks: true },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("updateTestExecution", () => {
    it("should request PUT with data", async () => {
      const updateData = { statusName: "Pass" };

      await client.testexecutions.updateTestExecution("TEST-E1", updateData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "PUT",
          url: "/testexecutions/TEST-E1",
          data: updateData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("listTestExecutionsNextgen", () => {
    it("should request with all pagination parameters", async () => {
      await client.testexecutions.listTestExecutionsNextgen({
        projectKey: "TEST",
        testCycle: "TEST-R1",
        limit: 500,
        startAtId: 1000,
        includeStepLinks: true,
        onlyLastExecutions: true,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testexecutions/nextgen",
          params: {
            projectKey: "TEST",
            testCycle: "TEST-R1",
            limit: 500,
            startAtId: 1000,
            includeStepLinks: true,
            onlyLastExecutions: true,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("getTestExecutionTestSteps", () => {
    it("should request with pagination and testDataRowNumber", async () => {
      await client.testexecutions.getTestExecutionTestSteps("TEST-E1", {
        maxResults: 20,
        startAt: 5,
        testDataRowNumber: 3,
      });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testexecutions/TEST-E1/teststeps",
          params: {
            maxResults: 20,
            startAt: 5,
            testDataRowNumber: 3,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("putTestExecutionTestSteps", () => {
    it("should request PUT with test steps data", async () => {
      const stepsData = { steps: [] };

      await client.testexecutions.putTestExecutionTestSteps("TEST-E1", stepsData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "PUT",
          url: "/testexecutions/TEST-E1/teststeps",
          data: stepsData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("syncTestExecutionScript", () => {
    it("should request POST to sync endpoint", async () => {
      await client.testexecutions.syncTestExecutionScript("TEST-E1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testexecutions/TEST-E1/teststeps/sync",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("listTestExecutionLinks", () => {
    it("should request GET for links", async () => {
      await client.testexecutions.listTestExecutionLinks("TEST-E1");

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/testexecutions/TEST-E1/links",
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createTestExecutionIssueLink", () => {
    it("should request POST with issue link data", async () => {
      const linkData = { issueId: 10001 };

      await client.testexecutions.createTestExecutionIssueLink("TEST-E1", linkData);

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/testexecutions/TEST-E1/links/issues",
          data: linkData,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });
});
