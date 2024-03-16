import axios from 'axios';
import { ProblemModel } from './models';
// import { dateToTimestamp } from './helper-functions';

const instance = axios.create({
  baseURL: 'https://tensorroyale-api.alpi314.com/',
  timeout: 1000,
});

const rustApi = axios.create({
  baseURL: 'https://tensorroyale-prover.alpi314.com/',
  timeout: 1000,
});

export async function getProblems() {
  const res = await instance.post('problems');
  return res;
}

export async function getUserProblems(addr: string) {
  const res = await instance.post('problems', { user_address: addr });
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
    user_address: model.address,
    timestamp: Date.now(),
    deadline: Math.floor(new Date(model.deadline).getTime() / 1000),
    title: model.title,
    description: model.description,
    reward: model.reward,
  } as ProblemModel;

  const res = await instance.post('problems/create', data);

  data.id = res.data.id;

  const result = await rustApi.post('problem', data);

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

export async function getUserDatasets(addr: string) {
  const res = await instance.post('data', { author: addr });
  return res;
}

export async function postDataset(model: any) {
  const data = {
    timestamp: Date.now(),
    author: model.author,
    file_train: model.file.name,
    description: model.description,
    problem_id: +model.problem_id,
  };

  console.log(data);

  const res = await instance.post('data/create', data);
  return res;
}

export async function postSubmission(model: any) {
  const data = {
    data_id: model.data_id,
    name: model.name,
    description: model.description,
    model: model.file.name,
    author: model.author,
  };

  const res = await instance.post('models/create', data);
  return res;
}

export async function getProblemSubmissions(id: number) {
  const res = await instance.post('models', { problem_id: id });
  return res;
}

export async function getUserSubmissions(addr: string) {
  const res = await instance.post('models', { author: addr });
  return res; 
}
