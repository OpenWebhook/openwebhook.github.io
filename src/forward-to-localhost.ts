import { hasPropertyStatus } from "./helpers/type-checkers";
import { Webhook } from "./WebhookDisplay/WebhookList.component";

export const forwardWebhookToLocalhost = async (
  baseUrl: string,
  webhook: Webhook,
  setWebhookResponse?: Function
): Promise<void> => {
  try {
    const res = await sendXhrRequest(
      `${baseUrl}/${webhook.path}`,
      JSON.parse(webhook.headers),
      webhook.body
    );
    console.log(res);
    setWebhookResponse && setWebhookResponse({ code: "sent" });
  } catch (err: unknown) {
    console.log(err);
    const errStatus = hasPropertyStatus(err) ? err.status : null;

    setWebhookResponse &&
      setWebhookResponse({ error: `Error code: ${errStatus}` || "Has error" });
  }
};

const UNSAFE_HEADERS_REGEXP =
  /^(?:host|origin|cookie|user-agent|content-length|version|referer|sec-ch-ua|connection|sec-fetch-dest|sec-fetch-mode|sec-fetch-site|accept-encoding|sec-ch-ua-mobile|sec-ch-ua-platform|via)$/i;

function sendXhrRequest(
  url: string,
  headers: Record<string, string>,
  data: string
): Promise<XMLHttpRequest> {
  const method = "POST";
  let requestUrl = url;

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, requestUrl, true);

    xhr.onreadystatechange = (event) => {
      console.log("event", event);
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (Math.floor(xhr.status / 100) === 2) {
          resolve(xhr);
        } else if (Math.floor(xhr.status / 100) === 0) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      }
    };

    Object.entries(headers).forEach(([key, value]) => {
      if (!key.match(UNSAFE_HEADERS_REGEXP)) {
        xhr.setRequestHeader(key, value);
      }
    });

    xhr.send(data);
  });
}