import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { DRAFTS_QUERY } from './DraftsPage'
import { FEED_QUERY } from './FeedPage'

class DetailPage extends Component {
  render() {
    return (
      <Query query={POST_QUERY} variables={{ id: this.props.match.params.id }}>
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
      <Mutation
        mutation={PUBLISH_MUTATION}
        update={(cache, { data }) => {
          const { drafts } = cache.readQuery({ query: DRAFTS_QUERY })
          const { feed } = cache.readQuery({ query: FEED_QUERY })
          cache.writeQuery({
            query: FEED_QUERY,
            data: { feed: feed.concat([data.publish]) },
          })
          cache.writeQuery({
            query: DRAFTS_QUERY,
            data: {
              drafts: drafts.filter(draft => draft.id !== data.publish.id),
            },
          })
        }}
      >
        {(publish, { data, loading, error }) => {
          return (
            <a
              className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
              onClick={async () => {
                await publish({
                  variables: { id },
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
      <Mutation
        mutation={DELETE_MUTATION}
        update={(cache, { data }) => {
          if (isPublished) {
            const { feed } = cache.readQuery({ query: FEED_QUERY })
            cache.writeQuery({
              query: FEED_QUERY,
              data: {
                feed: feed.filter(post => post.id !== data.deletePost.id),
              },
            })
          } else {
            const { drafts } = cache.readQuery({ query: DRAFTS_QUERY })
            cache.writeQuery({
              query: DRAFTS_QUERY,
              data: {
                drafts: drafts.filter(draft => draft.id !== data.deletePost.id),
              },
            })
          }
        }}
      >
        {(deletePost, { data, loading, error }) => {
          return (
            <a
              className="f6 dim br1 ba ph3 pv2 mb2 dib black pointer"
              onClick={async () => {
                await deletePost({
                  variables: { id },
                })
                this.props.history.replace('/')
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
    delete_posts(id: $id) {
      id
    }
  }
`

export default withRouter(DetailPage)
