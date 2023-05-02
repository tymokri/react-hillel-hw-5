import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {goBattle} from '../../constants/API';
import PlayerPreview from "../../components/PlayerPreview";
import Loader from '../../components/Loader';

const Results = () => {
    const [players, setPlayers] = useState([]);
    const [standoff, setStandoff] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const getBattleResults = async () => {
        try {
            setIsLoading(true);
            const players = await goBattle([
                params.get('playerOneName'),
                params.get('playerTwoName')
            ]);
            if (players) {
                setPlayers(players);
                setStandoff(players.every(item => item.score === 0));
            }
        } catch (err) {
            throw new Error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getBattleResults();
    }, []);

    if (!players) return <div>There are no players</div>

    return (
        <>
            {standoff
                ?
                <div className="container">
                    <h2 className="header">There is no winner</h2>
                    <div className="row">
                        {players.map(player => (
                            <div
                                key={player.profile.id}
                            >score: {player.score}</div>
                        ))}
                    </div>

                    <Link className="button" to='../battle'>Go to Battle!</Link>
                </div>
                :
                <div className="container">
                    <div className="row">
                        <h2>Winner</h2>
                        <h2>Looser</h2>
                    </div>
                    {isLoading
                        ? <Loader />
                        : <div className="row">
                        {players.map(player => (
                            <PlayerPreview
                                key={player.profile.id}
                                avatar={player.profile.avatar_url}
                                username={player.profile.login}
                            >
                                <ul>
                                    <li style={{display: player.profile.location ? 'auto' : 'none'}}>
                                        location: {player.profile.location}
                                    </li>
                                    <li style={{display: player.profile.company ? 'auto' : 'none'}}>
                                        company: {player.profile.company}</li>
                                    <li>followers: {player.profile.followers}</li>
                                    <li>following: {player.profile.following}</li>
                                    <li>public_repos:
                                        <a
                                            href={player.profile.repos_url}
                                            target="_blank"
                                        > {player.profile.repos_url}
                                        </a>
                                    </li>
                                    <li style={{display: player.profile.blog ? 'auto' : 'none'}}>
                                        blog:
                                        <a
                                            href={player.profile.blog}
                                            target="_blank"
                                        > {player.profile.blog}
                                        </a>
                                    </li>
                                </ul>
                            </PlayerPreview>
                        ))}
                    </div>}
                </div>
            }
        </>
    );
};

export default Results;