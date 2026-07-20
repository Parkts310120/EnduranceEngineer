import { evaluateRaceState } from './raceRulesEngine'
import { getRaceState } from './raceStateService'

export function getRaceIntelligence() {
  const state = getRaceState()
  const analysis = evaluateRaceState(state)

  return {
    hero: {
      title: 'Race Intelligence',
      description: 'Operational recommendations generated from the current race state.',
      confidence: analysis.confidence,
      status: 'Active analysis',
    },

    recommendations:
      analysis.recommendations.length > 0
        ? analysis.recommendations
        : [
            {
              id: 'stable-strategy',
              priority: 'low',
              title: 'Strategy looks stable',
              message: 'No immediate intervention required from the current race state.',
              impact: 'Keep monitoring.',
            },
          ],

    risks:
      analysis.risks.length > 0
        ? analysis.risks
        : [
            {
              id: 'no-critical-risk',
              severity: 'info',
              title: 'No critical risks detected',
              message: 'Fuel, tyres and stint timing are inside the expected operating window.',
            },
          ],
  }
}
