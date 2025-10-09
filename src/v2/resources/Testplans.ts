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
  Error,
  IssueLinkInput,
  KeyedCreatedResource,
  TestPlan,
  TestPlanInput,
  TestPlanList,
  TestPlanTestCycleLinkInput,
  WebLinkInputWithMandatoryDescription,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Testplans<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves all test plans. Query parameters can be used to filter the results.
   *
   * @tags Test Plans
   * @name ListTestPlans
   * @summary Get test plans
   * @request GET:/testplans
   * @secure
   */
  listTestPlans = (
    query?: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey?: string;
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
    this.request<TestPlanList, Error>({
      path: `/testplans`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a test plan. All required test plan custom fields should be present in the request.
   *
   * @tags Test Plans
   * @name CreateTestPlan
   * @summary Create test plan
   * @request POST:/testplans
   * @secure
   */
  createTestPlan = (data: TestPlanInput, params: RequestParams = {}) =>
    this.request<KeyedCreatedResource, Error>({
      path: `/testplans`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a test plan for the given id or key.
   *
   * @tags Test Plans
   * @name GetTestPlan
   * @summary Get test plan
   * @request GET:/testplans/{testPlanIdOrKey}
   * @secure
   */
  getTestPlan = (testPlanIdOrKey: string, params: RequestParams = {}) =>
    this.request<TestPlan, Error>({
      path: `/testplans/${testPlanIdOrKey}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a link between a test plan and a generic URL.
   *
   * @tags Test Plans
   * @name CreateTestPlanWebLink
   * @summary Create web link
   * @request POST:/testplans/{testPlanIdOrKey}/links/weblinks
   * @secure
   */
  createTestPlanWebLink = (
    testPlanIdOrKey: string,
    data: WebLinkInputWithMandatoryDescription,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResource, Error>({
      path: `/testplans/${testPlanIdOrKey}/links/weblinks`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a link between a test plan and a Jira issue.
   *
   * @tags Test Plans
   * @name CreateTestPlanIssueLink
   * @summary Create issue link
   * @request POST:/testplans/{testPlanIdOrKey}/links/issues
   * @secure
   */
  createTestPlanIssueLink = (
    testPlanIdOrKey: string,
    data: IssueLinkInput,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResource, Error>({
      path: `/testplans/${testPlanIdOrKey}/links/issues`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a link between a test plan and a test cycle.
   *
   * @tags Test Plans
   * @name CreateTestPlanTestCycleLink
   * @summary Create test cycle link
   * @request POST:/testplans/{testPlanIdOrKey}/links/testcycles
   * @secure
   */
  createTestPlanTestCycleLink = (
    testPlanIdOrKey: string,
    data: TestPlanTestCycleLinkInput,
    params: RequestParams = {},
  ) =>
    this.request<CreatedResource, Error>({
      path: `/testplans/${testPlanIdOrKey}/links/testcycles`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
