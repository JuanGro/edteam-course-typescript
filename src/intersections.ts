type alphanumber = string | number;
type numeric = number | undefined;
type key = alphanumber & numeric; // number
const n: key = 2;