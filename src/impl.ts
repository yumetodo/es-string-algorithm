type Pred = (t: string) => boolean;
export function includes(target: string | string[], searchString: string, n?: number): boolean {
  if (typeof n !== 'number') {
    return target.includes(searchString);
  }
  let i = 0;
  for (const t of target) {
    if (n <= i) {
      break;
    }
    if (t === searchString) {
      return true;
    }
    ++i;
  }
  return false;
}
export function findFirst(target: string | string[], pos: number, pred: Pred): number {
  let i = 0;
  for (const t of target) {
    if (pos <= i && pred(t)) {
      return i;
    }
    ++i;
  }
  return -1;
}
export function findLast(target: string, pos: number, pred: Pred): number {
  const targetArr = Array.from(target);
  // if (targetArr.length <= pos) return -1;
  targetArr.reverse();
  pos = -1 === pos || targetArr.length <= pos ? 0 : targetArr.length - 1 - pos;
  const re = findFirst(targetArr, pos, pred);
  return -1 === re ? -1 : targetArr.length - 1 - re;
}
