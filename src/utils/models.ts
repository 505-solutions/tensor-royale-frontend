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

// to je model k se poslje na backend
export interface DataModel {
  id: number;
  timestamp: number;
  file_train: unknown; // nek zip file
  description: string;
  problem_id: number | null;
}

export interface ModelTraining {
  id: number;
  description?: string;
  author: string;
  timestamp: number;
  problem_id: number | null;
  data_id: number | undefined;
  model: unknown; //nek natreniran model
  size?: string;
}

// to je model k ga hocem dobit nazaj od backenda
export interface DatasetModel {
  id: number;
  timestamp: number;
  author: string;
  problem: ProblemModel | null;
  description: string;
  file_url: string;
  size?: string;
}
