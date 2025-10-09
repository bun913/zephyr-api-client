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
  AutomationResult,
  AutomationTestCycleInput,
  Error,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Automations<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Create results using Zephyr's custom results format.
   *
   * @tags Automations
   * @name CreateCustomExecutions
   * @summary Custom format
   * @request POST:/automations/executions/custom
   * @secure
   */
  createCustomExecutions = (
    query: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey: string;
      /**
       * Indicate if test cases should be created if non existent.
       * @default false
       */
      autoCreateTestCases?: boolean;
    },
    data: {
      /** @format binary */
      file: File;
      /** Pass this object as a JSON in your form-data alongside the file. Make sure you set the type of this object as `application/json` otherwise the object will be ignored. */
      testCycle?: AutomationTestCycleInput;
    },
    params: RequestParams = {},
  ) =>
    this.request<AutomationResult, Error>({
      path: `/automations/executions/custom`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Create results using the Cucumber results format.
   *
   * @tags Automations
   * @name CreateCucumberExecutions
   * @summary Cucumber format
   * @request POST:/automations/executions/cucumber
   * @secure
   */
  createCucumberExecutions = (
    query: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey: string;
      /**
       * Indicate if test cases should be created if non existent.
       * @default false
       */
      autoCreateTestCases?: boolean;
    },
    data: {
      /** @format binary */
      file: File;
      /** Pass this object as a JSON in your form-data alongside the file. Make sure you set the type of this object as `application/json` otherwise the object will be ignored. */
      testCycle?: AutomationTestCycleInput;
    },
    params: RequestParams = {},
  ) =>
    this.request<AutomationResult, Error>({
      path: `/automations/executions/cucumber`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * @description Create results using the JUnit XML results format. Optionally, you can send a `testCycle` part in your form data to customize the created test cycle.
   *
   * @tags Automations
   * @name CreateJUnitExecutions
   * @summary JUnit XML format
   * @request POST:/automations/executions/junit
   * @secure
   */
  createJUnitExecutions = (
    query: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey: string;
      /**
       * Indicate if test cases should be created if non existent.
       * @default false
       */
      autoCreateTestCases?: boolean;
    },
    data: {
      /** @format binary */
      file: File;
      /** Pass this object as a JSON in your form-data alongside the file. Make sure you set the type of this object as `application/json` otherwise the object will be ignored. */
      testCycle?: AutomationTestCycleInput;
    },
    params: RequestParams = {},
  ) =>
    this.request<AutomationResult, Error>({
      path: `/automations/executions/junit`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Automations
   * @name RetrieveBddTestCases
   * @summary Retrieve a zip file containing Cucumber Feature Files that matches the query passed as parameter.
   * @request GET:/automations/testcases
   * @secure
   */
  retrieveBddTestCases = (
    query: {
      /**
       * Jira project key filter
       * @pattern ([A-Z][A-Z_0-9]+)
       */
      projectKey: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<File, Error>({
      path: `/automations/testcases`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
