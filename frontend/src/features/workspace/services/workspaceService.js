import { getCountdown } from './countdownService'

const missionControlState = {
  event: {
    timeLeft: '18d 06h',
    greenFlagLabel: 'Saturday at 16:30 CEST',
  },
  phases: ['Planning', 'Ready', 'Race', 'Finished', 'Archived'],
  readinessItems: [
    { item: 'Race workspace created', state: 'done', weight: 20 },
    { item: 'Driver roster validated', state: 'done', weight: 20 },
    { item: 'Stint and fuel plan drafted', state: 'done', weight: 20 },
    { item: 'Briefing documents uploaded', state: 'inReview', weight: 20, partialProgress: 12 },
    { item: 'Spotter schedule confirmed', state: 'open', weight: 20 },
  ],
  actions: [
    {
      title: 'Confirm night stint rotation',
      owner: 'Race engineer',
      due: 'Today · 18:00',
      description: 'Review the final double-stint sequence and confirm driver availability before publishing the briefing.',
      relatedState: 'inReview',
      priority: 1,
    },
  ],
  modules: [
    { name: 'Overview', state: 'Complete' },
    { name: 'Members', state: 'Complete' },
    { name: 'Documents', state: 'In review' },
    { name: 'Plans', state: 'In review' },
    { name: 'Files', state: 'Open' },
    { name: 'Settings', state: 'Complete' },
  ],
  team: {
    ready: 6,
    total: 7,
    description: 'Drivers and engineers are available. One spotter confirmation remains open.',
    members: [
      { name: 'Pedro', role: 'Driver', state: 'Ready' },
      { name: 'Marina', role: 'Driver', state: 'Ready' },
      { name: 'Lucas', role: 'Engineer', state: 'Ready' },
      { name: 'Rafael', role: 'Spotter', state: 'Pending' },
    ],
  },
  schedule: [
    { time: 'Today · 18:00', title: 'Night stint rotation review' },
    { time: 'Tomorrow · 11:30', title: 'Setup and tyre window sync' },
    { time: 'Friday · 20:00', title: 'Final team briefing' },
  ],
}

const checklistStatusByState = {
  done: 'Done',
  inReview: 'In review',
  open: 'Open',
}

function getStatusTone(state) {
  if (state === 'Done' || state === 'Complete' || state === 'Ready') return 'success'
  if (state === 'In review' || state === 'Pending') return 'warning'
  return 'neutral'
}

function getChecklist(readinessItems) {
  return readinessItems.map((item) => {
    const status = checklistStatusByState[item.state]

    return {
      item: item.item,
      status,
      tone: getStatusTone(status),
    }
  })
}

function getProgress(readinessItems) {
  return readinessItems.reduce((total, item) => {
    if (item.state === 'done') return total + item.weight
    if (item.state === 'inReview') return total + item.partialProgress
    return total
  }, 0)
}

function getNextAction(workspaceState) {
  const activeStates = workspaceState.readinessItems
    .filter((item) => item.state !== 'done')
    .map((item) => item.state)

  return workspaceState.actions
    .filter((action) => activeStates.includes(action.relatedState))
    .sort((first, second) => first.priority - second.priority)[0]
}

function getTeamStatus(team) {
  return {
    title: `${team.ready} / ${team.total} ready`,
    description: team.description,
    members: team.members.map((member) => ({
      ...member,
      tone: getStatusTone(member.state),
    })),
  }
}

export function getWorkspaceMissionControl(workspace) {
  const progress = getProgress(missionControlState.readinessItems)
  const checklist = getChecklist(missionControlState.readinessItems)
  const countdown = getCountdown(missionControlState.event)
  const nextAction = getNextAction(missionControlState)
  const teamStatus = getTeamStatus(missionControlState.team)

  return {
    workspaceStatus: {
      phase: 'Planning',
      raceState: `Operational plan ${progress}% ready`,
      summary: `${workspace.name} preparation is on track. Driver rotation, setup notes and briefing documents are aligned for the next review.`,
      event: workspace.name,
      car: 'Ford Mustang GT3',
      track: workspace.trackName,
      durationHours: workspace.durationHours,
      progress,
    },
    phases: missionControlState.phases,
    progress,
    checklist,
    countdown,
    nextAction,
    teamStatus,
    modules: missionControlState.modules.map((module) => ({
      ...module,
      tone: getStatusTone(module.state),
    })),
    schedule: missionControlState.schedule,
    missionCards: [
      {
        label: 'Current race state',
        title: 'Planning locked for review',
        description: 'Core race context is defined and the team is validating handoff details before race mode.',
        tone: 'highlight',
        meta: 'Workspace status',
      },
      {
        label: 'Countdown',
        title: countdown.title,
        description: countdown.description,
        meta: countdown.meta,
      },
      {
        label: 'Preparation progress',
        title: `${progress}%`,
        description: 'Briefing, driver roster, stint plan and documents are moving toward ready state.',
        meta: 'Progress card',
      },
      {
        label: 'Team status',
        title: teamStatus.title,
        description: teamStatus.description,
        meta: 'Operations',
      },
    ],
  }
}
