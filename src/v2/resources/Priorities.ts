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
  CreatePriorityInput,
  Error,
  Priority,
  PriorityList,
  PriorityNotFoundOrUserAccessError,
  UpdatePriorityInput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Priorities<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all priorities.
   *
   * @tags Priorities
   * @name ListPriorities
   * @summary Get priorities
   * @request GET:/priorities
   * @secure
   */
  listPriorities = (
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
    },
    params: RequestParams = {},
  ) =>
    this.request<PriorityList, Error>({
      path: `/priorities`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a priority.
   *
   * @tags Priorities
   * @name CreatePriority
   * @summary Create a priority
   * @request POST:/priorities
   * @secure
   */
  createPriority = (data: CreatePriorityInput, params: RequestParams = {}) =>
    this.request<CreatedResource, Error>({
      path: `/priorities`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a priority for the given ID.
   *
   * @tags Priorities
   * @name GetPriority
   * @summary Get priority
   * @request GET:/priorities/{priorityId}
   * @secure
   */
  getPriority = (priorityId: number, params: RequestParams = {}) =>
    this.request<Priority, PriorityNotFoundOrUserAccessError | Error>({
      path: `/priorities/${priorityId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update an existing priority.  Please take into account that for each non-specified field the value will be cleared.
   *
   * @tags Priorities
   * @name UpdatePriority
   * @summary Update priority
   * @request PUT:/priorities/{priorityId}
   * @secure
   */
  updatePriority = (
    priorityId: number,
    data: UpdatePriorityInput,
    params: RequestParams = {},
  ) =>
    this.request<void, Error>({
      path: `/priorities/${priorityId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
