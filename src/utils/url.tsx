import qs from 'qs';

// export const getURLParameters = (url = location.href || 'www.baidu.com'): Record<string, string> =>
// 	(url.match(/([^?=&]+)(=([^&]))/g || []).reduce((params: any, pair) => {
//     const [key, value] = pair.split('=');
//     params[decodeURIComponent(key)] = decodeURIComponent(value);
//     return params;
//   }, {});

export const clearURLparams = () => {
  history.replaceState(
    null,
    document.title,
    `${location.origin}${location.pathname}`
  );
};

export function getUrlQuery<T>(search = location.search): T {
  const query: unknown = qs.parse(search, { ignoreQueryPrefix: true });
  return query as T;
}

export function stringifyUrl(url: string, query?: Object) {
  if (!query) {
    return url;
  }
  return `${url}?${qs.stringify(query)}`;
}
