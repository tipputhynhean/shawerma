'use strict'

const normalize = (event) => {
  // it's still only a shallow copy (clone)
  // of the original event
  const normEvent = {...event}
  const headers = {}

  for (let header in event.headers) {
    headers[header.toLowerCase()] = event.headers[header]
  }

  normEvent.headers = headers
  return normEvent
}

module.exports = normalize
