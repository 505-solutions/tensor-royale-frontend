export interface ProblemModel {
  id: number;
  user_address: string;
  timestamp: number;
  deadline: number;
  title: string;
  description: string;
  reward: number;
  solved: boolean;
  submissions_count: number;
  has_dataset: boolean;
}

export interface DataModel {
  id: number;
  file_train: unknown; // nek zip file
  description: string;
  problem_id: number | null;
}

export interface ModelTraining {
  id: number;
  problem_id: number | null;
  data_id: number | null;
  model: unknown; //nek natreniran model
}

export interface DatasetModel {
  id: number;
  timestamp: number;
  author: string;
  problem: ProblemModel | null;
  description: string;
  file_url: string;
}
