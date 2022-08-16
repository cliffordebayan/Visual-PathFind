class Heuristic{
	constructor(){
	}

	ManhattanDist(end_v, adjSides){
		return Math.abs(end_v[1] - adjSides[1]) + Math.abs(end_v[0] - adjSides[0])
	}
}