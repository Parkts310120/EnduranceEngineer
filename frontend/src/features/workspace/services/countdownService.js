export function getCountdown(event) {
  return {
    title: event.timeLeft,
    description: `Until green flag on ${event.greenFlagLabel}.`,
    meta: 'Event clock',
  }
}
