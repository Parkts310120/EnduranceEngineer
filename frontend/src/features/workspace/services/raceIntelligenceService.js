import { getRaceControl } from './raceControlService'

export function getRaceIntelligence() {
  const control = getRaceControl()

  return {
    hero: {
      title: 'Race Intelligence',
      description: 'Operational recommendations generated from the current race state.',
      confidence: 92,
      status: 'Active analysis',
    },

    recommendations: [
      {
        id: 'prepare-next-driver',
        priority: 'high',
        title: `Prepare ${control.currentStint.nextDriver}`,
        message: `Driver swap expected in ${18} minutes.`,
        impact: 'Avoid late pit preparation',
      },
      {
        id: 'fuel-save',
        priority: 'medium',
        title: 'Fuel target is stable',
        message: `${control.currentStint.fuel}% fuel remaining. Current pit window remains valid.`,
        impact: 'Keep planned stop window',
      },
      {
        id: 'tyre-extend',
        priority: 'medium',
        title: 'Tyres can stay out',
        message: `${control.currentStint.tyres}% tyre life on ${control.currentStint.tyreSet}. No tyre change recommended yet.`,
        impact: 'Reduce pit lane time',
      },
    ],

    risks: [
      {
        id: 'pit-prep',
        severity: 'warning',
        title: 'Pit preparation window approaching',
        message: 'Confirm fuel, driver swap and comms checklist before the next stop.',
      },
    ],
  }
}
