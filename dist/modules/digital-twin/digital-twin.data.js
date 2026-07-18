/**
 * Digital Twin mock enterprise state.
 *
 * The AI Workplace Digital Twin sits above enterprise SaaS tools (GitHub, Jira,
 * Slack, Datadog, Gmail, Calendar) and represents the live organizational state.
 * For the hackathon MVP, these integrations are mocked with state objects that
 * represent what real MCP servers return.
 */
const now = () => new Date().toISOString();
const minutesAgo = (m) => new Date(Date.now() - m * 60 * 1000).toISOString();
const hoursAgo = (h) => new Date(Date.now() - h * 60 * 60 * 1000).toISOString();
const daysFromNow = (d) => new Date(Date.now() + d * 24 * 60 * 60 * 1000).toISOString();
// Initial SaaS State (Healthy / Nominal)
export const initialEnterpriseState = {
    github: {
        workflowRuns: [
            {
                id: 'run-100',
                name: 'CI Build & Test',
                status: 'completed',
                conclusion: 'success',
                logs: 'All 42 tests passed. Compile completed successfully.',
                commitSha: 'b45c21',
                createdAt: minutesAgo(15),
            }
        ],
        pullRequests: [
            {
                id: 'pr-45',
                title: 'feat: Add checkout multi-payment option',
                author: 'Sarah Jenkins',
                mergeable: true,
                checksStatus: 'success',
                reviewsCount: 2,
                createdAt: hoursAgo(4),
            }
        ],
        deployments: [
            {
                id: 'dep-90',
                env: 'production',
                status: 'success',
                commitSha: 'b45c21',
                createdAt: hoursAgo(12),
            }
        ],
        issues: [
            { id: 'issue-1', title: 'Dark mode contrast adjustment', timestamp: hoursAgo(5) },
            { id: 'issue-2', title: 'Typo in footer links', timestamp: hoursAgo(2) },
        ],
        averageIssueRate: 1.2, // 1.2 issues per hour
    },
    datadog: {
        cpu: 45, // 45% CPU
        memory: 62, // 62% RAM
        httpCheckFailures: 0,
        lastUpdated: now(),
    },
    jira: {
        sprints: [
            {
                sprintId: 'sprint-4',
                name: 'Q3 Sprint 4 - Checkout & Payments',
                storyPointsTotal: 80,
                storyPointsRemaining: 30,
                velocity: 8, // can complete 8 points per day
                startDate: daysFromNow(-8),
                endDate: daysFromNow(4), // 4 days left
            }
        ],
        issues: [
            {
                ticketId: 'PAY-882',
                title: 'Implement backup payment gateway provider',
                status: 'In Progress',
                priority: 'high',
                assignee: 'Alex Rivera',
                completionProgress: 85,
            },
            {
                ticketId: 'PAY-883',
                title: 'Fix credit card validation regex edgecase',
                status: 'Todo',
                priority: 'medium',
                assignee: 'Sarah Jenkins',
                completionProgress: 10,
            }
        ],
    },
    calendar: {
        events: [
            {
                id: 'evt-1',
                title: 'Sprint Demo & Release Review',
                type: 'release',
                startTime: daysFromNow(0.5), // in 12 hours
                endTime: daysFromNow(0.6),
                attendees: ['Alex Rivera', 'Sarah Jenkins', 'Marcus Chen (PM)'],
            }
        ]
    },
    isMonitoringActive: false,
    lastPollTimestamp: null,
    pollCount: 0,
};
// ---------------------------------------------------------------------------
// Departments (Live Digital Twin)
// ---------------------------------------------------------------------------
export const departments = [
    {
        departmentId: 'engineering',
        departmentName: 'Engineering',
        healthScore: 98,
        status: 'healthy',
        lastUpdated: now(),
        summary: 'All CI/CD pipelines green. Infrastructure metrics healthy.',
        owningAgent: 'Engineering Agent',
        sources: ['GitHub', 'Jira', 'Datadog'],
    },
    {
        departmentId: 'operations',
        departmentName: 'Operations',
        healthScore: 95,
        status: 'healthy',
        lastUpdated: now(),
        summary: 'Release schedules align with Jira progress. Sprint is on track.',
        owningAgent: 'Operations Agent',
        sources: ['Google Calendar', 'Jira'],
    },
    {
        departmentId: 'support',
        departmentName: 'Support',
        healthScore: 96,
        status: 'healthy',
        lastUpdated: now(),
        summary: 'Customer issue reports remain within baseline rates.',
        owningAgent: 'Support Agent',
        sources: ['GitHub Issues'],
    },
    {
        departmentId: 'hr',
        departmentName: 'HR',
        healthScore: 100,
        status: 'healthy',
        lastUpdated: now(),
        summary: 'No critical staffing absences or scheduling conflicts.',
        owningAgent: 'Operations Agent',
        sources: ['Google Calendar'],
    },
    {
        departmentId: 'finance',
        departmentName: 'Finance',
        healthScore: 98,
        status: 'healthy',
        lastUpdated: now(),
        summary: 'System metrics and checkouts operational. No revenue risks.',
        owningAgent: 'Executive Agent',
        sources: ['Datadog'],
    },
    {
        departmentId: 'security',
        departmentName: 'Security',
        healthScore: 100,
        status: 'healthy',
        lastUpdated: now(),
        summary: 'No system health check failures or unauthorized accesses.',
        owningAgent: 'Monitoring Agent',
        sources: ['Datadog'],
    },
];
// ---------------------------------------------------------------------------
// Incidents (with root cause, business impact, timeline, recommendations)
// ---------------------------------------------------------------------------
export const incidents = [];
// ---------------------------------------------------------------------------
// Agent activity log (Live Agent Visualization)
// ---------------------------------------------------------------------------
export const agentLogs = [
    {
        logId: 'LOG-INIT',
        agent: 'Monitoring Agent',
        timestamp: now(),
        action: 'Initialized Enterprise Digital Twin systems',
        durationMs: 120,
        status: 'success',
        detail: 'All metrics nominal. Live polling ready.',
    }
];
/** The canonical multi-agent pipeline for live visualization. */
export const agentPipeline = [
    'Monitoring Agent',
    'Engineering Agent',
    'Operations Agent',
    'Support Agent',
    'Executive Agent',
    'Action Agent',
];
//# sourceMappingURL=digital-twin.data.js.map