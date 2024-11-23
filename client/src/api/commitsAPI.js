import { octokit } from "./oktokit";


export const fetchCommitsAPI = async ({ per_page }) => {
    const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/commits", {
        owner: process.env.REACT_APP_GITHUB_OWNER,
        repo: process.env.REACT_APP_GITHUB_REPO,
        per_page
    }
    )
    return data
}

export const fetchCommitAPI = async ({ ref }) => {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}',
        {
            owner: process.env.REACT_APP_GITHUB_OWNER,
            repo: process.env.REACT_APP_GITHUB_REPO,
            ref
        }
    );
    return data;
}