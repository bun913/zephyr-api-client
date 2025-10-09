import { describe, it, expect, beforeEach, vi } from "vitest";
import { ZephyrV2Client } from "../../../v2/client";
import type { AxiosInstance } from "axios";

describe("Automations via ZephyrV2Client", () => {
  let client: ZephyrV2Client;
  let mockRequest: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    client = new ZephyrV2Client({ apiToken: "test-token" });

    // Mock the axios instance's request method
    mockRequest = vi.fn().mockResolvedValue({
      data: { success: true },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    });

    (client.automations.instance as AxiosInstance).request = mockRequest;
  });

  describe("createJUnitExecutions", () => {
    it("should request with all parameters including optional ones", async () => {
      await client.automations.createJUnitExecutions(
        {
          projectKey: "TEST",
          autoCreateTestCases: true,
        },
        {
          file: new File(["test"], "test.xml"),
          testCycle: { name: "Test Cycle" },
        }
      );

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/automations/executions/junit",
          params: {
            projectKey: "TEST",
            autoCreateTestCases: true,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request with only required parameters", async () => {
      await client.automations.createJUnitExecutions(
        { projectKey: "MIN" },
        { file: new File(["test"], "test.xml") }
      );

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/automations/executions/junit",
          params: { projectKey: "MIN" },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });

    it("should request with autoCreateTestCases = false", async () => {
      await client.automations.createJUnitExecutions(
        { projectKey: "TEST", autoCreateTestCases: false },
        { file: new File(["test"], "test.xml") }
      );

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          params: {
            projectKey: "TEST",
            autoCreateTestCases: false,
          },
        })
      );
    });
  });

  describe("createCucumberExecutions", () => {
    it("should request with all parameters", async () => {
      await client.automations.createCucumberExecutions(
        { projectKey: "CUCUMBER", autoCreateTestCases: true },
        { file: new File(["test"], "test.feature") }
      );

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/automations/executions/cucumber",
          params: {
            projectKey: "CUCUMBER",
            autoCreateTestCases: true,
          },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("createCustomExecutions", () => {
    it("should request with required parameters", async () => {
      await client.automations.createCustomExecutions(
        { projectKey: "CUSTOM" },
        { file: new File(["test"], "custom.json") }
      );

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          url: "/automations/executions/custom",
          params: { projectKey: "CUSTOM" },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });

  describe("retrieveBddTestCases", () => {
    it("should request GET with project key", async () => {
      await client.automations.retrieveBddTestCases({ projectKey: "BDD" });

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "GET",
          url: "/automations/testcases",
          params: { projectKey: "BDD" },
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        })
      );
    });
  });
});
