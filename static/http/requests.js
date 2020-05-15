import assign from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/assign";
import retry from "@hydrophobefireman/j-utils/@build-modern/src/modules/retry/index";
export const UNKNOWN_ERROR = "Unknown error";
const initDict = { credentials: "include" };
const func = retry(fetch, 3, 100);
async function fetchRequest(url, headers, options = {}, method) {
  const sendHeaders = assign({}, headers || {});
  const sendOptions = assign({}, initDict, options);
  const req = new Request(url, {
    method,
    headers: sendHeaders,
    ...sendOptions,
  });
  try {
    const resp = await func(req);
    const js = await resp.json();
    const data = js.data || {};
    const error = js.error || data.error;
    if (error) return { error };
    return data;
  } catch (e) {
    return { error: UNKNOWN_ERROR };
  }
}

/**
 * @returns {Promise<{}>}
 * @param {string} url
 * @param {{}} headers
 * @param {RequestInit} options
 */
export function getRequest(url, headers, options) {
  return fetchRequest(url, headers, options, "get");
}
export function postJSONRequest(url, data, headers) {
  const body = JSON.stringify(data);
  const options = { body };
  const hdr = assign({}, headers);
  hdr["content-type"] = "application/json";
  return fetchRequest(url, hdr, options, "post");
}
