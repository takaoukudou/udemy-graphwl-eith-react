import client from "./client";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const ME = gql`
  query me {
    user(login:'takaoukudou'){
      name
      avatarUrl
    }
  }
`;

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div>Hello world</div>
				<Query query={ME}>
					{({ loading, error, data }) => {
						if (loading) return "Loading...";
						if (error) return `Error! ${error.message}`;

						return <div>{data.user.name}</div>;
					}}
				</Query>
			</ApolloProvider>
		);
	}
}

export default App;
