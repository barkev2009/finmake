import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommit, fetchCommits } from '../../store/adminSlice';

const Commits = () => {

    const commits = useSelector(state => state.admin.commits.data);
    const refs = useSelector(state => state.admin.commits.refs);
    const total = useSelector(state => state.admin.commits.total);
    const dispatch = useDispatch()

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
            if (refs.length === 0) {
                dispatch(fetchCommits({ per_page: 10 }))
            }
        }, []
    );
    useEffect(
        () => {
            if (commits.length !== refs.length) {
                refs.forEach(({ ref }) => dispatch(fetchCommit({ ref })));
            }
        }, [refs]
    );

    return (
        <div className="commits_container">
            {commits.length === 0 ? <h3>{`Loading... `}</h3> :
                commits.map((commit, idx) => <div key={idx} className='commit'>
                    <h3>{commit.commit.message}</h3>
                    <div>
                        {commit.files.map(file => <div key={file.sha}>
                            <span className='filename' style={{ color: defineFileColor(file) }}>{file.filename}</span>
                            <span className='additions'>{` +${file.additions} `}</span>
                            <span>/</span>
                            <span className='deletions'>{` -${file.deletions}`}</span>
                        </div>)}
                    </div>
                    <p>{calcTime(new Date(), new Date(commit.commit.author.date))}</p>
                </div>)
            }
        </div>
    )
}

export default Commits