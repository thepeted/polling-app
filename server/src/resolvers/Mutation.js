const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.db.mutation.createUser({
    data: { ...args, password }
  })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

async function login(parent, args, context, info) {
  const user = await context.db.query.user({ where: { email: args.email } })
  if (!user) {
    throw new Error(`Could not find user with email: ${args.email}`)
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

function postPoll(parent, args, context, info) {
  const { name, options } = args
  const userId = getUserId(context)
  return context.db.mutation.createPoll({ 
    data: { 
      name,
      postedBy: { connect: { id: userId } },
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
  signup,
  postPoll,
  vote,
  login
}