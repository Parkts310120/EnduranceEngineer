import { MEMBER_ROLES } from '../../../domain/constants'
import { getMembersByWorkspace, getSquadByWorkspace } from '../../members/services/membersRepository'

const roleTone = {
  driver: 'accent',
  race_engineer: 'success',
  strategist: 'warning',
  spotter: 'neutral',
  team_manager: 'accent',
  analyst: 'success',
}

const statusTone = {
  Available: 'success',
  Ready: 'success',
  'Lead driver': 'accent',
  'Night block': 'warning',
  'Support crew': 'neutral',
}

function getWorkspaceMembers(workspace) {
  return getMembersByWorkspace(workspace)
    .map((member) => ({
      ...member,
      primaryRole: member.roles[0],
      primaryRoleLabel: MEMBER_ROLES[member.roles[0]],
      roleTone: roleTone[member.roles[0]] ?? 'neutral',
      statusTone: statusTone[member.status] ?? 'neutral',
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
    label: MEMBER_ROLES[role] ?? role,
    count,
    tone: roleTone[role] ?? 'neutral',
  }))
}

function getStatusSummary(workspaceMembers) {
  return Object.entries(
    workspaceMembers.reduce((summary, member) => {
      return {
        ...summary,
        [member.status]: (summary[member.status] ?? 0) + 1,
      }
    }, {}),
  ).map(([status, count]) => ({
    status,
    count,
    tone: statusTone[status] ?? 'neutral',
  }))
}

function getMembersAlerts(workspaceMembers) {
  const availableDrivers = workspaceMembers.filter(
    (member) => member.roles.includes('driver') && ['Available', 'Ready', 'Lead driver'].includes(member.status),
  )

  if (availableDrivers.length >= 3) {
    return [
      {
        id: 'members-alert-ready',
        severity: 'info',
        tone: 'accent',
        title: 'Driver coverage looks healthy',
        message: 'At least three assigned drivers are ready for the next planning cycle.',
      },
    ]
  }

  return [
    {
      id: 'members-alert-driver-coverage',
      severity: 'warning',
      tone: 'warning',
      title: 'Driver coverage needs review',
      message: 'Confirm driver availability before locking the stint plan.',
    },
  ]
}

export function getMembersOverview(workspace) {
  const squad = getSquadByWorkspace(workspace)
  const workspaceMembers = getWorkspaceMembers(workspace)
  const readyStatuses = ['Available', 'Ready', 'Lead driver']
  const readyCount = workspaceMembers.filter((member) => readyStatuses.includes(member.status)).length
  const driverCount = workspaceMembers.filter((member) => member.roles.includes('driver')).length

  return {
    hero: {
      title: 'Members',
      description: 'Manage the people assigned to this endurance workspace. Driver is a role, not the primary entity.',
      status: `${readyCount}/${workspaceMembers.length} ready`,
      focus: squad?.name ?? 'Workspace squad',
    },
    summary: [
      { label: 'Assigned members', value: workspaceMembers.length, detail: 'Workspace crew' },
      { label: 'Drivers', value: driverCount, detail: 'Members with driver role' },
      { label: 'Ready now', value: readyCount, detail: 'Available for planning' },
      { label: 'Role coverage', value: getRoleSummary(workspaceMembers).length, detail: 'Active roles in squad' },
    ],
    members: workspaceMembers,
    roles: {
      title: 'Role coverage',
      items: getRoleSummary(workspaceMembers),
    },
    availability: {
      title: 'Crew status',
      readiness: `${readyCount} ready members`,
      items: getStatusSummary(workspaceMembers),
    },
    alerts: getMembersAlerts(workspaceMembers),
  }
}
