import { members, squads } from './membersMock'

export function getSquadByWorkspace(workspace) {
  return squads.find((squad) => squad.id === workspace.squadId) ?? null
}

export function getMembersBySquad(squadId) {
  const squad = squads.find((item) => item.id === squadId)
  const memberIds = squad?.memberIds ?? []

  return members.filter((member) => memberIds.includes(member.id))
}

export function getMembersByWorkspace(workspace) {
  return getMembersBySquad(workspace.squadId)
}
