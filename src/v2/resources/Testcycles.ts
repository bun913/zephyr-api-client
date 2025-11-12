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
  Error,
  IssueLinkInput,
  KeyedCreatedResource,
  TestCycle,
  TestCycleInput,
  TestCycleLinkList,
  TestCycleList,
  WebLinkInput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Testcycles<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all test cycles. Query parameters can be used to filter by project and folder.
   *
   * @tags Test Cycles
   * @name ListTestCycles
   * @summary Get test cycles
   * @request GET:/testcycles
   * @secure
   */
  listTestCycles = (
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
       * Jira Project Version ID. Relates to 'Version' or 'Releases' in Jira projects.
       * @format int64
       * @min 1
       */
      jiraProjectVersionId?: number;
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
    this.request<TestCycleList, Error>({
      path: `/testcycles`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a Test Cycle. All required test cycle custom fields should be present in the request.
   *
   * @tags Test Cycles
   * @name CreateTestCycle
   * @summary Create a Test Cycle
   * @request POST:/testcycles
   * @secure
   */
  createTestCycle = (data: TestCycleInput, params: RequestParams = {}) =>
    this.request<KeyedCreatedResource, Error>({
      path: `/testcycles`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a test cycle for the given key.
   *
   * @tags Test Cycles
   * @name GetTestCycle
   * @summary Get test cycle
   * @request GET:/testcycles/{testCycleIdOrKey}
   * @secure
   */
  getTestCycle = (testCycleIdOrKey: string, params: RequestParams = {}) =>
    this.request<TestCycle, Error>({
      path: `/testcycles/${testCycleIdOrKey}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing test cycle.  Please take into account that for each non-specified field the value will be cleared. If the project has test cycle custom fields, all custom fields should be present in the request. To leave any of them blank, please set them null if they are not required custom fields.
   *
   * @tags Test Cycles
   * @name UpdateTestCycle
   * @summary Update test cycle
   * @request PUT:/testcycles/{testCycleIdOrKey}
   * @secure
   */
  updateTestCycle = (
    testCycleIdOrKey: string,
    data: TestCycle,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/testcycles/${testCycleIdOrKey}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns links for a test cycle with specified key.
   *
   * @tags Test Cycles
   * @name GetTestCycleLinks
   * @summary Get links
   * @request GET:/testcycles/{testCycleIdOrKey}/links
   * @secure
   */
  getTestCycleLinks = (testCycleIdOrKey: string, params: RequestParams = {}) =>
    this.request<TestCycleLinkList, Error>({
      path: `/testcycles/${testCycleIdOrKey}/links`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a link between a test cycle and a Jira issue.
   *
   * @tags Test Cycles
   * @name CreateTestCycleIssueLink
   * @summary Create issue link
   * @request POST:/testcycles/{testCycleIdOrKey}/links/issues
   * @secure
   */
  createTestCycleIssueLink = (
    testCycleIdOrKey: string,
    data: IssueLinkInput,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/testcycles/${testCycleIdOrKey}/links/issues`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Creates a link between a test cycle and a generic URL.
   *
   * @tags Test Cycles
   * @name CreateTestCycleWebLink
   * @summary Create web link
   * @request POST:/testcycles/{testCycleIdOrKey}/links/weblinks
   * @secure
   */
  createTestCycleWebLink = (
    testCycleIdOrKey: string,
    data: WebLinkInput,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/testcycles/${testCycleIdOrKey}/links/weblinks`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
