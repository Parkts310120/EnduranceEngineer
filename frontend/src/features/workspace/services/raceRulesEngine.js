export function evaluateRaceState(state) {
  const recommendations = []
  const risks = []

  let confidence = 100

  function addRecommendation({
    id,
    priority,
    title,
    message,
    impact,
    reasoning,
    confidencePenalty = 0,
  }) {
    confidence -= confidencePenalty

    recommendations.push({
      id,
      priority,
      title,
      message,
      impact,
      confidence: Math.max(0, 100 - confidencePenalty),
      reasoning,
    })
  }

  if (state.car.fuelPercent <= 25) {
    addRecommendation({
      id: 'fuel-low',
      priority: 'high',
      title: 'Fuel window approaching',
      message: `Only ${state.car.fuelPercent}% fuel remaining.`,
      impact: 'Prepare pit stop.',
      confidencePenalty: 8,
      reasoning: [
        `Fuel level: ${state.car.fuelPercent}%`,
        'Pit window is approaching',
        'Current stint should not be extended',
      ],
    })
  }

  if (state.car.tyreLifePercent <= 35) {
    addRecommendation({
      id: 'tyres',
      priority: 'medium',
      title: 'Tyre degradation increasing',
      message: `${state.car.tyreLifePercent}% tyre life remaining.`,
      impact: 'Evaluate tyre change.',
      confidencePenalty: 6,
      reasoning: [
        `Tyre life: ${state.car.tyreLifePercent}%`,
        'Grip may start decreasing',
        'Monitor degradation trend',
      ],
    })
  }

  if (state.stint.remainingMinutes <= 20) {
    addRecommendation({
      id: 'driver',
      priority: 'high',
      title: `Prepare ${state.stint.nextDriver}`,
      message: `Driver swap expected in ${state.stint.remainingMinutes} minutes.`,
      impact: 'Avoid pit delay.',
      reasoning: [
        `Current stint remaining: ${state.stint.remainingMinutes} min`,
        `Next driver: ${state.stint.nextDriver}`,
        'Crew should prepare swap procedure',
      ],
    })
  }

  if (state.stint.remainingMinutes <= 10) {
    risks.push({
      id: 'pit-window',
      severity: 'warning',
      title: 'Pit window critical',
      message: 'Crew should already be in position.',
    })

    confidence -= 4
  }

  confidence = Math.max(0, Math.min(100, confidence))

  return {
    confidence,
    recommendations,
    risks,
  }
}
