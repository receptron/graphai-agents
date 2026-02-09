# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo containing official GraphAI agent packages. Uses Yarn workspaces to manage multiple agent packages.

## Commands

```bash
yarn test       # Run tests across all workspaces
yarn build      # Build all packages
yarn eslint     # Run ESLint across all workspaces
yarn format     # Format all packages
yarn doc        # Generate documentation
```

## Architecture

Yarn workspaces monorepo with packages:
- `packages/agents/` - Core agent implementations
- `packages/agent_template/` - Agent template
- `packages/agent_generator/` - Agent code generator
- `packages/agent_utils/` - Shared utilities
- `packages/all/` - Meta-package exporting all agents
- `packages/node-browser-detect-agent/` - Platform detection agent
- `src/monoRepoAgentDocs.ts` - Documentation generator
