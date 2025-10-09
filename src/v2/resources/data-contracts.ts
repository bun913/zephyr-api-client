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

export type TestCaseList = PagedList & {
  values?: TestCase[];
};

export interface PagedList {
  /** @format url */
  next?: string;
  /**
   * @format int64
   * @min 0
   */
  startAt: number;
  /**
   * @format int64
   * @min 0
   * @example 1
   */
  maxResults: number;
  /**
   * @format int64
   * @min 0
   * @example 1
   */
  total?: number;
  /** @example true */
  isLast?: boolean;
}

export interface TestCase {
  id: EntityId;
  /**
   * The test case key
   * @pattern .+-T[0-9]+
   * @example "SA-T10"
   */
  key: string;
  name: EntityName;
  project: ProjectLink;
  /** Data and time test case was created. Format: yyyy-MM-dd'T'HH:mm:ss'Z'. This field is read-only, cannot be updated. */
  createdOn?: CreatedOn;
  /** A description of the objective. */
  objective?: Objective;
  /** Any conditions that need to be met. */
  precondition?: Precondition;
  /**
   * Estimated duration in milliseconds.
   * @format int64
   * @min 0
   * @example 138000
   */
  estimatedTime?: number;
  /** Array of labels associated to this entity. */
  labels?: Labels;
  component?: JiraComponent;
  priority: PriorityLink;
  status: StatusLink;
  folder?: FolderLink;
  owner?: JiraUserLink;
  testScript?: TestCaseTestScriptLink;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
  /** This property is ignored on updates. */
  links?: TestCaseLinkList;
}

/**
 * @format int64
 * @min 1
 * @example 1
 */
export type EntityId = number;

/**
 * @pattern ^(?!\\s*$).+
 * @example "Check axial pump"
 */
export type EntityName = string;

/** @example {"id":10005,"self":"https://<api-base-url>/projects/10005"} */
export type ProjectLink = ResourceId & Link;

export interface ResourceId {
  id: EntityId;
}

export interface Link {
  /** @format url */
  self?: string;
}

/**
 * Data and time test case was created. Format: yyyy-MM-dd'T'HH:mm:ss'Z'. This field is read-only, cannot be updated.
 * @format date-time
 * @example "2018-05-15T13:15:13Z"
 */
export type CreatedOn = string;

/**
 * A description of the objective.
 * @example "To ensure the axial pump can be enabled"
 */
export type Objective = string;

/**
 * Any conditions that need to be met.
 * @example "Latest version of the axial pump available"
 */
export type Precondition = string;

/**
 * Array of labels associated to this entity.
 * @example ["Regression","Performance","Automated"]
 */
export type Labels = string[];

/** @example {"id":10001,"self":"https://<jira-instance>.atlassian.net/rest/api/2/component/10001"} */
export type JiraComponent = ResourceId & Link;

/** @example {"id":10002,"self":"https://<api-base-url>/priorities/10002"} */
export type PriorityLink = ResourceId & Link;

/** @example {"id":10000,"self":"https://<api-base-url>/statuses/10000"} */
export type StatusLink = ResourceId & Link;

/** @example {"id":100006,"self":"https://<api-base-url>/folders/10006"} */
export type FolderLink = ResourceId & Link;

/** @example {"self":"https://<jira-instance>.atlassian.net/rest/api/2/user?accountId=5b10a2844c20165700ede21g","accountId":"5b10a2844c20165700ede21g"} */
export type JiraUserLink = Link & {
  /** Atlassian Account ID of the Jira user. */
  accountId: JiraUserAccountId;
};

/**
 * Atlassian Account ID of the Jira user.
 * @pattern ^[-:a-zA-Z0-9]{1,128}$
 * @example "5b10a2844c20165700ede21g"
 */
export type JiraUserAccountId = string;

/** @example {"self":"https://<api-base-url>/testCases/PROJ-T1/testscript"} */
export type TestCaseTestScriptLink = Link;

/**
 * Multi-line text fields should denote a new line with the \<br\> syntax.
 * Dates should be in the format 'yyyy-MM-dd'.
 * Users should provided by the user ID.
 * @example {"Build Number":20,"Release Date":"2020-01-01","Pre-Condition(s)":"User should have logged in. <br> User should have navigated to the administration panel.","Implemented":false,"Category":["Performance","Regression"],"Tester":"fa2e582e-5e15-521e-92e3-47e6ca2e7256"}
 */
export type CustomFields = Record<string, object>;

/** This property is ignored on updates. */
export type TestCaseLinkList = Link & {
  /** A list of Jira issues linked to this entity */
  issues?: IssueLinkList;
  /** A list of web links for this entity */
  webLinks?: WebLinkList;
};

/** A list of Jira issues linked to this entity */
export type IssueLinkList = IssueLink[];

export type IssueLink = Link &
  IssueLinkInput & {
    id?: EntityId;
    /**
     * The Jira Cloud REST API endpoint to get the full representation of the issue
     * @format url
     * @example "https://<jira-instance>.atlassian.net/rest/api/2/issue/10000"
     */
    target?: string;
    /** The link type */
    type?: "COVERAGE" | "BLOCKS" | "RELATED";
  };

export interface IssueLinkInput {
  /**
   * The issue ID
   * @format int64
   * @min 1
   * @example 10100
   */
  issueId: number;
}

/** A list of web links for this entity */
export type WebLinkList = WebLink[];

export type WebLink = Link &
  WebLinkInput & {
    id?: EntityId;
    /** The link type */
    type?: "COVERAGE" | "BLOCKS" | "RELATED";
  };

export interface WebLinkInput {
  /**
   * The link description
   * @example "A link to atlassian.com"
   */
  description?: string;
  /**
   * The web link URL
   * @format url
   * @example "https://atlassian.com"
   */
  url: string;
}

export interface Error {
  /** @example 400 */
  errorCode: number;
  /** @example "projectKey must not be null" */
  message: string;
}

export interface TestCaseInput {
  /** Jira project key. */
  projectKey: ProjectKey;
  name: EntityName;
  /** A description of the objective. */
  objective?: Objective;
  /** Any conditions that need to be met. */
  precondition?: Precondition;
  /**
   * Estimated duration in milliseconds.
   * @format int64
   * @min 0
   * @example 138000
   */
  estimatedTime?: number;
  /**
   * ID of a component from Jira.
   * @format int64
   * @min 0
   * @example 10001
   */
  componentId?: number;
  /** The priority name. */
  priorityName?: PriorityName;
  /** The status name. */
  statusName?: StatusName;
  /**
   * ID of a folder to place the entity within.
   * @format int64
   * @min 1
   */
  folderId?: number;
  /** Atlassian Account ID of the Jira user. */
  ownerId?: JiraUserAccountId;
  /** Array of labels associated to this entity. */
  labels?: Labels;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
}

/**
 * Jira project key.
 * @pattern ([A-Z][A-Z_0-9]+)
 * @example "TIS"
 */
export type ProjectKey = string;

/**
 * The priority name.
 * @minLength 1
 * @maxLength 255
 * @example "Critical"
 */
export type PriorityName = string;

/**
 * The status name.
 * @minLength 1
 * @maxLength 255
 * @example "In Progress"
 */
export type StatusName = string;

export type KeyedCreatedResource = CreatedResource & {
  key?: string;
};

export interface CreatedResource {
  id?: EntityId;
  self?: string;
}

export type CursorPagedTestCaseList = CursorPagedList & {
  values?: TestCase[];
};

export interface CursorPagedList {
  /** @format url */
  next?: string | null;
  /**
   * @format int64
   * @min 0
   */
  nextStartAtId: number | null;
  /**
   * @format int64
   * @min 0
   * @example 1
   */
  limit: number;
}

export type TestCaseVersionLinkList = PagedList & {
  /** A list of versions for a test case */
  values?: TestCaseVersionLink[];
};

/** @example {"id":10002,"self":"https://<api-base-url>/testcases/PROJ-T1/versions/1"} */
export type TestCaseVersionLink = Link & {
  id?: EntityId;
};

/** Response body when retrieving test scripts */
export type TestScript = TestScriptInput & {
  id?: EntityId;
};

/** Request body for creating test scripts */
export interface TestScriptInput {
  /**
   * Test scripts can be in plain text or bdd format. BDD type can support remote execution on a build system via API plugin. To create a step-by-step test script, you should first create a plain text test script then use the POST /testcases/{testCaseKey}/teststeps endpoint.
   * @example "plain"
   */
  type: "plain" | "bdd";
  /**
   * @minLength 1
   * @example "e.g. Attempt to login to the application"
   */
  text: string;
}

/** Response body when retrieving test steps */
export type TestStepsList = PagedList & {
  /** The list of test steps */
  values?: TestStep[];
};

/** An instruction to be followed as part of a step-by-step test script. The test step can have either an inline definition, or delegate execution to another test case. One of these options must be specified. */
export interface TestStep {
  inline?: {
    /**
     * The instruction to be followed
     * @example "Attempt to login to the application"
     */
    description?: string;
    /**
     * Any test data required to perform the instruction (optional). The fields values provided can be interpolated into the description.
     * @example "Username = SmartBear Password = weLoveAtlassian"
     */
    testData?: string;
    /**
     * The expected outcome of executing the instruction
     * @example "Login succeeds, web-app redirects to the dashboard view"
     */
    expectedResult?: string;
    /**
     * Multi-line text fields should denote a new line with the \<br\> syntax.
     * Dates should be in the format 'yyyy-MM-dd'.
     * Users should provided by the user ID.
     */
    customFields?: CustomFields;
    /**
     * The AI reference. Zephyr only feature
     * @example "Not available yet"
     */
    reflectRef?: string;
  };
  testCase?: TestStepTestCase;
}

export type TestStepTestCase = Link & {
  /**
   * The key of the other test case that the test step should delegate execution to. This cannot be the parent test case.
   * @pattern (.+-T[0-9]+)
   * @example "PROJ-T123"
   */
  testCaseKey: string;
  /** The list of parameters of the call to test step */
  parameters?: TestStepTestCaseParameters[];
};

export interface TestStepTestCaseParameters {
  /**
   * Name of the parameter
   * @example "username"
   */
  name?: string;
  /**
   * Type of the parameter. It is manual inputs for parameters or the default values.
   * @example "DEFAULT_VALUE"
   */
  type?: "MANUAL_INPUT" | "DEFAULT_VALUE";
  /**
   * Value of the parameter
   * @example "admin"
   */
  value?: string;
}

/** Request body for creating test steps. A maximum of 100 test steps can be added in one request. To add more than 100 steps, you can submit multiple requests. The mode property allows you to specify whether you want to delete the current test steps and create a new list, or append more items to the end of the current list. */
export interface TestStepsInput {
  /**
   * Valid values: `"APPEND"`, `"OVERWRITE"`. <br> `OVERWRITE` deletes and recreates the test steps and associated custom field values using the provided input. Attachments for existing steps are kept, but those for missing steps are deleted permanently <br> `APPEND` only adds extra steps to your test steps.
   * @example "APPEND"
   */
  mode: string;
  /** The list of test steps. Each step should be an object containing `inline` or `testCase`. **They should only include one of these fields at a time**. */
  items: TestStep[];
}

export type TestCycleList = PagedList & {
  values?: TestCycle[];
};

export interface TestCycle {
  id: EntityId;
  /**
   * Unique key of the test cycle
   * @pattern .+-[R|C][0-9]+
   * @example "SA-R40"
   */
  key: string;
  /**
   * Name of the Test Cycle
   * @pattern ^(?!\s*$).+
   * @example "Sprint 1 Regression Test Cycle"
   */
  name: string;
  project: ProjectLink;
  jiraProjectVersion?: JiraProjectVersion;
  status: StatusLink;
  folder?: FolderLink;
  /** Description outlining the scope. */
  description?: EntityDescription;
  /** Planned start date of the test cycle. This field cannot be blank. Setting it as null or excluding it from the request will leave the field values unchanged. Format: yyyy-MM-dd'T'HH:mm:ss'Z' */
  plannedStartDate?: TestCycleUpdatePlannedStartDate;
  /** The planned end date of the test cycle. This field cannot be blank. Setting it as null or excluding it from the request will leave the field values unchanged. Format: yyyy-MM-dd'T'HH:mm:ss'Z' */
  plannedEndDate?: TestCycleUpdatePlannedEndDate;
  owner?: JiraUserLink;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
  /** This property is ignored on updates. */
  links?: TestCycleLinkList;
}

/** @example {"id":10000,"self":"https://<jira-instance>.atlassian.net/rest/api/2/version/10000"} */
export type JiraProjectVersion = ResourceId & Link;

/**
 * Description outlining the scope.
 * @example "Regression test cycle 1 to ensure no breaking changes"
 */
export type EntityDescription = string;

/**
 * Planned start date of the test cycle. This field cannot be blank. Setting it as null or excluding it from the request will leave the field values unchanged. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
 * @format date-time
 * @example "2018-05-19T13:15:13Z"
 */
export type TestCycleUpdatePlannedStartDate = string;

/**
 * The planned end date of the test cycle. This field cannot be blank. Setting it as null or excluding it from the request will leave the field values unchanged. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
 * @format date-time
 * @example "2018-05-20T13:15:13Z"
 */
export type TestCycleUpdatePlannedEndDate = string;

/** This property is ignored on updates. */
export type TestCycleLinkList = Link & {
  /** A list of Jira issues linked to this entity */
  issues?: IssueLinkList;
  /** A list of web links for this entity */
  webLinks?: WebLinkList;
  /** A list of test plan links for a test cycle */
  testPlans?: TestCycleTestPlanLinkList;
};

/** A list of test plan links for a test cycle */
export type TestCycleTestPlanLinkList = TestCycleTestPlanLink[];

/** @example {"id":1,"self":"https://<api-base-url>/links/1","type":"RELATED","testPlanId":2,"target":"https://<jira-instance>.atlassian.net/rest/api/2/testplan/123"} */
export type TestCycleTestPlanLink = ResourceId &
  Link & {
    /** @format int64 */
    testPlanId?: number;
    /** The link type */
    type?: "COVERAGE" | "BLOCKS" | "RELATED";
    /**
     * The Jira Cloud REST API endpoint to get the full representation of the test plan
     * @format url
     */
    target?: string;
  };

export interface TestCycleInput {
  /** Jira project key. */
  projectKey: ProjectKey;
  name: EntityName;
  /** Description outlining the scope. */
  description?: EntityDescription;
  /** Planned start date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z' */
  plannedStartDate?: PlannedStartDate;
  /** The planned end date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z' */
  plannedEndDate?: PlannedEndDate;
  /** ID of the version from Jira. */
  jiraProjectVersion?: JiraProjectVersionId;
  /** The status name. */
  statusName?: StatusName;
  /**
   * ID of a folder to place the entity within.
   * @format int64
   * @min 1
   */
  folderId?: number;
  /** Atlassian Account ID of the Jira user. */
  ownerId?: JiraUserAccountId;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
}

/**
 * Planned start date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
 * @format date-time
 * @example "2018-05-19T13:15:13Z"
 */
export type PlannedStartDate = string;

/**
 * The planned end date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
 * @format date-time
 * @example "2018-05-20T13:15:13Z"
 */
export type PlannedEndDate = string;

/**
 * ID of the version from Jira.
 * @format int64
 * @min 1
 * @example 10000
 */
export type JiraProjectVersionId = number;

export type TestPlanList = PagedList & {
  values?: TestPlan[];
};

export interface TestPlan {
  id: EntityId;
  /**
   * Key of the test plan
   * @pattern .+-P[0-9]+
   * @example "SA-P10"
   */
  key: string;
  name: EntityName;
  /** A description of the objective. */
  objective?: Objective;
  project: ProjectLink;
  status: StatusLink;
  folder?: FolderLink;
  owner?: JiraUserLink;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
  /** Array of labels associated to this entity. */
  labels?: Labels;
  links?: {
    /** A list of web links for this entity */
    webLinks?: WebLinkList;
    /** A list of Jira issues linked to this entity */
    issues?: IssueLinkList;
    /** A list of test cycle links for a test plan */
    testCycles?: TestPlanCycleLinkList;
  };
}

/** A list of test cycle links for a test plan */
export type TestPlanCycleLinkList = TestPlanTestCycleLink[];

export type TestPlanTestCycleLink = ResourceId &
  Link & {
    testCycleId?: EntityId;
    /** The link type */
    type?: "COVERAGE" | "BLOCKS" | "RELATED";
    /** The test cycle resource */
    target?: string;
  };

export interface TestPlanInput {
  /** Jira project key. */
  projectKey: ProjectKey;
  name: EntityName;
  /** A description of the objective. */
  objective?: Objective;
  /**
   * ID of a folder to place the entity within.
   * @format int64
   * @min 1
   */
  folderId?: number;
  /** The status name. */
  statusName?: StatusName;
  /** Atlassian Account ID of the Jira user. */
  ownerId?: JiraUserAccountId;
  /** Array of labels associated to this entity. */
  labels?: Labels;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
}

export type WebLinkInputWithMandatoryDescription = WebLinkInput;

export interface TestPlanTestCycleLinkInput {
  /**
   * The ID or key of the test cycle. Test cycle keys are of the format [A-Z]+-R[0-9]+
   * @pattern ([0-9]+)|(.+-R[0-9]+)
   */
  testCycleIdOrKey: string;
}

export type TestExecutionList = PagedList & {
  values?: TestExecution[];
};

export interface TestExecution {
  id: EntityId;
  /**
   * Test execution key
   * @pattern .+-E[0-9]+
   * @example "SA-E10"
   */
  key?: string;
  project: ProjectLink;
  testCase: TestCaseVersionLink;
  environment?: EnvironmentLink;
  jiraProjectVersion?: JiraProjectVersion;
  testExecutionStatus: StatusLink;
  /** The actual end date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z' */
  actualEndDate?: ActualEndDate;
  /**
   * Estimated duration in milliseconds.
   * @format int64
   * @min 0
   * @example 138000
   */
  estimatedTime?: number;
  /**
   * Actual test execution time in milliseconds.
   * @format int64
   * @min 0
   * @example 120000
   */
  executionTime?: number;
  /** Atlassian Account ID of the Jira user. */
  executedById?: JiraUserAccountId;
  /** Atlassian Account ID of the Jira user. */
  assignedToId?: JiraUserAccountId;
  /** Comment added against overall test case execution. */
  comment?: Comment;
  /** Indicates if the test execution was done manually or not. */
  automated?: boolean;
  testCycle?: TestCycleLink;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
  links?: TestExecutionLinkList;
}

/** @example {"id":10005,"self":"https://example.com/rest/api/v2/environment/10005"} */
export type EnvironmentLink = ResourceId & Link;

/**
 * The actual end date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z'
 * @format date-time
 * @example "2018-05-20T13:15:13Z"
 */
export type ActualEndDate = string;

/**
 * Comment added against overall test case execution.
 * @example "Test failed user could not login"
 */
export type Comment = string;

/** @example {"id":10010,"self":"https://<api-base-url>/testcycles/10010"} */
export type TestCycleLink = Link & {
  id?: EntityId;
};

export type TestExecutionLinkList = Link & {
  /** A list of Jira issues linked to this entity */
  issues?: IssueLinkList;
};

export interface TestExecutionInput {
  /**
   * Jira project key.
   * @pattern ([A-Z][A-Z_0-9]+)
   * @example "TIS"
   */
  projectKey: string;
  /**
   * Key of test case the execution applies to. NOTE: Test cases with call to test, parameters and test data are not supported.
   * @pattern (.+-T[0-9]+)
   * @example "SA-T10"
   */
  testCaseKey: string;
  /**
   * Key of test cycle the execution applies to.
   * @pattern ([0-9]+)|(.+-R[0-9]+)
   * @example "SA-R10"
   */
  testCycleKey: string;
  /** The status name. */
  statusName: StatusName;
  testScriptResults?: TestScriptResultInput[];
  /**
   * Environment assigned to the test case.
   * @example "Chrome Latest Version"
   */
  environmentName?: string;
  /** The actual end date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z' */
  actualEndDate?: ActualEndDate;
  /**
   * Actual test execution time in milliseconds.
   * @format int64
   * @min 0
   * @example 120000
   */
  executionTime?: number;
  /** Atlassian Account ID of the Jira user. */
  executedById?: JiraUserAccountId;
  /** Atlassian Account ID of the Jira user. */
  assignedToId?: JiraUserAccountId;
  /** Comment added against overall test case execution. */
  comment?: Comment;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
}

export interface TestScriptResultInput {
  /** The status name. */
  statusName: StatusName;
  /** The actual end date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z' */
  actualEndDate?: ActualEndDate;
  /**
   * free text field to provide more info on result of step execution.
   * @example "User logged in successfully"
   */
  actualResult?: string;
}

export type CursorPagedTestExecutionList = CursorPagedList & {
  values?: TestExecution[];
};

export interface TestExecutionUpdate {
  /** The status name. */
  statusName?: StatusName;
  /**
   * Environment assigned to the test case.
   * @example "Chrome Latest Version"
   */
  environmentName?: string;
  /** The actual end date of the test cycle. Format: yyyy-MM-dd'T'HH:mm:ss'Z' */
  actualEndDate?: ActualEndDate;
  /**
   * Actual test execution time in milliseconds.
   * @format int64
   * @min 0
   * @example 120000
   */
  executionTime?: number;
  /** Atlassian Account ID of the Jira user. */
  executedById?: JiraUserAccountId;
  /** Atlassian Account ID of the Jira user. */
  assignedToId?: JiraUserAccountId;
  /** Comment added against overall test case execution. */
  comment?: Comment;
}

/** Response body when retrieving test steps for a test execution */
export type TestExecutionTestStepsList = PagedList & {
  /** The list of test steps */
  values?: TestExecutionStep[];
};

/** Inline test step */
export interface TestExecutionStep {
  inline?: {
    /**
     * The instruction to be followed
     * @example "Attempt to login to the application"
     */
    description?: string;
    /**
     * Any test data required to perform the instruction (optional). The fields values provided can be interpolated into the description.
     * @example "Username = SmartBear Password = weLoveAtlassian"
     */
    testData?: string;
    /**
     * The expected outcome of executing the instruction
     * @example "Login succeeds, web-app redirects to the dashboard view"
     */
    expectedResult?: string;
    /**
     * The actual outcome of executing the instruction
     * @example "Login succeeded, web-app redirected to the dashboard view"
     */
    actualResult?: string;
    /**
     * The id of the test data row
     * @example 1
     */
    testDataRowNumber?: number;
    /**
     * The AI reference. Zephyr only feature
     * @example "Not available yet"
     */
    reflectRef?: string;
    status?: StatusLink;
  };
}

export interface TestStepsUpdate {
  steps?: TestStepUpdate[];
}

export interface TestStepUpdate {
  /** The actual result. */
  actualResult?: ActualResult;
  /** The status name. */
  statusName?: StatusName;
}

/**
 * The actual result.
 * @example "User logged in successfully"
 */
export type ActualResult = string;

export interface TestResultNotFoundOrUserAccessError {
  /** @example 404 */
  errorCode: number;
  /** @example "Test execution does not exist or you do not have access to it" */
  message: string;
}

export interface TestExecutionImmutableError {
  /** @example 409 */
  errorCode: number;
  /** @example "The test execution you are trying to update is immutable. Please check if there's a more recent execution for this test case" */
  message: string;
}

export interface TestStepNumberMismatchUnprocessableError {
  /** @example 422 */
  errorCode: number;
  /** @example "Sent steps are not matching test execution steps" */
  message: string;
}

export interface TestStepTestDataUnprocessableError {
  /** @example 422 */
  errorCode: number;
  /** @example "Update of test execution containing test data is not supported" */
  message: string;
}

export type ProjectList = PagedList & {
  values?: Project[];
};

export interface Project {
  /** @format int64 */
  id: number;
  /** @format int64 */
  jiraProjectId: number;
  key: string;
  enabled: boolean;
}

/** Valid values: `"TEST_CASE"`, `"TEST_PLAN"`, `"TEST_CYCLE"` */
export type FolderType = string;

export type FolderList = PagedList & {
  values?: Folder[];
};

export interface Folder {
  id: EntityId;
  parentId: EntityId;
  name: EntityName;
  index: Index;
  /** Valid values: `"TEST_CASE"`, `"TEST_PLAN"`, `"TEST_CYCLE"` */
  folderType: FolderType;
  project?: ProjectLink;
}

/**
 * @format int64
 * @min 0
 * @example 1
 */
export type Index = number;

export interface FolderInput {
  /**
   * Folder ID of the parent folder. Must be `null` for root folders.
   * @format int64
   * @min 1
   */
  parentId?: number;
  /**
   * Folder name.
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /** Jira project key. */
  projectKey: ProjectKey;
  /** Valid values: `"TEST_CASE"`, `"TEST_PLAN"`, `"TEST_CYCLE"` */
  folderType: FolderType;
}

export type PriorityList = PagedList & {
  values?: Priority[];
};

/** @example {"id":1,"project":{"id":10005,"self":"https://<api-base-url>/projects/10005"},"name":"Critical","description":"Top level priority","index":1,"color":"#FFF","default":false} */
export type Priority = OptionValue & {
  /** A color in hexadecimal format */
  color?: EntityColor;
  /** @default false */
  default?: boolean;
};

export interface OptionValue {
  id: EntityId;
  project: ProjectLink;
  name: EntityName;
  /** Description outlining the scope. */
  description?: EntityDescription;
  index: Index;
}

/**
 * A color in hexadecimal format
 * @pattern #([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})
 * @example "#FFF or #FFFFFF"
 */
export type EntityColor = string;

export interface CreatePriorityInput {
  /** Jira project key. */
  projectKey: ProjectKey;
  /** The priority name. */
  name: PriorityName;
  /** The priority description. */
  description?: PriorityDescription;
  /** A color in hexadecimal format */
  color?: EntityColor;
}

/**
 * The priority description.
 * @minLength 1
 * @maxLength 255
 * @example "Top level priority"
 */
export type PriorityDescription = string;

export interface PriorityNotFoundOrUserAccessError {
  /** @example 404 */
  errorCode: number;
  /** @example "Priority '1' does not exist or you do not have access to it" */
  message: string;
}

export interface UpdatePriorityInput {
  id: EntityId;
  project: ProjectLink;
  /** The priority name. */
  name: PriorityName;
  /** The priority description. */
  description?: PriorityDescription;
  index: Index;
  default: boolean;
  /** A color in hexadecimal format */
  color?: EntityColor;
}

/** Valid values: `"TEST_CASE"`, `"TEST_PLAN"`, `"TEST_CYCLE"`, `"TEST_EXECUTION"` */
export type StatusType = string;

export type StatusList = PagedList & {
  values?: Status[];
};

export type Status = OptionValue & {
  color?: string;
  /** @default false */
  archived?: boolean;
  /** @default false */
  default?: boolean;
};

export interface CreateStatusInput {
  /** Jira project key. */
  projectKey: ProjectKey;
  /** The status name. */
  name: StatusName;
  /** Valid values: `"TEST_CASE"`, `"TEST_PLAN"`, `"TEST_CYCLE"`, `"TEST_EXECUTION"` */
  type: StatusType;
  /** The status description. */
  description?: StatusDescription;
  /** A color in hexadecimal format */
  color?: EntityColor;
}

/**
 * The status description.
 * @minLength 1
 * @maxLength 255
 * @example "An important status"
 */
export type StatusDescription = string;

export interface StatusNotFoundOrUserAccessError {
  /** @example 404 */
  errorCode: number;
  /** @example "Status '1' does not exist or you do not have access to it" */
  message: string;
}

export interface UpdateStatusInput {
  id: EntityId;
  project: ProjectLink;
  /** The status name. */
  name: StatusName;
  /** The status description. */
  description?: StatusDescription;
  index: Index;
  archived: boolean;
  default: boolean;
  /** A color in hexadecimal format */
  color?: EntityColor;
}

export type EnvironmentList = PagedList & {
  values?: Environment[];
};

export type Environment = OptionValue & {
  /** @default false */
  archived?: boolean;
};

export interface CreateEnvironmentInput {
  /** Jira project key. */
  projectKey: ProjectKey;
  /** The environment name. */
  name: EnvironmentName;
  /** The environment description. */
  description?: EnvironmentDescription;
}

/**
 * The environment name.
 * @minLength 1
 * @maxLength 255
 * @example "Development"
 */
export type EnvironmentName = string;

/**
 * The environment description.
 * @minLength 1
 * @maxLength 255
 * @example "New development environment"
 */
export type EnvironmentDescription = string;

export interface DuplicatedNameError {
  /** @example 400 */
  errorCode: number;
  /** @example "An environment with this name already exists." */
  message: string;
}

export interface EmptyNameError {
  /** @example 400 */
  errorCode: number;
  /** @example "The name field cannot be null or empty" */
  message: string;
}

export interface UserAccessError {
  /** @example 400 */
  errorCode: number;
  /** @example "Cannot access projects 'ProjectKey'" */
  message: string;
}

export interface ProjectKeyMismatchError {
  /** @example 400 */
  errorCode: number;
  /** @example "Provided project does not match the current project." */
  message: string;
}

export interface EnvironmentNotFoundOrUserAccessError {
  /** @example 404 */
  errorCode: number;
  /** @example "Environment '1' does not exist or you do not have access to it" */
  message: string;
}

export interface UpdateEnvironmentInput {
  id: EntityId;
  project: ProjectLink;
  /** The environment name. */
  name: EnvironmentName;
  /** The environment description. */
  description?: EnvironmentDescription;
  index: Index;
}

export interface IndexValueError {
  /** @example 400 */
  errorCode: number;
  /** @example "Index must be an integer greater or equal to 0" */
  message: string;
}

/** A list of test case keys and versions */
export type TestCaseKeyAndVersionList = TestCaseKeyAndVersion[];

/** @example {"key":"PROJ-42","version":1,"self":"https://<api-base-url>/testcases/PROJ-42/versions/1"} */
export type TestCaseKeyAndVersion = KeyAndVersion & Link;

export interface KeyAndVersion {
  key?: string;
  /** @format int64 */
  version?: number;
}

/** A list of test cycles */
export type TestCycleIdList = TestCycleId[];

/** @example {"id":1,"self":"https://<api-base-url>/testcycles/1"} */
export type TestCycleId = ResourceId & Link;

/** A list of test plans */
export type TestPlanIdList = TestPlanId[];

/** @example {"id":1,"self":"https://<api-base-url>/testplans/1"} */
export type TestPlanId = ResourceId & Link;

/** A list of test executions */
export type TestExecutionIdList = TestExecutionId[];

/** @example {"id":1,"self":"https://<api-base-url>/testexecutions/1"} */
export type TestExecutionId = ResourceId & Link;

/** Pass this object as a JSON in your form-data alongside the file. Make sure you set the type of this object as `application/json` otherwise the object will be ignored. */
export interface AutomationTestCycleInput {
  name?: EntityName;
  /** Description outlining the scope. */
  description?: EntityDescription;
  /** ID of the version from Jira. */
  jiraProjectVersion?: JiraProjectVersionId;
  /**
   * ID of a folder to place the entity within.
   * @format int64
   * @min 1
   */
  folderId?: number;
  /**
   * Multi-line text fields should denote a new line with the \<br\> syntax.
   * Dates should be in the format 'yyyy-MM-dd'.
   * Users should provided by the user ID.
   */
  customFields?: CustomFields;
}

export interface AutomationResult {
  testCycle?: AutomationTestCycle;
}

export interface AutomationTestCycle {
  /**
   * The id of the newly created test cycle.
   * @format int64
   * @min 1
   */
  id?: number;
  /** The URL pointing to the newly created test cycle. */
  url?: string;
  /**
   * The key of the newly created test cycle.
   * @pattern ([0-9]+)|(.+-R[0-9]+)
   */
  key?: string;
}
