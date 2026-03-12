# 🕐 Clock

> **The world's most over-engineered way to display today's date**  
> _Now with 100% more CO2 emissions per timestamp!_

[![npm version](https://badge.fury.io/js/@christopher-drifte%2Fclock.svg)](https://www.npmjs.com/package/@christopher-drifte/clock)

## What is this madness?

A fully automated, TypeScript-powered, CI/CD-integrated npm package that tells you what day it is. Because `new Date()` was apparently too simple.

**Live demo:** [clock-ai.vercel.app](https://clock-ai.vercel.app/)

## The Rube Goldberg Machine 🎪

Here's how this beautiful disaster works:

1. **⏰ n8n Schedule Trigger** fires every minute
2. **📅 Date & Time Node** grabs the current timestamp
3. **🤖 GitHub API** commits the date to `data/date.json` with a `feat:` message
4. **🎯 Release Please** detects the commit and creates a version bump PR
5. **🪝 GitHub Webhook** catches the PR creation
6. **🤝 n8n Auto-merge** immediately merges the PR (because who needs code review?)
7. **🚀 GitHub Actions** builds, tests, and publishes to npm with provenance
8. **📦 Dependabot** in [clock-web](https://github.com/christopher-drifte/clock-web) detects the new version
9. **🔄 Auto-merge** merges the dependency update
10. **☁️ Vercel** auto-deploys to production

**Result:** The website updates with today's date... which you could have just checked on your phone.

## Installation

```bash
npm install @christopher-drifte/clock
```

## Usage

```javascript
import { date } from '@christopher-drifte/clock';

console.log(date);
// Output: "Today is 12 March 2026"
```

## API

### `date`

A string containing today's date formatted as "Today is [day] [month] [year]".

**TypeScript types included!** ✨

## Features

- ✅ Browser-compatible (uses JSON imports, no `fs` modules)
- ✅ TypeScript with full type definitions
- ✅ Automated version management with Release Please
- ✅ Published with npm provenance for supply chain security
- ✅ Auto-deployed to production via Dependabot + Vercel
- ✅ Maximum cloud computing resources for minimal functionality
- ✅ Changelog auto-generated for every date update
- ❌ Zero practical value

## Architecture

```
n8n (local)
  ↓
GitHub API (commit)
  ↓
Release Please (PR)
  ↓
n8n Webhook (auto-merge)
  ↓
GitHub Actions (build + publish)
  ↓
npm Registry
  ↓
Dependabot (clock-web repo)
  ↓
Auto-merge workflow
  ↓
Vercel (deployment)
  ↓
🎉 Production!
```

## Why?

¯\\\_(ツ)\_/¯

To demonstrate modern DevOps practices? To practice CI/CD? To see if we could? 

Honestly, we're not sure anymore. But it works, it's tested, and it deploys automatically. That's got to count for something.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

## Sister Projects

- **[clock-web](https://github.com/christopher-drifte/clock-web)** - React app that displays the date from this package
- **[clock-ai.vercel.app](https://clock-ai.vercel.app/)** - Live deployment

## Carbon Footprint 🌍

Every date update triggers:
- 1 n8n workflow execution
- 2 GitHub Actions workflows
- 1 npm package publish
- 1 Dependabot PR
- 1 Vercel deployment

**Estimated CO2 per date change:** More than using a calendar 📅

## License

ISC - Because even absurd projects need licenses
