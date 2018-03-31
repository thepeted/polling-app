function postPoll(parent, args, context, info) {
  const { name, options } = args
  return context.db.mutation.createPoll({ 
    data: { 
      name,
      options: { create: options }
     } 
    }, info)
  }

  function vote(parent, args, context, info) {
    const { pollId } = args
    return context.db.mutation.createVote({ 
      data: {
        option: { connect: { id: pollId } }
      } 
    }, info)
  }

module.exports = {
  postPoll,
  vote
}