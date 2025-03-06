| Status Code | Description                                                                                                       |
|-------------|-------------------------------------------------------------------------------------------------------------------|
| **1xx: Informational** |  The server has received the request and is continuing the process .                                                                                                          |
| 100         | Continue: The server has received the request headers and the client should proceed to send the request body.     |
| 101         | Switching Protocols: The server is switching protocols as requested by the client.                                |
| 102         | Processing: The server has accepted the full request but has not yet completed it .                               |
| 103         | Early Hints:  Used to allow the user agent to preload resources while the server prepares a response .            |
| **2xx: Success**       | The action was successfully received, understood, and accepted .                                       |
| 200         | OK: Everything went well with the request .                                                                       |
| 201         | Created                                                                                                           |
| 202         | Accepted                                                                                                          |
| 203         | Non-Authoritative Information                                                                                     |
| 204         | No Content                                                                                                        |
| 205         | Reset Content                                                                                                     |
| 206         | Partial Content                                                                                                   |
| 207         | Multi-Status                                                                                                      |
| 208         | Already Reported                                                                                                  |
| 226         | IM Used                                                                                                           |
| **3xx: Redirection**   | Further action must be taken in order to complete the request .                                        |
| 300         | Multiple Choices                                                                                                  |
| 301         | Moved Permanently                                                                                                 |
| 302         | Found (Previously "Moved Temporarily")                                                                            |
| 303         | See Other                                                                                                         |
| 304         | Not Modified                                                                                                      |
| 305         | Use Proxy                                                                                                         |
| 306         | Switch Proxy                                                                                                      |
| 307         | Temporary Redirect                                                                                                |
| 308         | Permanent Redirect                                                                                                |
| **4xx: Client Error**  | The request contains incorrect syntax or cannot be fulfilled .                                         |
| 400         | Bad Request                                                                                                       |
| 401         | Unauthorized                                                                                                      |
| 402         | Payment Required                                                                                                  |
| 403         | Forbidden                                                                                                         |
| 404         | Not Found: The classic error when the page or website could not be reached .                                      |
| 405         | Method Not Allowed                                                                                                |
| 406         | Not Acceptable                                                                                                    |
| 407         | Proxy Authentication Required                                                                                     |
| 408         | Request Timeout                                                                                                   |
| 409         | Conflict                                                                                                          |
| 410         | Gone                                                                                                              |
| 411         | Length Required                                                                                                   |
| 412         | Precondition Failed                                                                                               |
| 413         | Payload Too Large                                                                                                 |
| 414         | URI Too Long                                                                                                      |
| 415         | Unsupported Media Type                                                                                            |
| 416         | Range Not Satisfiable                                                                                             |
| 417         | Expectation Failed                                                                                                |
| 418         | I'm a Teapot                                                                                                      |
| 421         | Misdirected Request                                                                                               |
| 422         | Unprocessable Entity                                                                                              |
| 423         | Locked                                                                                                            |
| 424         | Failed Dependency                                                                                                 |
| 425         | Too Early                                                                                                         |
| 426         | Upgrade Required                                                                                                  |
| 428         | Precondition Required                                                                                             |
| 429         | Too Many Requests                                                                                                 |
| 431         | Request Header Fields Too Large                                                                                   |
| 451         | Unavailable For Legal Reasons                                                                                     |
| **5xx: Server Error**  | The server failed to fulfill an apparently valid request .                                             |
| 500         | Internal Server Error                                                                                             |
| 501         | Not Implemented                                                                                                   |
| 502         | Bad Gateway                                                                                                       |
| 503         | Service Unavailable                                                                                               |
| 504         | Gateway Timeout                                                                                                   |
| 505         | HTTP Version Not Supported                                                                                        |
| 506         | Variant Also Negotiates                                                                                           |
| 507         | Insufficient Storage                                                                                              |
| 508         | Loop Detected                                                                                                     |
| 510         | Not Extended                                                                                                      |
| 511         | Network Authentication Required                                                                                   |
