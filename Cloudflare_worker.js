addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function gatherResponse(response) { return await response.text()  }
const url = "https://archiveofourown.org/works/"
async function handleRequest(request) {
  if (request.method == "GET") {
    var article=request.url.split("?")[1];
    const response = await fetch(url+article+"?view_adult=true");
    const results = await gatherResponse(response)
    var startPos = results.indexOf("userstuff");
    var endPos = Math.max(results.indexOf("main--"),results.indexOf("chapter--"));
    return new Response(results.slice(startPos+11,endPos-5), {status: 200})
  }

  return new Response ("", { status: 403 })

}
