import { members, squads } from '../../../domain/mockData'

const roleTone = {
  driver: 'accent',
  engineer: 'success',
  strategist: 'warning',
  manager: 'neutral',
}

const availabilityTone = {
  Available: 'success',
  Busy: 'warning',
  Offline: 'neutral',
}

function getWorkspaceMembers(workspace) {
  const squad = squads.find((item) => item.id === workspace.squadId)
  const squadMemberIds = squad?.memberIds ?? []

  return members
    .filter((member) => squadMemberIds.includes(member.id))
    .map((member) => ({
      ...member,
      primaryRole: member.roles[0],
      roleTone: roleTone[member.roles[0]] ?? 'neutral',
      availabilityTone: availabilityTone[member.status] ?? 'neutral',
    }))
}

function getRoleSummary(workspaceMembers) {
  const roles = workspaceMembers.flatMap((member) => member.roles)

  return Object.entries(
    roles.reduce((summary, role) => {
      return {
        ...summary,
        [role]: (summary[role] ?? 0) + 1,
      }
    }, {}),
  ).map(([role, count]) => ({
    role,
    count,
    tone: roleTone[role] ?? 'neutral',
  }))
}

function getAvailabilitySummary(workspaceMembers) {
  return ['Available', 'Busy', 'Offline'].map((status) => ({
    status,
    count: workspaceMembers.filter((member) => member.status === status).length,
    tone: availabilityTone[status] ?? 'neutral',
  }))
}

function getMembersAlerts(workspaceMembers) {
  const unavailableDrivers = workspaceMembers.filter(
    (member) => member.roles.includes('driver') && member.status !== 'Available',
  )

  if (unavailableDrivers.length === 0) {
    return [
      {
        id: 'members-alert-ready',
        severity: 'info',
        tone: 'accent',
        title: 'Crew coverage looks healthy',
        message: 'All assigned drivers are available for the next planning cycle.',
      },
    ]
  }

  return unavailableDrivers.map((member) => ({
    id: `members-alert-${member.id}`,
    severity: 'warning',
    tone: 'warning',
    title: `${member.name} is not available`,
    message: 'Review stint assignments before locking the race plan.',
  }))
}

export function getMembersOverview(workspace) {
  const squad = squads.find((item) => item.id === workspace.squadId)
  const workspaceMembers = getWorkspaceMembers(workspace)
  const availableCount = workspaceMembers.filter((member) => member.status === 'Available').length
  const driverCount = workspaceMembers.filter((member) => member.roles.includes('driver')).length

  return {
    hero: {
      title: 'Members',
      description: 'Manage the people assigned to this endurance workspace. Driver is a role, not the primary entity.',
      status: `${availableCount}/${workspaceMembers.length} available`,
      focus: squad?.name ?? 'Workspace squad',
    },
    summary: [
      { label: 'Assigned members', value: workspaceMembers.length, detail: 'Workspace crew' },
      { label: 'Drivers', value: driverCount, detail: 'Members with driver role' },
      { label: 'Available now', value: availableCount, detail: 'Ready for planning' },
      { label: 'Role coverage', value: getRoleSummary(workspaceMembers).length, detail: 'Active roles in squad' },
    ],
    members: workspaceMembers,
    roles: {
      title: 'Role coverage',
      items: getRoleSummary(workspaceMembers),
    },
    availability: {
      title: 'Availability',
      readiness: `${availableCount} available members`,
      items: getAvailabilitySummary(workspaceMembers),
    },
    alerts: getMembersAlerts(workspaceMembers),
  }
}
