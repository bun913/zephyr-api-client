/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CursorPagedTestExecutionList,
  Error,
  IssueLinkInput,
  Link,
  TestExecution,
  TestExecutionImmutableError,
  TestExecutionInput,
  TestExecutionLinkList,
  TestExecutionList,
  TestExecutionTestStepsList,
  TestExecutionUpdate,
  TestResultNotFoundOrUserAccessError,
  TestStepNumberMismatchUnprocessableError,
  TestStepsUpdate,
  TestStepTestDataUnprocessableError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Testexecutions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all test executions. Query parameters can be used to filter by project and folder.
   *
   * @tags Test Executions
   * @name ListTestExecutions
   * @summary Get test executions
   * @request GET:/testexecutions
   * @secure
   */
  listTestExecutions = (
    query?: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey?: string;
      /**
       * Test cycle key filter.
       * @pattern ([A-Z][A-Z_0-9]+-R[0-9]+)
       */
      testCycle?: string;
      /**
       * Test case key filter.
       * @pattern ([0-9]+)|(.+-T[0-9]+)
       */
      testCase?: string;
      /**
       * Filter for 'Actual End Date' after the given time. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
       * @format date-time
       */
      actualEndDateAfter?: string;
      /**
       * Filter for 'Actual End Date' before the given time. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
       * @format date-time
       */
      actualEndDateBefore?: string;
      /**
       * If true, execution step issue links will be included in the response
       * @default false
       */
      includeStepLinks?: boolean;
      /**
       * Jira Project Version ID. Relates to 'Version' or 'Releases' in Jira projects.
       * @format int64
       * @min 1
       */
      jiraProjectVersionId?: number;
      /**
       * If true, includes only the last execution of each test cycle item (test case), and all ad-hoc test executions.
       * @default false
       */
      onlyLastExecutions?: boolean;
      /**
       * Specifies the maximum number of results to return in a single call. The default value is 10, and the maximum value that can be requested is 1000.
       *
       * Note that the server may enforce a lower limit than requested, depending on resource availability or other internal constraints. If this happens, the result set may be truncated. Always check the maxResults value in the response to confirm how many results were actually returned.
       * @format int64
       * @min 1
       * @default 10
       */
      maxResults?: number;
      /**
       * Zero-indexed starting position. Should be a multiple of maxResults.
       * @format int64
       * @min 0
       * @max 1000000
       * @default 0
       */
      startAt?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TestExecutionList, Error>({
      path: `/testexecutions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a test execution. All required test execution custom fields should be present in the request.
   *
   * @tags Test Executions
   * @name CreateTestExecution
   * @summary Create test execution
   * @request POST:/testexecutions
   * @secure
   */
  createTestExecution = (
    data: TestExecutionInput,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/testexecutions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Retrieves all test executions. Query parameters can be used to filter the results. Use this endpoint for retrieving large volumes of test executions. Results are split into separate pages, each of the same size as the `limit` query parameter. To fetch the next page, use the `next` URL returned in the response. It should have the same parameters as the original request, with the updated value for `startAtId` parameter. Alternatively, the same request can be made with the `startAtId` parameter set to the `nextStartId` value returned in the response.
   *
   * @tags Test Executions
   * @name ListTestExecutionsNextgen
   * @summary Get test executions (NextGen)
   * @request GET:/testexecutions/nextgen
   * @secure
   */
  listTestExecutionsNextgen = (
    query?: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey?: string;
      /**
       * Test cycle key filter.
       * @pattern ([A-Z][A-Z_0-9]+-R[0-9]+)
       */
      testCycle?: string;
      /**
       * Test case key filter.
       * @pattern ([0-9]+)|(.+-T[0-9]+)
       */
      testCase?: string;
      /**
       * Filter for 'Actual End Date' after the given time. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
       * @format date-time
       */
      actualEndDateAfter?: string;
      /**
       * Filter for 'Actual End Date' before the given time. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
       * @format date-time
       */
      actualEndDateBefore?: string;
      /**
       * If true, execution step issue links will be included in the response
       * @default false
       */
      includeStepLinks?: boolean;
      /**
       * Jira Project Version ID. Relates to 'Version' or 'Releases' in Jira projects.
       * @format int64
       * @min 1
       */
      jiraProjectVersionId?: number;
      /**
       * If true, includes only the last execution of each test cycle item (test case), and all ad-hoc test executions.
       * @default false
       */
      onlyLastExecutions?: boolean;
      /**
       * Specifies the maximum number of results to return in a single call. The default value is 10, and the maximum value that can be requested is 1000.
       *
       * Note that the server may enforce a lower limit than requested, depending on resource availability or other internal constraints. If this happens, the result set may be truncated. Always check the limit value in the response to confirm how many results were actually returned.
       * @format int64
       * @min 1
       * @max 1000
       * @default 10
       */
      limit?: number;
      /**
       * Zero-indexed starting position for ID-based pagination.
       * @format int64
       * @min 0
       * @default 0
       */
      startAtId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CursorPagedTestExecutionList, Error>({
      path: `/testexecutions/nextgen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a test execution for the given ID.
   *
   * @tags Test Executions
   * @name GetTestExecution
   * @summary Get test execution
   * @request GET:/testexecutions/{testExecutionIdOrKey}
   * @secure
   */
  getTestExecution = (
    testExecutionIdOrKey: string,
    query?: {
      /**
       * If true, execution step issue links will be included in the response
       * @default false
       */
      includeStepLinks?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TestExecution, Error>({
      path: `/testexecutions/${testExecutionIdOrKey}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update the test execution.
   *
   * @tags Test Executions
   * @name UpdateTestExecution
   * @summary Update test execution
   * @request PUT:/testexecutions/{testExecutionIdOrKey}
   * @secure
   */
  updateTestExecution = (
    testExecutionIdOrKey: string,
    data: TestExecutionUpdate,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/testexecutions/${testExecutionIdOrKey}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns the test steps for the given test execution. Provides a paged response.
   *
   * @tags Test Executions
   * @name GetTestExecutionTestSteps
   * @summary Get test steps
   * @request GET:/testexecutions/{testExecutionIdOrKey}/teststeps
   * @secure
   */
  getTestExecutionTestSteps = (
    testExecutionIdOrKey: string,
    query?: {
      /**
       * Specifies the maximum number of results to return in a single call. The default value is 10, and the maximum value that can be requested is 1000.
       *
       * Note that the server may enforce a lower limit than requested, depending on resource availability or other internal constraints. If this happens, the result set may be truncated. Always check the maxResults value in the response to confirm how many results were actually returned.
       * @format int64
       * @min 1
       * @default 10
       */
      maxResults?: number;
      /**
       * Zero-indexed starting position. Should be a multiple of maxResults.
       * @format int64
       * @min 0
       * @max 1000000
       * @default 0
       */
      startAt?: number;
      /**
       * The id of the test data row to retrieve.
       * @format int64
       * @min 0
       */
      testDataRowNumber?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TestExecutionTestStepsList, any>({
      path: `/testexecutions/${testExecutionIdOrKey}/teststeps`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the test steps for the given test execution.
   *
   * @tags Test Executions
   * @name PutTestExecutionTestSteps
   * @summary Update test steps
   * @request PUT:/testexecutions/{testExecutionIdOrKey}/teststeps
   * @secure
   */
  putTestExecutionTestSteps = (
    testExecutionIdOrKey: string,
    data: TestStepsUpdate,
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      | TestResultNotFoundOrUserAccessError
      | TestExecutionImmutableError
      | (
          | TestStepNumberMismatchUnprocessableError
          | TestStepTestDataUnprocessableError
        )
      | Error
    >({
      path: `/testexecutions/${testExecutionIdOrKey}/teststeps`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Sync test execution with content of test case script
   *
   * @tags Test Executions
   * @name SyncTestExecutionScript
   * @summary Sync test execution
   * @request POST:/testexecutions/{testExecutionIdOrKey}/teststeps/sync
   * @secure
   */
  syncTestExecutionScript = (
    testExecutionIdOrKey: string,
    params: RequestParams = {},
  ) =>
    this.request<
      Link,
      TestResultNotFoundOrUserAccessError | TestExecutionImmutableError | Error
    >({
      path: `/testexecutions/${testExecutionIdOrKey}/teststeps/sync`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns links for a test execution with specified ID.
   *
   * @tags Test Executions
   * @name ListTestExecutionLinks
   * @summary Get links
   * @request GET:/testexecutions/{testExecutionIdOrKey}/links
   * @secure
   */
  listTestExecutionLinks = (
    testExecutionIdOrKey: string,
    params: RequestParams = {},
  ) =>
    this.request<TestExecutionLinkList, Error>({
      path: `/testexecutions/${testExecutionIdOrKey}/links`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a link between a test execution and a Jira issue.
   *
   * @tags Test Executions
   * @name CreateTestExecutionIssueLink
   * @summary Create issue link
   * @request POST:/testexecutions/{testExecutionIdOrKey}/links/issues
   * @secure
   */
  createTestExecutionIssueLink = (
    testExecutionIdOrKey: string,
    data: IssueLinkInput,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/testexecutions/${testExecutionIdOrKey}/links/issues`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
