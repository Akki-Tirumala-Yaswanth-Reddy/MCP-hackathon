import { ExecutionContext } from '@nitrostack/core';
import { DigitalTwinService } from './digital-twin.service.js';
/**
 * AI Workplace Digital Twin tools.
 *
 * These tools expose the multi-agent operational control center:
 *  - Monitoring Agent: start/stop monitoring, live status, trigger simulator
 *  - Engineering Agent: get engineering health metrics (weighted), root-cause analysis
 *  - Executive Agent: company health, incident reports, business impact, recommendations
 *  - Action Agent: approve / reject recommendation execution
 */
export declare class DigitalTwinTools {
    private readonly twin;
    constructor(twin: DigitalTwinService);
    startMonitoring(_input: any, ctx: ExecutionContext): Promise<{
        success: boolean;
        message: string;
    }>;
    stopMonitoring(_input: any, ctx: ExecutionContext): Promise<{
        success: boolean;
        message: string;
    }>;
    getMonitoringStatus(_input: any, ctx: ExecutionContext): Promise<{
        isActive: boolean;
        lastPollTimestamp: string | null;
        pollCount: number;
        githubRunsCount: number;
        jiraSprintsCount: number;
        datadogHttpCheckFailures: number;
        recentNotifications: import("./digital-twin.service.js").NotificationLog[];
    }>;
    getCompanyHealth(_input: any, ctx: ExecutionContext): Promise<{
        companyHealthScore: number;
        status: import("./digital-twin.data.js").HealthStatus;
        openIncidents: number;
        criticalRisks: number;
        departments: {
            departmentId: import("./digital-twin.data.js").DepartmentId;
            departmentName: string;
            healthScore: number;
            status: import("./digital-twin.data.js").HealthStatus;
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
    }>;
    getEngineeringHealth(_input: any, ctx: ExecutionContext): Promise<{
        engineeringHealthScore: number;
        status: string;
        breakdown: {
            deploymentSuccess: number;
            cicdSuccess: number;
            sprintHealth: number;
            issueRate: number;
            infrastructureHealth: number;
        };
        metricsWeights: {
            deploymentSuccess: string;
            cicdSuccess: string;
            sprintHealth: string;
            issueRate: string;
            infrastructureHealth: string;
        };
        lastUpdated: string;
    }>;
    getIncidentReport(input: {
        incidentId: string;
    }, ctx: ExecutionContext): Promise<import("./digital-twin.data.js").Incident>;
    getRecommendations(input: {
        incidentId?: string;
    }, ctx: ExecutionContext): Promise<{
        recommendations: import("./digital-twin.data.js").Recommendation[];
    }>;
    approveRecommendation(input: {
        recommendationId: string;
    }, ctx: ExecutionContext): Promise<{
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
    }>;
    rejectRecommendation(input: {
        recommendationId: string;
    }, ctx: ExecutionContext): Promise<{
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
    }>;
    triggerIncident(input: {
        incidentType: string;
    }, ctx: ExecutionContext): Promise<{
        success: boolean;
        message: string;
    }>;
    executiveChat(input: {
        question: string;
    }, ctx: ExecutionContext): Promise<{
        question: string;
        answer: string;
        relatedIncidents: string[];
        answeredBy: string;
    }>;
    getAgentActivity(_input: any, ctx: ExecutionContext): Promise<{
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
    }>;
    get_company_health(input: any, ctx: ExecutionContext): Promise<{
        companyHealthScore: number;
        status: import("./digital-twin.data.js").HealthStatus;
        openIncidents: number;
        criticalRisks: number;
        departments: {
            departmentId: import("./digital-twin.data.js").DepartmentId;
            departmentName: string;
            healthScore: number;
            status: import("./digital-twin.data.js").HealthStatus;
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
    }>;
    list_incidents(_input: any, ctx: ExecutionContext): Promise<{
        incidents: {
            incidentId: string;
            title: string;
            category: string;
            severity: import("./digital-twin.data.js").IncidentSeverity;
            status: import("./digital-twin.data.js").IncidentStatus;
            timestamp: string;
            confidenceScore: number;
            affectedDepartments: import("./digital-twin.data.js").DepartmentId[];
            affectedSystems: string[];
            openRecommendations: number;
        }[];
    }>;
    get_incident(input: {
        incidentId: string;
    }, ctx: ExecutionContext): Promise<import("./digital-twin.data.js").Incident>;
    approve_action(input: {
        recommendationId: string;
        approve?: boolean;
    }, ctx: ExecutionContext): Promise<{
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
    }>;
    get_agent_activity(input: any, ctx: ExecutionContext): Promise<{
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
    }>;
}
//# sourceMappingURL=digital-twin.tools.d.ts.map