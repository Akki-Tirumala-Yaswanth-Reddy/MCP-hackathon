var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nitrostack/core';
import { DigitalTwinTools } from './digital-twin.tools.js';
import { DigitalTwinService } from './digital-twin.service.js';
import { DigitalTwinPrompts } from './digital-twin.prompts.js';
/**
 * DigitalTwinModule — the AI Workplace Digital Twin.
 *
 * Multi-agent enterprise operations control center: monitoring, root-cause
 * analysis, business impact prediction, prioritized recommendations, approved
 * action execution through MCP servers, and an executive copilot.
 */
let DigitalTwinModule = class DigitalTwinModule {
};
DigitalTwinModule = __decorate([
    Module({
        name: 'digital-twin',
        description: 'AI Workplace Digital Twin — multi-agent enterprise operations control center',
        controllers: [DigitalTwinTools, DigitalTwinPrompts],
        providers: [DigitalTwinService],
    })
], DigitalTwinModule);
export { DigitalTwinModule };
//# sourceMappingURL=digital-twin.module.js.map