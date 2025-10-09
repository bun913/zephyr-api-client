import { Automations } from "./resources/Automations";
import { Environments } from "./resources/Environments";
import { Folders } from "./resources/Folders";
import { Healthcheck } from "./resources/Healthcheck";
import { Issuelinks } from "./resources/Issuelinks";
import { Links } from "./resources/Links";
import { Priorities } from "./resources/Priorities";
import { Projects } from "./resources/Projects";
import { Statuses } from "./resources/Statuses";
import { Testcases } from "./resources/Testcases";
import { Testcycles } from "./resources/Testcycles";
import { Testexecutions } from "./resources/Testexecutions";
import { Testplans } from "./resources/Testplans";

/**
 * Configuration options for ZephyrV2Client
 */
export interface ZephyrV2ClientConfig {
  /** API token for authentication */
  apiToken: string;
  /** Base URL for the API (default: https://api.zephyrscale.smartbear.com/v2) */
  baseURL?: string;
}

/**
 * Zephyr Scale Cloud API v2 Client
 *
 * This client provides access to all Zephyr Scale Cloud API v2 resources.
 * All requests are automatically authenticated using the provided API token.
 */
export class ZephyrV2Client {
  public automations: Automations;
  public environments: Environments;
  public folders: Folders;
  public healthcheck: Healthcheck;
  public issuelinks: Issuelinks;
  public links: Links;
  public priorities: Priorities;
  public projects: Projects;
  public statuses: Statuses;
  public testcases: Testcases;
  public testcycles: Testcycles;
  public testexecutions: Testexecutions;
  public testplans: Testplans;

  constructor(config: ZephyrV2ClientConfig) {
    const { apiToken, baseURL = "https://api.zephyrscale.smartbear.com/v2" } = config;

    // Common configuration for all resources
    const commonConfig = {
      baseURL,
      securityWorker: () => ({
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      }),
    };

    // Initialize all resource clients
    this.automations = new Automations(commonConfig);
    this.environments = new Environments(commonConfig);
    this.folders = new Folders(commonConfig);
    this.healthcheck = new Healthcheck(commonConfig);
    this.issuelinks = new Issuelinks(commonConfig);
    this.links = new Links(commonConfig);
    this.priorities = new Priorities(commonConfig);
    this.projects = new Projects(commonConfig);
    this.statuses = new Statuses(commonConfig);
    this.testcases = new Testcases(commonConfig);
    this.testcycles = new Testcycles(commonConfig);
    this.testexecutions = new Testexecutions(commonConfig);
    this.testplans = new Testplans(commonConfig);
  }
}
