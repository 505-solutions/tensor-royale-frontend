import { dummyProblems } from './dummy-data';

export function getProblemById(id: number | undefined) {
  if (id !== undefined) {
    return dummyProblems.filter((problem) => problem.id === id)[0];
  }
  return null;
}
