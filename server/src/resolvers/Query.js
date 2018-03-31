function polls(parent, args, context, info) {
  return context.db.query.polls({}, info)
}

module.exports = {
  polls
}