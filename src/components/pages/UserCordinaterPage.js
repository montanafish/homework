import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
const testArray = [1, 2, 3, 4, 5];
const listItems = testArray.map(number => <li>{number}</li>);
  


export default class UserCordinaterPage extends Component {
  render() {
    return (
      <div>
        {listItems}
        <div>
          <Query query={USERS_INFO}>
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.users.map(user => (
                <div key={user.user_id}>
                  <img
                    src={user.image_url}
                    alt="{use.name}"
                    style={{ maxHeight: "200px", maxWidth: "200px" }}
                  />
                  <p>{`${user.user_id}: ${user.name}`}</p>
                  <p>{`${user.height} : ${user.gender} : ${
                    user.birth_place
                  }`}</p>
                </div>
              ));
            }}
          </Query>
          <h1>コーディネーター</h1>
          コーディネーターのページです きてます
        </div>
        <h1>ユーザー</h1>
        ユーザーのコーディネートページです
      </div>
    );
  }
}

const USERS_INFO = gql`
  {
    users {
      user_id
      name
      image_url
      height
      gender
      birth_place
    }
  }
`;
