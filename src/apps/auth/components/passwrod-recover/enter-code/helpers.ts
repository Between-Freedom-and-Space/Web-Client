export function formatTimeRemainedSeconds(seconds: number): string {
    const minutes = seconds / 60;
    return `${minutes}:${seconds % 60}`
}