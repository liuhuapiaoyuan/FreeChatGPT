export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';

export const availableEndpoints = [
  'https://closeai.deno.dev/v1/chat/completions',
  'https://sharegpt.churchless.tech/share/v1/chat',
  'https://chatgpt-api.shn.hk/v1/',
  officialAPIEndpoint,
];

export const defaultAPIEndpoint = availableEndpoints[0];
