
import React from 'react'
import RepoDisplay from "./RepoDisplay";
import LoadingIndicator from "./LoadingIndicator";
import ErrorHandler from "./ErrorHandler";
import { MESSAGES } from "../../constants/appConstants";
import "./graphQl.scss";

/**
 * 
 * @param {*} props Response object from GraphQL. This obj also contains required status of the Query.
 * @param {*} props.loading: is a boolean value to indicate the reponse is in transit
 * @param {*} props.data: contains the actual response we are interested in.
 *  @param {*} props.error: contains information of network Error or Query Errors
 */
const GraphqlReponseHandler = (props) => {
    const { loading, data, error } = props.res;

    // Display loading Icon until the results are displayed
    if (loading) {
        return <LoadingIndicator />
    }

    // In case of error, display a meaningful message to User
    if (error) {
        const isNetworkErr = !!error.networkError;
        const errMsg = isNetworkErr ? MESSAGES.GRAPHQL.NETWORK_ERR : MESSAGES.GRAPHQL.DATA_ERR;
        return <ErrorHandler errMsg={errMsg} />
    }

    // Display data only after checking the error status. 
    if (data) {
        return <RepoDisplay
            repos={data && data.user.repositories}

        />
    }


    return '';

}

export default GraphqlReponseHandler;