import React from "react";
import { render, cleanup } from "@testing-library/react";
import { ApolloErrorProvider, ApolloMockedProvider, ApolloLoadingProvider } from "../../utils/test-utils/providers";
import LoadingIndicator from "../graphQl/LoadingIndicator";
import  RepoDisplay from "./RepoDisplay";
afterEach(cleanup);

const mockData = {
    "repositories": {
        "totalCount":3,
        "nodes": [
            {
                "createdAt": "2017-09-08T03:53:09Z",
                "description": "Test description",
                "name": "Test Repo Name",
                "url": "https://github.com/TestUrl",
                "viewerPermission": "ADMIN",
                "id": "abc1234"
            },
            {
                "createdAt": "2019-02-13T17:43:06Z",
                "description": "Test description",
                "name": "Test Repo Name",
                "url": "https://github.com/TestUrl",
                "viewerPermission": "WRITE",
                "id": "abc1235"
            },
            {
                "createdAt": "2020-04-23T16:44:20Z",
                "description": null,
                "name": "Test Repo Name",
                "url": "https://github.com/TestUrl",
                "viewerPermission": "WRITE",
                "id": "abc1236"
            }
        ]
    }
}
test("Loading Icon should render if GraphQL is in process of fetching the data", () => {
    const { debug } = render(
        <ApolloLoadingProvider>
            <LoadingIndicator />
        </ApolloLoadingProvider>
    );
    debug();
})



test("Errpage should be rendered if GraphQL request return Error", async () => {
    render(
        <ApolloErrorProvider>
            <LoadingIndicator />
        </ApolloErrorProvider>
    );
})


test("Render RepoDisplay if data is available", async () => {
render(
            <ApolloMockedProvider>
              <RepoDisplay repos={mockData.repositories} />
            </ApolloMockedProvider>
        );

await Promise.resolve();

})


