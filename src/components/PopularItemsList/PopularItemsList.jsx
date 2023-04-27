import React from 'react';

const PopularItemsList = ({repos}) => {
    return (
        <ul className="popular-list">
            {repos ? repos.map((repo, index) => (
                <li
                    className="popular-item"
                    key={repo.id}
                >
                    <div className="popular-rank">
                        #{index +1}
                    </div>
                    <ul>
                        <li>
                            <img
                            className="avatar"
                            src={repo.owner.avatar_url}
                            alt="Avatar"
                            />
                        </li>
                        <li>
                            <a
                                href={repo.html_url}
                                target="_blank"
                            >
                                {repo.name}
                            </a>
                        </li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                </li>
            )) : null}
        </ul>
    );
};

export default PopularItemsList;