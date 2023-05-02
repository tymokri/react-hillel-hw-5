import React, {useEffect, useState} from 'react';
import {fetchPopularRepos} from "../../constants/API";
import {useSearchParams} from "react-router-dom";
import LanguagesList from '../../components/LanguagesList';
import PopularItemsList from '../../components/PopularItemsList';
import Loader from '../../components/Loader';


const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchLangParam = searchParams.get('lang') || 'All';

    useEffect(() => {
        fetchData();
        setSelectedLanguage(searchLangParam);
    }, []);

    useEffect(() => {
        setSearchParams({lang: selectedLanguage});
        fetchData();
    }, [selectedLanguage]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await fetchPopularRepos(selectedLanguage);
            setRepos(data);
        } catch (err) {
            throw new Error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <LanguagesList
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                isLoading={isLoading}
            />
            {isLoading
                ? <Loader />
                : <PopularItemsList repos={repos}/>}
        </div>
    );
};

export default Popular;