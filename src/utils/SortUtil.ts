type HasDate = {
  date: string;
};

function byDateAscending<T extends HasDate>(a: T, b: T) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

export function sortByDateAscending<T extends HasDate>(a: T[]) {
  return a.sort(byDateAscending);
}
