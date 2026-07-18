/**
 * Digital Twin mock enterprise state.
 *
 * The AI Workplace Digital Twin sits above enterprise SaaS tools (GitHub, Jira,
 * Slack, Datadog, Gmail, Calendar) and represents the live organizational state.
 * For the hackathon MVP, these integrations are mocked with state objects that
 * represent what real MCP servers return.
 */
export type DepartmentId = 'engineering' | 'operations' | 'support' | 'hr' | 'finance' | 'security';
export type HealthStatus = 'healthy' | 'warning' | 'critical';
export interface DepartmentHealth {
    departmentId: DepartmentId;
    departmentName: string;
    healthScore: number;
    status: HealthStatus;
    lastUpdated: string;
    summary: string;
    owningAgent: string;
    sources: string[];
}
export type IncidentSeverity = 'critical' | 'high' | 'medium' | 'low';
export type IncidentStatus = 'detected' | 'investigating' | 'analyzed' | 'mitigating' | 'resolved' | 'pending_approval';
export type RecommendationPriority = 'high' | 'medium' | 'low';
export type ActionStatus = 'pending' | 'approved' | 'executing' | 'executed' | 'rejected' | 'failed';
export interface Recommendation {
    recommendationId: string;
    incidentId: string;
    priority: RecommendationPriority;
    title: string;
    description: string;
    mcpServer: string;
    status: ActionStatus;
    evidence?: string;
    confidence?: number;
    businessImpact?: string;
}
export interface TimelineEntry {
    timestamp: string;
    agent: string;
    event: string;
    detail: string;
}
export interface Incident {
    incidentId: string;
    title: string;
    category: string;
    severity: IncidentSeverity;
    status: IncidentStatus;
    timestamp: string;
    affectedDepartments: DepartmentId[];
    affectedSystems: string[];
    trigger: string;
    rootCause: string;
    confidenceScore: number;
    businessImpact: {
        summary: string;
        engineeringRisk: HealthStatus;
        launchDelay: 'unlikely' | 'possible' | 'likely';
        customerImpact: HealthStatus;
        revenueRisk: HealthStatus;
        projectedHealthScore: number;
    };
    timeline: TimelineEntry[];
    recommendations: Recommendation[];
}
export interface AgentLog {
    logId: string;
    agent: string;
    timestamp: string;
    action: string;
    durationMs: number;
    status: 'success' | 'running' | 'failed';
    detail: string;
}
export interface GitHubWorkflowRun {
    id: string;
    name: string;
    status: 'queued' | 'in_progress' | 'completed';
    conclusion: 'success' | 'failure' | 'cancelled' | null;
    logs: string;
    commitSha: string;
    createdAt: string;
}
export interface GitHubPullRequest {
    id: string;
    title: string;
    author: string;
    mergeable: boolean;
    checksStatus: 'success' | 'failure' | 'pending';
    reviewsCount: number;
    createdAt: string;
}
export interface GitHubDeployment {
    id: string;
    env: string;
    status: 'queued' | 'in_progress' | 'success' | 'failed';
    commitSha: string;
    createdAt: string;
}
export interface GitHubIssue {
    id: string;
    title: string;
    timestamp: string;
}
export interface GitHubMockState {
    workflowRuns: GitHubWorkflowRun[];
    pullRequests: GitHubPullRequest[];
    deployments: GitHubDeployment[];
    issues: GitHubIssue[];
    averageIssueRate: number;
}
export interface DatadogMockState {
    cpu: number;
    memory: number;
    httpCheckFailures: number;
    lastUpdated: string;
}
export interface JiraSprint {
    sprintId: string;
    name: string;
    storyPointsTotal: number;
    storyPointsRemaining: number;
    velocity: number;
    startDate: string;
    endDate: string;
}
export interface JiraIssue {
    ticketId: string;
    title: string;
    status: 'Todo' | 'In Progress' | 'Done' | 'In Review';
    priority: 'critical' | 'high' | 'medium' | 'low';
    assignee: string;
    completionProgress: number;
}
export interface JiraMockState {
    sprints: JiraSprint[];
    issues: JiraIssue[];
}
export interface GoogleCalendarEvent {
    id: string;
    title: string;
    type: 'release' | 'demo' | 'review' | 'ooo' | 'regular';
    startTime: string;
    endTime: string;
    attendees: string[];
}
export interface CalendarMockState {
    events: GoogleCalendarEvent[];
}
export interface EnterpriseState {
    github: GitHubMockState;
    datadog: DatadogMockState;
    jira: JiraMockState;
    calendar: CalendarMockState;
    isMonitoringActive: boolean;
    lastPollTimestamp: string | null;
    pollCount: number;
}
export declare const initialEnterpriseState: EnterpriseState;
export declare const departments: DepartmentHealth[];
export declare const incidents: Incident[];
export declare const agentLogs: AgentLog[];
/** The canonical multi-agent pipeline for live visualization. */
export declare const agentPipeline: string[];
//# sourceMappingURL=digital-twin.data.d.ts.map