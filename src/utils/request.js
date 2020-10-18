function parseJSON(response, status) {
  return { response: response, status: status };
}

function checkStatus(response) {
  return response.text().then(function (text) {
    return text ? JSON.parse(text) : {};
  });
}

export function fetchRequest(url, options) {
  var status;
  return fetch(url, options)
    .then((resp) => {
      status = resp.status;
      return checkStatus(resp);
    })
    .then((response) => parseJSON(response, status));
}

export default function request(options) {
  var { url, method, headers } = options;
  try {
    var response;
    response = fetchRequest(url, {
      method: method,
      headers: headers,
    });
    return response;
  } catch (err) {
    throw err;
  }
}
