export const coordinates = (
    centerX: number,
    centerY: number,
    radius: number
) => (angle: number) => {
    return {
        x: radius * Math.cos(((2 * Math.PI) / 360.0) * (angle + 90)) + centerX,
        y: radius * Math.sin(((2 * Math.PI) / 360.0) * (angle + 90)) + centerY
    }
}
