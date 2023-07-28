export type astro = {
    astrotype: string,
    astroname: string,
    position: number,
    angle: number,
    orb: number
};


export type aspect = {
    astrotypeA: string,
    astronameA: string,
    positionA: number, // we will call position the position in the ecliptic
    angleA: number, // we will call angle the angle in the map drawing
    typeOfAspect: string,
    astrotypeB: string,
    astronameB: string,
    positionB: number, // we will call position the position in the ecliptic
    angleB: number, // we will call angle the angle in the map drawing
};