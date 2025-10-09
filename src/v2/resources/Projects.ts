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

import { Error, Project, ProjectList } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Projects<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all projects.
   *
   * @tags Projects
   * @name ListProjects
   * @summary Get projects
   * @request GET:/projects
   * @secure
   */
  listProjects = (
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
    this.request<ProjectList, Error>({
      path: `/projects`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a project for the given ID or key.
   *
   * @tags Projects
   * @name GetProject
   * @summary Get project
   * @request GET:/projects/{projectIdOrKey}
   * @secure
   */
  getProject = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<Project, Error>({
      path: `/projects/${projectIdOrKey}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
