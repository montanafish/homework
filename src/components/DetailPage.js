import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { DRAFTS_QUERY } from './DraftsPage'
import { FEED_QUERY } from './FeedPage'

class DetailPage extends Component {
  render() {
    const postId = this.props.match.params && this.props.match.params.id
    return (
      <Query query={POST_QUERY} variables={{ id: postId }}>
        {({ data, loading, error }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>
                  {JSON.stringify(error, null, 2)}
                  An unexpected error occured.
                </div>
              </div>
            )
          }

          if (data.posts.length === 0) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>No record is found</div>
              </div>
            )
          }

          const post = data.posts[0]
          const action = this._renderAction(post)
          return (
            <Fragment>
              <h1 className="f3 black-80 fw4 lh-solid">{post.title}</h1>
              <p className="black-80 fw3">{post.text}</p>
              {action}
            </Fragment>
          )
        }}
      </Query>
    )
  }

  _renderAction = ({ id, isPublished }) => {
    const publishMutation = (
      <Mutation mutation={PUBLISH_MUTATION}>
        {(publish, { data, loading, error }) => {
          return (
            <a
              className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
              onClick={async () => {
                await publish({
                  variables: { id },
                  refetchQueries: [{ query: DRAFTS_QUERY }, { query: FEED_QUERY }],
                })
                this.props.history.replace('/')
              }}
            >
              Publish
            </a>
          )
        }}
      </Mutation>
    )
    const deleteMutation = (
      <Mutation mutation={DELETE_MUTATION}>
        {(deletePost, { data, loading, error }) => {
          return (
            <a
              className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
              onClick={async () => {
                await deletePost({
                  variables: { id },
                  refetchQueries: [{ query: DRAFTS_QUERY }, { query: FEED_QUERY }],
                }).then(result => {
                  console.log('isPublished', result.data.deletePost.returning[0].isPublished)
                  if (result.data.deletePost.returning[0].isPublished) {
                    this.props.history.replace('/')
                  } else {
                    this.props.history.replace('/drafts')
                  }
                })
              }}
            >
              Delete
            </a>
          )
        }}
      </Mutation>
    )
    if (!isPublished) {
      return (
        <Fragment>
          {publishMutation}
          {deleteMutation}
        </Fragment>
      )
    }
    return deleteMutation
  }
}

const POST_QUERY = gql`
  query PostQuery($id: Int!) {
    posts(where: { id: { _eq: $id } }) {
      id
      title
      text
      isPublished
    }
  }
`

const PUBLISH_MUTATION = gql`
  mutation PublishMutation($id: Int!) {
    update_posts(where: { id: { _eq: $id } }, _set: { isPublished: true }) {
      affected_rows
    }
  }
`

const DELETE_MUTATION = gql`
  mutation DeleteMutatoin($id: Int!) {
    deletePost: delete_posts(where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
        isPublished
      }
    }
  }
`

export default withRouter(DetailPage)
