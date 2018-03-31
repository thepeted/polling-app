function post(parent, args, context, info) {
  const { name } = args
  return context.db.mutation.createPoll({ data: { name } }, info)
}

module.exports = {
  post
}