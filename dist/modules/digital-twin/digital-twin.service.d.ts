import { OnApplicationBootstrap, OnModuleDestroy } from '@nitrostack/core';
import { DepartmentId, Incident, Recommendation, AgentLog, HealthStatus } from './digital-twin.data.js';
export declare class StateGraph<State> {
    private nodes;
    private edges;
    private conditionalEdges;
    addNode(name: string, fn: (state: State) => Promise<Partial<State> | void>): this;
    addEdge(from: string, to: string): this;
    addConditionalEdges(from: string, conditionFn: (state: State) => string | Promise<string>): this;
    execute(initialState: State, startNode: string): Promise<State>;
}
export interface AgentState {
    incident: Incident;
    engineeringReport?: {
        rootCause: string;
        engineeringHealth: number;
        riskScore: number;
        confidence: number;
        summary: string;
        affectedSystems: string[];
    };
    executiveReport?: {
        businessImpact: string;
        recommendations: Recommendation[];
        priority: 'high' | 'medium' | 'low';
        companyHealth: number;
        approvalRequired: boolean;
    };
    logs: AgentLog[];
}
export interface NotificationLog {
    id: string;
    type: 'slack' | 'gmail';
    timestamp: string;
    recipient: string;
    subject: string;
    content: string;
}
export declare class DigitalTwinService implements OnApplicationBootstrap, OnModuleDestroy {
    private readonly departments;
    private readonly incidents;
    private readonly agentLogs;
    private enterpriseState;
    private notificationLogs;
    private pollInterval;
    private incidentIdCounter;
    onApplicationBootstrap(): void;
    onModuleDestroy(): void;
    startMonitoring(): void;
    stopMonitoring(): void;
    getMonitoringStatus(): {
        isActive: boolean;
        lastPollTimestamp: string | null;
        pollCount: number;
        githubRunsCount: number;
        jiraSprintsCount: number;
        datadogHttpCheckFailures: number;
        recentNotifications: NotificationLog[];
    };
    private fetchGitHubState;
    private fetchJiraState;
    private fetchDatadogState;
    private publishSlackWebhook;
    private callGemini;
    pollMetrics(): Promise<void>;
    private checkCICDFailures;
    private checkMergeFailures;
    private checkDeploymentFailures;
    private checkIssueSpikes;
    private checkInfrastructureMetrics;
    private checkSprintRisks;
    private checkFeatureMeetingOverlap;
    private checkDeadlineNear;
    private checkEmployeeLeaveRisks;
    private checkEmployeeLeaveMeetingOverlap;
    triggerScenario(type: string): {
        success: boolean;
        message: string;
    };
    private triggerIncidentFlow;
    private logAgentAction;
    private determineAffectedDepartments;
    private runMonitoringAgentNode;
    private runEngineeringAgentNode;
    private runExecutiveAgentNode;
    private runAwaitingApprovalNode;
    private runActionAgentNode;
    getEngineeringHealthMetrics(): {
        engineeringHealthScore: number;
        breakdown: {
            deploymentSuccess: number;
            cicdSuccess: number;
            sprintHealth: number;
            issueRate: number;
            infrastructureHealth: number;
        };
    };
    calculateEngineeringHealthScore(): number;
    recomputeDepartmentHealthScores(): void;
    approveAction(recommendationId: string, approve: boolean): {
        found: false;
        recommendation?: undefined;
        execution?: undefined;
    } | {
        found: true;
        recommendation: {
            recommendationId: string;
            incidentId: string;
            priority: import("./digital-twin.data.js").RecommendationPriority;
            title: string;
            description: string;
            mcpServer: string;
            status: import("./digital-twin.data.js").ActionStatus;
            evidence?: string;
            confidence?: number;
            businessImpact?: string;
        };
        execution?: undefined;
    } | {
        found: true;
        recommendation: {
            recommendationId: string;
            incidentId: string;
            priority: import("./digital-twin.data.js").RecommendationPriority;
            title: string;
            description: string;
            mcpServer: string;
            status: import("./digital-twin.data.js").ActionStatus;
            evidence?: string;
            confidence?: number;
            businessImpact?: string;
        };
        execution: {
            mcpServer: string;
            result: string;
            executedAt: string;
        };
    };
    private sendSimulatedSlackNotification;
    private sendSimulatedGmailNotification;
    getCompanyHealth(): {
        companyHealthScore: number;
        status: HealthStatus;
        openIncidents: number;
        criticalRisks: number;
        departments: {
            departmentId: DepartmentId;
            departmentName: string;
            healthScore: number;
            status: HealthStatus;
            summary: string;
            owningAgent: string;
            sources: string[];
        }[];
        recommendations: {
            recommendationId: string;
            incidentId: string;
            priority: import("./digital-twin.data.js").RecommendationPriority;
            title: string;
        }[];
        lastUpdated: string;
    };
    private statusFromScore;
    listIncidents(): {
        incidentId: string;
        title: string;
        category: string;
        severity: import("./digital-twin.data.js").IncidentSeverity;
        status: import("./digital-twin.data.js").IncidentStatus;
        timestamp: string;
        confidenceScore: number;
        affectedDepartments: DepartmentId[];
        affectedSystems: string[];
        openRecommendations: number;
    }[];
    getIncident(incidentId: string): Incident | undefined;
    getRootCause(incidentId: string): {
        incidentId: string;
        title: string;
        rootCause: string;
        confidenceScore: number;
        trigger: string;
        affectedSystems: string[];
        analyzedBy: string;
    } | undefined;
    getBusinessImpact(incidentId: string): {
        affectedDepartments: DepartmentId[];
        summary: string;
        engineeringRisk: HealthStatus;
        launchDelay: "unlikely" | "possible" | "likely";
        customerImpact: HealthStatus;
        revenueRisk: HealthStatus;
        projectedHealthScore: number;
        incidentId: string;
        title: string;
        analyzedBy: string;
    } | undefined;
    getRecommendations(incidentId?: string): Recommendation[];
    getAgentActivity(): {
        pipeline: string[];
        logs: {
            logId: string;
            agent: string;
            timestamp: string;
            action: string;
            durationMs: number;
            status: "success" | "running" | "failed";
            detail: string;
        }[];
    };
    answerExecutiveQuery(question: string): {
        question: string;
        answer: string;
        relatedIncidents: string[];
        answeredBy: string;
    };
}
//# sourceMappingURL=digital-twin.service.d.ts.map