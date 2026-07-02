const raceBookDocuments = [
  {
    id: 'race-briefing',
    title: 'Race Briefing',
    category: 'Briefing',
    status: 'ready',
    owner: 'Team Manager',
    updatedAt: 'Today · 09:30',
    description: 'Weekend objectives, event format, driver expectations and communication cadence.',
    primaryAction: 'Open briefing',
    important: true,
  },
  {
    id: 'server-discord',
    title: 'Server & Discord',
    category: 'Operations',
    status: 'ready',
    owner: 'Race Engineer',
    updatedAt: 'Yesterday · 21:10',
    description: 'Server name, password handoff, Discord channels and voice fallback plan.',
    primaryAction: 'View access',
    important: true,
  },
  {
    id: 'setup-notes',
    title: 'Setup Notes',
    category: 'Car',
    status: 'in_review',
    owner: 'Lead Driver',
    updatedAt: 'Today · 11:45',
    description: 'Baseline setup notes, balance comments and known changes for race trim.',
    primaryAction: 'Review notes',
    important: true,
  },
  {
    id: 'fuel-strategy',
    title: 'Fuel Strategy',
    category: 'Strategy',
    status: 'draft',
    owner: 'Strategist',
    updatedAt: 'Today · 12:20',
    description: 'Fuel window assumptions, stint length targets and contingency references.',
    primaryAction: 'Continue draft',
    important: true,
  },
  {
    id: 'tyre-strategy',
    title: 'Tyre Strategy',
    category: 'Strategy',
    status: 'draft',
    owner: 'Race Engineer',
    updatedAt: 'Yesterday · 18:40',
    description: 'Tyre set allocation, double-stint guidance and pressure watch points.',
    primaryAction: 'Edit strategy',
  },
  {
    id: 'pit-rules',
    title: 'Pit Rules',
    category: 'Rules',
    status: 'ready',
    owner: 'Team Manager',
    updatedAt: 'Monday · 16:00',
    description: 'Pit entry, service order, driver swap procedure and penalty reminders.',
    primaryAction: 'Read rules',
  },
  {
    id: 'track-limits',
    title: 'Track Limits',
    category: 'Rules',
    status: 'in_review',
    owner: 'Spotter Lead',
    updatedAt: 'Today · 10:05',
    description: 'High-risk corners, warning policy and stint-by-stint monitoring plan.',
    primaryAction: 'Review limits',
  },
  {
    id: 'emergency-plan',
    title: 'Emergency Plan',
    category: 'Safety',
    status: 'missing',
    owner: 'Race Engineer',
    updatedAt: 'Not created',
    description: 'Incident escalation, disconnect procedure and emergency contact protocol.',
    primaryAction: 'Create plan',
    important: true,
  },
  {
    id: 'checklist',
    title: 'Checklist',
    category: 'Operations',
    status: 'ready',
    owner: 'Team Manager',
    updatedAt: 'Today · 08:55',
    description: 'Pre-race readiness checklist for drivers, setup files, documents and comms.',
    primaryAction: 'Open checklist',
  },
  {
    id: 'incident-log',
    title: 'Incident Log',
    category: 'Race Control',
    status: 'missing',
    owner: 'Analyst',
    updatedAt: 'Not created',
    description: 'Shared log for contacts, penalties, protests and post-race follow-up.',
    primaryAction: 'Create log',
  },
]

const statusMeta = {
  draft: { label: 'Draft', tone: 'neutral' },
  ready: { label: 'Ready', tone: 'success' },
  missing: { label: 'Missing', tone: 'warning' },
  in_review: { label: 'In review', tone: 'accent' },
}

function decorateDocument(document) {
  return {
    ...document,
    statusLabel: statusMeta[document.status].label,
    statusTone: statusMeta[document.status].tone,
    isMissing: document.status === 'missing',
  }
}

export function getRaceBook() {
  const documents = raceBookDocuments.map(decorateDocument)
  const importantDocuments = documents.filter((document) => document.important)
  const missingDocuments = documents.filter((document) => document.isMissing)

  return {
    title: 'Race Book',
    description: 'Centralized race documentation for briefing, rules, strategy and emergency procedures.',
    documents,
    importantDocuments,
    missingDocuments,
    stats: {
      total: documents.length,
      ready: documents.filter((document) => document.status === 'ready').length,
      inReview: documents.filter((document) => document.status === 'in_review').length,
      missing: missingDocuments.length,
    },
  }
}
