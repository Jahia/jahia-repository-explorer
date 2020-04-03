import React from 'react';
import {useTranslation} from 'react-i18next';
import {PrimaryNavItem} from '@jahia/moonstone';
import Explore from '@jahia/moonstone/dist/icons/Explore';
import {useHistory} from 'react-router';
import REConstants from './RepositoryExplorer.constants';

const RepositoryExplorer = () => {
    const history = useHistory();
    const {t} = useTranslation('jahia-repository-explorer');

    return (
        <PrimaryNavItem role="repository-explorer-menu-item"
                        icon={<Explore/>}
                        label={t('label')}
                        isSelected={history.location.pathname.startsWith(REConstants.ROUTE)}
                        onClick={() => history.push(REConstants.ROUTE)}/>
    );
};

export default RepositoryExplorer;
