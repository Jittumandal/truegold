type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type ApiRequestOptions<TResponse> = {
  path: string;
  method?: ApiMethod;
  headers?: Record<string, string>;
  body?: unknown;
  mockData: TResponse;
};

const MOCK_API_DELAY_MS = 150;

function isMockApiEnabled() {
  return (process.env.EXPO_PUBLIC_API_MODE ?? 'mock') === 'mock';
}

function buildApiUrl(path: string) {
  const baseUrl = process.env.EXPO_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error('EXPO_PUBLIC_API_BASE_URL is not set.');
  }

  return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

function delay(durationMs: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, durationMs);
  });
}

export async function apiRequest<TResponse>({
  path,
  method = 'GET',
  headers,
  body,
  mockData,
}: ApiRequestOptions<TResponse>): Promise<TResponse> {
  // Keep the app on a stable async contract until the live API is ready.
  if (isMockApiEnabled()) {
    await delay(MOCK_API_DELAY_MS);
    return mockData;
  }

  const response = await fetch(buildApiUrl(path), {
    method,
    headers: body === undefined ? headers : { 'Content-Type': 'application/json', ...headers },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`API request failed for ${path} with status ${response.status}.`);
  }

  return (await response.json()) as TResponse;
}
