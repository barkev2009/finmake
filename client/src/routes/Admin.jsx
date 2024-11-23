import React, { useEffect } from 'react';
import { $authHost } from '../api';
import { exportHandler } from '../handlers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommit, fetchCommits } from '../store/commitsSlice';

const Admin = () => {

  const commits = useSelector(state => state.commits.commits);
  const refs = useSelector(state => state.commits.refs);
  const total = useSelector(state => state.commits.total);
  const dispatch = useDispatch()

  const downloadHandler = () => {
    $authHost.get('api/callRequest').then(
      ({ data: { payload } }) => {
        exportHandler(payload);
      }
    )
  }

  const defineFileColor = (file) => {
    switch (file.status) {
      case 'added':
        return 'green';
      case 'modified':
        return 'darkOrange';
      default:
        return 'red';
    }
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
      dispatch(fetchCommits({ per_page: 10 }))
    }, []
  );
  useEffect(
    () => {
      refs.forEach(({ ref }) => dispatch(fetchCommit({ ref })));
    }, [refs]
  );

  return (
    <div className='admin_container'>
      <h1>ADMIN</h1>
      <button onClick={downloadHandler}>Скачать отчет</button>
      <h2>Last 10 commits</h2>
      <div className="commits_container">
        {commits.length === 0 ? <h3>{`Loading... `}</h3> :
          commits.map((commit, idx) => <div key={idx} className='commit'>
            <h3>{commit.commit.message}</h3>
            <div>
              {commit.files.map(file => <div key={file.sha}>
                <span style={{ color: defineFileColor(file) }}>{file.filename}</span>
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