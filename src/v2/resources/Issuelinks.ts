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
  TestCaseKeyAndVersionList,
  TestCycleIdList,
  TestExecutionIdList,
  TestPlanIdList,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Issuelinks<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get test case keys and versions linked to the given Jira issue.
   *
   * @tags Issue Links
   * @name GetIssueLinkTestCases
   * @summary Get test cases
   * @request GET:/issuelinks/{issueKey}/testcases
   * @secure
   */
  getIssueLinkTestCases = (issueKey: string, params: RequestParams = {}) =>
    this.request<TestCaseKeyAndVersionList, Error>({
      path: `/issuelinks/${issueKey}/testcases`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get test cycle IDs linked to the given Jira issue.
   *
   * @tags Issue Links
   * @name GetIssueLinkTestCycles
   * @summary Get test cycles
   * @request GET:/issuelinks/{issueKey}/testcycles
   * @secure
   */
  getIssueLinkTestCycles = (issueKey: string, params: RequestParams = {}) =>
    this.request<TestCycleIdList, Error>({
      path: `/issuelinks/${issueKey}/testcycles`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get test plan IDs linked to the given Jira issue.
   *
   * @tags Issue Links
   * @name GetIssueLinkTestPlans
   * @summary Get test plans
   * @request GET:/issuelinks/{issueKey}/testplans
   * @secure
   */
  getIssueLinkTestPlans = (issueKey: string, params: RequestParams = {}) =>
    this.request<TestPlanIdList, Error>({
      path: `/issuelinks/${issueKey}/testplans`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Get test execution IDs linked to the given Jira issue.
   *
   * @tags Issue Links
   * @name GetIssueLinkTestExecutions
   * @summary Get test executions
   * @request GET:/issuelinks/{issueKey}/executions
   * @secure
   */
  getIssueLinkTestExecutions = (issueKey: string, params: RequestParams = {}) =>
    this.request<TestExecutionIdList, Error>({
      path: `/issuelinks/${issueKey}/executions`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
