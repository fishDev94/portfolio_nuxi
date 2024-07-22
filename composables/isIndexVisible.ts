const isIndexVisible = (idx: number, actualIdx: number): string =>
  actualIdx === idx ? "active" : "";

export default isIndexVisible;