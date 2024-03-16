import {
  ActiveModel,
  LeaderboardEntryModel,
} from './models';




export const dummyActiveModels: ActiveModel[] = [
  {
    id: 1,
    author: '0xbdd01feeD4EFDE1CeACC502E60E40bea1CDa8AFB',
    name: 'My Model',
    description: 'This is a sample model',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 2,
    author: '0x0123456789abcdef0123456789abcdef01234567',
    name: 'Another Model',
    description: 'A different sample model',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
  {
    id: 3,
    author: '0x89abcdef0123456789abcdef0123456789abcdef',
    name: 'Yet Another Model',
    description: 'Yet another sample model',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 4,
    author: '0x23456789abcdef0123456789abcdef0123456789',
    name: 'Model 4',
    description: 'Description 4',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
  {
    id: 5,
    author: '0x3456789abcdef0123456789abcdef0123456789a',
    name: 'Model 5',
    description: 'Description 5',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 6,
    author: '0x456789abcdef0123456789abcdef0123456789ab',
    name: 'Model 6',
    description: 'Description 6',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
  {
    id: 7,
    author: '0x56789abcdef0123456789abcdef0123456789abc',
    name: 'Model 7',
    description: 'Description 7',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 8,
    author: '0x6789abcdef0123456789abcdef0123456789abcd',
    name: 'Model 8',
    description: 'Description 8',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
  {
    id: 9,
    author: '0x789abcdef0123456789abcdef0123456789abcde',
    name: 'Model 9',
    description:
      'Description 9 ;laksfoliajf;da pa;sma FLASMFALDSKASKdadaSKDASMDAMSDASM APKSDADDSDASDALASDASD ADA DLKASD AS D',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'image',
    onchain: true,
  },
  {
    id: 10,
    author: '0x89abcdef0123456789abcdef0123456789abcdef0',
    name: 'Model 10',
    description: 'Description 10',
    icon_url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png',
    input_parameters: 'object',
    onchain: false,
  },
];

export const dummyLeaderboardData: LeaderboardEntryModel[] = [
  { user: '0xD121c2a0c22528B1FA38EE2BbE2cDB49ce4aB5F4', points: 957 },
  { user: '0x9FF10E2466a4BD6c0F3D5F9E9eCf09faE4CFecbf', points: 525 },
  { user: '0x8d3ABE494FcEe90DEa9fb2D8a0E36Ab5fb6Aa4EE', points: 496 },
  { user: '0xEe5619bC6cCDCCB1fAfc7B0Fde20a0Dc7aFf4C4a', points: 487 },
  { user: '0x7aD6a8d1aFfDc7B0Fde20a0Dc7aFf4C4aEe5619bC', points: 468 },
  { user: '0x6A4EE8d3ABE494FcEe90DEa9fb2D8a0E36Ab5fb6A', points: 456 },
  { user: '0x5F4aB5F4C4aEe5619bC6cCDCCB1fAfc7B0Fde20a0', points: 445 },
  { user: '0x4C4aEe5619bC6cCDCCB1fAfc7B0Fde20a0Dc7aFf4', points: 432 },
  { user: '0x3ABE494FcEe90DEa9fb2D8a0E36Ab5fb6Aa4EE8d', points: 421 },
  { user: '0x2BbE2cDB49ce4aB5F4C4aEe5619bC6cCDCCB1fAf', points: 410 },
  { user: '0x1FA38EE2BbE2cDB49ce4aB5F4C4aEe5619bC6cCD', points: 399 },
  { user: '0x0E2466a4BD6c0F3D5F9E9eCf09faE4CFecbf8d3A', points: 388 },
  { user: '0xF4C4aEe5619bC6cCDCCB1fAfc7B0Fde20a0Dc7aFf', points: 377 },
  { user: '0xE2BbE2cDB49ce4aB5F4C4aEe5619bC6cCDCCB1fAf', points: 366 },
  { user: '0xDCCB1fAfc7B0Fde20a0Dc7aFf4C4aEe5619bC6cC', points: 355 },
  { user: '0xCE2BbE2cDB49ce4aB5F4C4aEe5619bC6cCDCCB1fA', points: 344 },
  { user: '0xBD6c0F3D5F9E9eCf09faE4CFecbf8d3ABE494FcEe', points: 333 },
  { user: '0xAC7B0Fde20a0Dc7aFf4C4aEe5619bC6cCDCCB1fAf', points: 322 },
  { user: '0x9E9eCf09faE4CFecbf8d3ABE494FcEe90DEa9fb2D', points: 311 },
  { user: '0x8d1aFfDc7B0Fde20a0Dc7aFf4C4aEe5619bC6cCD', points: 300 },
  { user: '0x7B0Fde20a0Dc7aFf4C4aEe5619bC6cCDCCB1fAfc', points: 289 },
];
