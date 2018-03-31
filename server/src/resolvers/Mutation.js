function postPoll(parent, args, context, info) {
  const { name, options } = args
  return context.db.mutation.createPoll(
    { data: { name,
      options: {
        create: options
      }
     } }, info)
  }

module.exports = {
  postPoll
}