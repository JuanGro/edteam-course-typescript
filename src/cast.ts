// const canvas = <HTMLCanvasElement>document.getElementById('#canvas');
const canvas = document.getElementById('#canvas') as HTMLCanvasElement;
// const context2D = canvas.getContext('2d');
const context2D = (canvas as HTMLCanvasElement).getContext('2d');