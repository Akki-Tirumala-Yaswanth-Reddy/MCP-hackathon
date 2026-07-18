import { ExecutionContext } from '@nitrostack/core';
import { DigitalTwinService } from './digital-twin.service.js';
export declare class DigitalTwinPrompts {
    private readonly twin;
    constructor(twin: DigitalTwinService);
    getDashboardPrompt(_args: any, ctx: ExecutionContext): Promise<({
        role: "user";
        content: string;
    } | {
        role: "assistant";
        content: string;
    })[]>;
    getIncidentPrompt(args: {
        incidentId: string;
    }, ctx: ExecutionContext): Promise<({
        role: "user";
        content: string;
    } | {
        role: "assistant";
        content: string;
    })[]>;
    getRecommendationPrompt(args: {
        recommendationId: string;
    }, ctx: ExecutionContext): Promise<({
        role: "user";
        content: string;
    } | {
        role: "assistant";
        content: string;
    })[]>;
    getSimulationPrompt(args: {
        scenario?: string;
    }, ctx: ExecutionContext): Promise<({
        role: "user";
        content: string;
    } | {
        role: "assistant";
        content: string;
    })[]>;
}
//# sourceMappingURL=digital-twin.prompts.d.ts.map