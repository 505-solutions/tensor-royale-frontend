import axios from 'axios';
import { ProblemModel } from './models';
// import { dateToTimestamp } from './helper-functions';

const instance = axios.create({
  baseURL: 'https://tensorroyale-api.alpi314.com/',
  timeout: 1000,
});

export async function getProblems() {
  const res = await instance.post('problems');
  return res;
}

export async function getProblemById(query: number | undefined) {
  if (query !== undefined) {
    const res = await instance.post('problems/get', { id: query });
    return res.data as ProblemModel;
  }
  return undefined;
}

export async function postProblem(model: any) {
  const data = {
    user_address: 'sample address',
    timestamp: Date.now(),
    deadline: Math.floor(new Date(model.deadline).getTime() / 1000),
    title: model.title,
    description: model.description,
    reward: model.reward,
  };

  const res = await instance.post('problems/create', data);
  return res;
}

export async function getDatasets() {
  const res = await instance.post('data', {});
  return res;
}

export async function getProblemDatasets(id: number) {
  const res = await instance.post('data', { problem_id: id });
  return res;
}

export async function postDataset(model: any) {
  const data = {
    timestamp: Date.now(),
    file_train: model.file.name,
    description: model.description,
    problem_id: model.problem_id,
  };

  console.log(data);

  const res = await instance.post('data/create', data);
  console.log(res);
}

export async function postSubmission(model: any) {
  const data = {
    data_id: model.data_id,
    name: model.name,
    description: model.data_id,
    model: model.file.name,
    author: 'wallet address',
  };

  const res = await instance.post('models/create', data);
  console.log(res);
}

export async function getProblemSubmissions(id: number) {
  const res = await instance.post('models', { problem_id: id });
  console.log(res);
  return res;
}
