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
  CreatedResource,
  CursorPagedTestCaseList,
  Error,
  IssueLinkInput,
  KeyedCreatedResource,
  TestCase,
  TestCaseInput,
  TestCaseLinkList,
  TestCaseList,
  TestCaseVersionLinkList,
  TestScript,
  TestScriptInput,
  TestStepsInput,
  TestStepsList,
  WebLinkInput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Testcases<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves all test cases. Query parameters can be used to filter the results. If the user who is preforming the API call has access to more than 1000 projects, the `projectKey` query parameter is mandatory.
   *
   * @tags Test Cases
   * @name ListTestCases
   * @summary Get test cases
   * @request GET:/testcases
   * @secure
   */
  listTestCases = (
    query?: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey?: string;
      /**
       * Folder ID filter
       * @format int64
       * @min 1
       */
      folderId?: number;
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
    this.request<TestCaseList, Error>({
      path: `/testcases`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a test case. Fields `priorityName` and `statusName` will be set to default values if not informed. Default values are usually “Normal” for `priorityName` and “Draft” for `statusName`. All required test case custom fields should be present in the request.
   *
   * @tags Test Cases
   * @name CreateTestCase
   * @summary Create test case
   * @request POST:/testcases
   * @secure
   */
  createTestCase = (data: TestCaseInput, params: RequestParams = {}) =>
    this.request<KeyedCreatedResource, Error>({
      path: `/testcases`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves all test cases. Query parameters can be used to filter the results. Use this endpoint for retrieving large volumes of test cases. Results are split in different pages, of size equal to the `limit` query parameter. To fetch the next page, use the `next` URL returned in the response. It should have the same parameters as the original request, with the updated value for `startAtId` parameter. Alternatively, the same request can be made with the `startAtId` parameter set to the `nextStartId` value returned in the response.
   *
   * @tags Test Cases
   * @name ListTestCasesCursorPaginated
   * @summary Get test cases (NextGen)
   * @request GET:/testcases/nextgen
   * @secure
   */
  listTestCasesCursorPaginated = (
    query?: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey?: string;
      /**
       * Folder ID filter
       * @format int64
       * @min 1
       */
      folderId?: number;
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
    this.request<CursorPagedTestCaseList, Error>({
      path: `/testcases/nextgen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a test case for the given key.
   *
   * @tags Test Cases
   * @name GetTestCase
   * @summary Get test case
   * @request GET:/testcases/{testCaseKey}
   * @secure
   */
  getTestCase = (testCaseKey: string, params: RequestParams = {}) =>
    this.request<TestCase, Error>({
      path: `/testcases/${testCaseKey}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing test case.  Please take into account that for each non-specified field the value will be cleared. If the project has test case custom fields, all custom fields should be present in the request. To leave any of them blank, please set them null if they are not required custom fields.
   *
   * @tags Test Cases
   * @name UpdateTestCase
   * @summary Update test case
   * @request PUT:/testcases/{testCaseKey}
   * @secure
   */
  updateTestCase = (
    testCaseKey: string,
    data: TestCase,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/testcases/${testCaseKey}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns links for a test case with specified key.
   *
   * @tags Test Cases
   * @name GetTestCaseLinks
   * @summary Get links
   * @request GET:/testcases/{testCaseKey}/links
   * @secure
   */
  getTestCaseLinks = (testCaseKey: string, params: RequestParams = {}) =>
    this.request<TestCaseLinkList, Error>({
      path: `/testcases/${testCaseKey}/links`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a link between a test case and a Jira issue.
   *
   * @tags Test Cases
   * @name CreateTestCaseIssueLink
   * @summary Create issue link
   * @request POST:/testcases/{testCaseKey}/links/issues
   * @secure
   */
  createTestCaseIssueLink = (
    testCaseKey: string,
    data: IssueLinkInput,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResource, Error>({
      path: `/testcases/${testCaseKey}/links/issues`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a link between a test case and a generic URL.
   *
   * @tags Test Cases
   * @name CreateTestCaseWebLink
   * @summary Create web link
   * @request POST:/testcases/{testCaseKey}/links/weblinks
   * @secure
   */
  createTestCaseWebLink = (
    testCaseKey: string,
    data: WebLinkInput,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResource, Error>({
      path: `/testcases/${testCaseKey}/links/weblinks`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns all test case versions for a test case with specified key. Response is ordered by most recent first.
   *
   * @tags Test Cases
   * @name ListTestCaseVersions
   * @summary Get versions
   * @request GET:/testcases/{testCaseKey}/versions
   * @secure
   */
  listTestCaseVersions = (
    testCaseKey: string,
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
    },
    params: RequestParams = {},
  ) =>
    this.request<TestCaseVersionLinkList, Error>({
      path: `/testcases/${testCaseKey}/versions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a specific version of a test case.
   *
   * @tags Test Cases
   * @name GetTestCaseVersion
   * @summary Get version
   * @request GET:/testcases/{testCaseKey}/versions/{version}
   * @secure
   */
  getTestCaseVersion = (
    testCaseKey: string,
    version: number,
    params: RequestParams = {},
  ) =>
    this.request<TestCase, Error>({
      path: `/testcases/${testCaseKey}/versions/${version}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the test script for the given test case
   *
   * @tags Test Cases
   * @name GetTestCaseTestScript
   * @summary Get test script
   * @request GET:/testcases/{testCaseKey}/testscript
   * @secure
   */
  getTestCaseTestScript = (testCaseKey: string, params: RequestParams = {}) =>
    this.request<TestScript, Error>({
      path: `/testcases/${testCaseKey}/testscript`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates or updates the test script for a test case. If the test case currently has a sequence of test steps assigned to it, these will be implicitly removed.
   *
   * @tags Test Cases
   * @name CreateTestCaseTestScript
   * @summary Create test script
   * @request POST:/testcases/{testCaseKey}/testscript
   * @secure
   */
  createTestCaseTestScript = (
    testCaseKey: string,
    data: TestScriptInput,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResource, Error>({
      path: `/testcases/${testCaseKey}/testscript`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the test steps for the given test case. Provides a paged response, with 100 items per page.
   *
   * @tags Test Cases
   * @name GetTestCaseTestSteps
   * @summary Get test steps
   * @request GET:/testcases/{testCaseKey}/teststeps
   * @secure
   */
  getTestCaseTestSteps = (
    testCaseKey: string,
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
    },
    params: RequestParams = {},
  ) =>
    this.request<TestStepsList, Error>({
      path: `/testcases/${testCaseKey}/teststeps`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Assigns a series of test steps to a test case, appending them to any existing sequence of test steps. A maximum of 100 steps can be posted per request. Consumers should not attempt to parallelize this operation, as the order of the steps is defined by the input order. If this endpoint is called on a test case that already has a plain text or BDD test script, that test script will implicitly be removed. All required step custom fields should be present in the request.
   *
   * @tags Test Cases
   * @name CreateTestCaseTestSteps
   * @summary Post test steps
   * @request POST:/testcases/{testCaseKey}/teststeps
   * @secure
   */
  createTestCaseTestSteps = (
    testCaseKey: string,
    data: TestStepsInput,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResource, Error>({
      path: `/testcases/${testCaseKey}/teststeps`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
