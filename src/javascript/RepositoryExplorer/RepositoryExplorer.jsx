import React from 'react';
import {useTranslation} from 'react-i18next';
import {Explore, PrimaryNavItem} from '@jahia/moonstone';
import {useHistory} from 'react-router';
import REConstants from './RepositoryExplorer.constants';

const RepositoryExplorer = props => {
    const history = useHistory();
    const {t} = useTranslation('jahia-repository-explorer');

    return (
        <PrimaryNavItem {...props}
                        icon={<Explore/>}
                        label={t('label')}
                        isSelected={history.location.pathname.startsWith(REConstants.ROUTE)}
                        onClick={() => history.push(REConstants.ROUTE)}/>
    );
};

export default RepositoryExplorer;
