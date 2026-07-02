// Lightweight JSDoc typedefs keep the MVP JavaScript-based while documenting the domain shape.

/** @typedef {'driver' | 'race_engineer' | 'strategist' | 'spotter' | 'team_manager' | 'analyst'} MemberRole */
/** @typedef {'race' | 'championship' | 'training' | 'test_day'} WorkspaceType */
/** @typedef {'planning' | 'ready' | 'active' | 'finished' | 'archived'} WorkspaceStatus */

/**
 * @typedef {Object} Member
 * @property {string} id
 * @property {string} name
 * @property {string} timezone
 * @property {MemberRole[]} roles
 * @property {string[]} strengths
 * @property {string} status
 */

/**
 * @typedef {Object} Workspace
 * @property {string} id
 * @property {string} name
 * @property {WorkspaceType} type
 * @property {WorkspaceStatus} status
 * @property {string} teamId
 * @property {string} squadId
 * @property {string} carId
 */

export {}
