export interface ProblemModel {
  id?: number;
  user_address: string;
  timestamp: number;
  deadline: number;
  title: string;
  description: string;
  reward: number;
  solved?: boolean;
  submissions_count?: number;
  has_dataset?: boolean;
}

// to je model k se poslje na backend
export interface DataModel {
  id: number;
  name: string;
  timestamp: number;
  author: string;
  file_train: unknown; // nek zip file
  description: string;
  problem_id: number | undefined;
}

export interface ModelTraining {
  id: number;
  description?: string;
  name: string; 
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
  name: string;
  timestamp: number;
  author: string;
  problem: ProblemModel | null;
  description: string;
  file_url: string;
  size?: number;
}

export interface ActiveModel {
  id: number;
  author: string;
  name: string;
  description: string;
  icon_url: string;
  input_parameters: 'image' | 'object';
  onchain: boolean;
}

export interface LeaderboardEntryModel {
  user: string;
  points: number;
}
