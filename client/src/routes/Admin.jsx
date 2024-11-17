import React, { useEffect, useState } from 'react';
import { $authHost } from '../api';
import { exportHandler } from '../handlers';
import { Octokit } from 'octokit';

const Admin = () => {

  const [commits, setCommits] = useState([]);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

  const downloadHandler = () => {
    $authHost.get('api/callRequest').then(
      ({ data: { payload } }) => {
        exportHandler(payload);
      }
    )
  }

  const calcTime = (date1, date2) => {
    const hours = (date1 - date2) / (1000 * 60 * 60);
    if (hours < 24) {
      return `${Math.round(hours)} hours ago`
    } else {
      return `${Math.round(hours / 24)} days ago`
    }
  }

  useEffect(
    () => {
      let items = []
      const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_TOKEN });
      octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: process.env.REACT_APP_GITHUB_OWNER,
        repo: process.env.REACT_APP_GITHUB_REPO,
        per_page: 10
      }).then(
        async ({ data }) => {
          setTotal(data.length);
          for (let i = 0; i < data.length; i++) {
            setCounter(i + 1);
            const resp = await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}',
              {
                owner: process.env.REACT_APP_GITHUB_OWNER,
                repo: process.env.REACT_APP_GITHUB_REPO,
                ref: data[i].sha
              }
            );
            if (items.filter(j => j.sha === data[i].sha).length === 0) {
              items.push(resp.data);
            }
          }
          return items;
        }
      ).then(() => setCommits(items));
    }, []
  );

  return (
    <div className='admin_container'>
      <h1>ADMIN</h1>
      <button onClick={downloadHandler}>Скачать отчет</button>
      <h2>Last 10 commits</h2>
      <div className="commits_container">
        {commits.length === 0 ? <h3>{`Loading... (${counter} / ${total})`}</h3> :
          commits.map((commit, idx) => <div key={idx} className='commit'>
            <h3>{commit.commit.message}</h3>
            <div>
              {commit.files.map(file => <div key={file.sha}>
                <span>{file.filename}</span>
                <span className='additions'>{` +${file.additions} `}</span>
                <span>/</span>
                <span className='deletions'>{` -${file.deletions}`}</span>
              </div>)}
            </div>
            <p>{calcTime(new Date(), new Date(commit.commit.author.date))}</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default Admin