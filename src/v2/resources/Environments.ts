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
  CreateEnvironmentInput,
  DuplicatedNameError,
  EmptyNameError,
  Environment,
  EnvironmentList,
  EnvironmentNotFoundOrUserAccessError,
  Error,
  IndexValueError,
  ProjectKeyMismatchError,
  UpdateEnvironmentInput,
  UserAccessError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Environments<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all environments.
   *
   * @tags Environments
   * @name ListEnvironments
   * @summary Get environments
   * @request GET:/environments
   * @secure
   */
  listEnvironments = (
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
    this.request<EnvironmentList, Error>({
      path: `/environments`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates an environment.
   *
   * @tags Environments
   * @name CreateEnvironment
   * @summary Create an environment
   * @request POST:/environments
   * @secure
   */
  createEnvironment = (
    data: CreateEnvironmentInput,
    params: RequestParams = {},
  ) =>
    this.request<
      CreatedResource,
      | (
          | DuplicatedNameError
          | EmptyNameError
          | UserAccessError
          | ProjectKeyMismatchError
        )
      | Error
    >({
      path: `/environments`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns an environment for the given ID.
   *
   * @tags Environments
   * @name GetEnvironment
   * @summary Get environment
   * @request GET:/environments/{environmentId}
   * @secure
   */
  getEnvironment = (environmentId: number, params: RequestParams = {}) =>
    this.request<Environment, EnvironmentNotFoundOrUserAccessError | Error>({
      path: `/environments/${environmentId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update an existing environment.  Please take into account that for each non-specified field the value will be cleared.
   *
   * @tags Environments
   * @name UpdateEnvironment
   * @summary Update an environment
   * @request PUT:/environments/{environmentId}
   * @secure
   */
  updateEnvironment = (
    environmentId: number,
    data: UpdateEnvironmentInput,
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      | (
          | DuplicatedNameError
          | EmptyNameError
          | UserAccessError
          | ProjectKeyMismatchError
          | IndexValueError
        )
      | Error
    >({
      path: `/environments/${environmentId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
