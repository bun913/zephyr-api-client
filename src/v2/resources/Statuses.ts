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
  CreateStatusInput,
  Error,
  Status,
  StatusList,
  StatusNotFoundOrUserAccessError,
  StatusType,
  UpdateStatusInput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Statuses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all statuses.
   *
   * @tags Statuses
   * @name ListStatuses
   * @summary Get statuses
   * @request GET:/statuses
   * @secure
   */
  listStatuses = (
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
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey?: string;
      /** Valid values: `"TEST_CASE"`, `"TEST_PLAN"`, `"TEST_CYCLE"`, `"TEST_EXECUTION"` */
      statusType?: StatusType;
    },
    params: RequestParams = {},
  ) =>
    this.request<StatusList, Error>({
      path: `/statuses`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a status.
   *
   * @tags Statuses
   * @name CreateStatus
   * @summary Create a status
   * @request POST:/statuses
   * @secure
   */
  createStatus = (data: CreateStatusInput, params: RequestParams = {}) =>
    this.request<CreatedResource, Error>({
      path: `/statuses`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a status for the given ID.
   *
   * @tags Statuses
   * @name GetStatus
   * @summary Get status
   * @request GET:/statuses/{statusId}
   * @secure
   */
  getStatus = (statusId: number, params: RequestParams = {}) =>
    this.request<Status, StatusNotFoundOrUserAccessError | Error>({
      path: `/statuses/${statusId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update an existing status.  Please take into account that for each non-specified field the value will be cleared.
   *
   * @tags Statuses
   * @name UpdateStatus
   * @summary Update status
   * @request PUT:/statuses/{statusId}
   * @secure
   */
  updateStatus = (
    statusId: number,
    data: UpdateStatusInput,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/statuses/${statusId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
